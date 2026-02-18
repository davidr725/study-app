import { useState, useCallback, useEffect, useRef } from "react";
import { CONCEPTS, CATEGORIES, CATEGORY_COLORS, MODULE_GROUPS } from "./data/concepts.js";
import { QUESTIONS } from "./data/questions.js";

const FACES = ["term", "definition", "analogy"];
const FACE_LABELS = { term: "Term", definition: "Definition", analogy: "Analogy" };

// ─── MASTERY CONSTANTS ───
const MASTERY_THRESHOLD = 5;

// ─── UTILITIES ───

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom(arr, n) {
  return shuffle(arr).slice(0, n);
}

// Randomize option order so the correct answer isn't always first
function shuffleOptions(question) {
  const indices = shuffle([...Array(question.options.length).keys()]);
  return {
    ...question,
    options: indices.map((i) => question.options[i]),
    correctIndex: indices.indexOf(question.correctIndex),
  };
}

function getWeightFromProgress(progress, conceptId) {
  const p = progress[conceptId];
  if (!p || !p.seen) return 3.0;
  if (p.streak === 0) return 2.5;
  if (p.streak >= MASTERY_THRESHOLD) return 0.3;
  // Learning: scale from 1.5 down to 0.5 as streak approaches threshold
  return 1.5 - ((p.streak - 1) / (MASTERY_THRESHOLD - 1)) * 1.0;
}

function getWeightedRandom(concepts, progress) {
  const totalWeight = concepts.reduce((sum, c) => sum + getWeightFromProgress(progress, c.id), 0);
  let r = Math.random() * totalWeight;
  for (const c of concepts) {
    r -= getWeightFromProgress(progress, c.id);
    if (r <= 0) return c;
  }
  return concepts[concepts.length - 1];
}

function getConceptsForGroup(group) {
  return CONCEPTS.filter((c) => group.modules.includes(c.module));
}

function getQuestionsForGroup(group) {
  return QUESTIONS.filter((q) => group.modules.includes(q.module));
}

// Build a test of N questions from a question pool, weighted by concept mastery
function buildTest(questions, concepts, progress, count = 20) {
  if (questions.length <= count) return shuffle(questions).map(shuffleOptions);

  const weighted = questions.map((q) => ({
    question: q,
    weight: getWeightFromProgress(progress, q.conceptId),
  }));

  const selected = [];
  const used = new Set();

  while (selected.length < count && selected.length < questions.length) {
    const remaining = weighted.filter((w) => !used.has(w.question.id));
    if (remaining.length === 0) break;

    const totalWeight = remaining.reduce((sum, w) => sum + w.weight, 0);
    let r = Math.random() * totalWeight;
    for (const w of remaining) {
      r -= w.weight;
      if (r <= 0) {
        selected.push(w.question);
        used.add(w.question.id);
        break;
      }
    }
  }

  return shuffle(selected).map(shuffleOptions);
}

// ─── SHARED STYLES ───

const S = {
  mono: "'JetBrains Mono', monospace",
  serif: "'IBM Plex Sans', sans-serif",
  heading: "'Space Mono', monospace",
  bg: "#0d0d1a",
  cardBg: "linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)",
  text: "#e0d6c8",
  dim: "#5a5a7a",
  dimmer: "#4a4a6a",
  green: "#27ae60",
  red: "#c0392b",
  yellow: "#f0c674",
};

// ─── BACK BUTTON ───

function BackButton({ onClick, label = "Back" }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        color: S.dim,
        fontFamily: S.mono,
        fontSize: 12,
        cursor: "pointer",
        padding: "8px 0",
        userSelect: "none",
        display: "flex",
        alignItems: "center",
        gap: 4,
      }}
    >
      ← {label}
    </button>
  );
}

// ─── PROGRESS BAR (reused) ───

function ProgressBar({ progress, concepts }) {
  const mastered = concepts.filter((c) => { const p = progress[c.id]; return p && p.seen && p.streak >= MASTERY_THRESHOLD; }).length;
  const learning = concepts.filter((c) => { const p = progress[c.id]; return p && p.seen && p.streak >= 1 && p.streak < MASTERY_THRESHOLD; }).length;
  const struggling = concepts.filter((c) => { const p = progress[c.id]; return p && p.seen && p.streak === 0; }).length;
  const unseen = concepts.filter((c) => { const p = progress[c.id]; return !p || !p.seen; }).length;
  const total = concepts.length;
  if (total === 0) return null;

  return (
    <div>
      <div style={{ display: "flex", height: 4, borderRadius: 2, overflow: "hidden", background: "rgba(255,255,255,0.04)" }}>
        {mastered > 0 && <div style={{ width: `${(mastered / total) * 100}%`, background: S.green, transition: "width 0.4s" }} />}
        {learning > 0 && <div style={{ width: `${(learning / total) * 100}%`, background: S.yellow, transition: "width 0.4s" }} />}
        {struggling > 0 && <div style={{ width: `${(struggling / total) * 100}%`, background: S.red, transition: "width 0.4s" }} />}
        {unseen > 0 && <div style={{ width: `${(unseen / total) * 100}%`, background: "rgba(255,255,255,0.08)", transition: "width 0.4s" }} />}
      </div>
      <div style={{ display: "flex", gap: 16, marginTop: 6 }}>
        {[
          { label: "Mastered", count: mastered, color: S.green },
          { label: "Learning", count: learning, color: S.yellow },
          { label: "Struggling", count: struggling, color: S.red },
          { label: "New", count: unseen, color: S.dim },
        ].map((s) => (
          <span key={s.label} style={{ fontFamily: S.mono, fontSize: 10, color: s.color, opacity: s.count > 0 ? 1 : 0.3 }}>
            {s.count} {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── TEST PROGRESS BAR (green/red/gray segments) ───

function TestProgressBar({ answers, total }) {
  return (
    <div style={{ display: "flex", height: 3, borderRadius: 2, overflow: "hidden", background: "rgba(255,255,255,0.04)", gap: 1 }}>
      {Array.from({ length: total }, (_, i) => {
        let color = "rgba(255,255,255,0.06)";
        if (i < answers.length) {
          color = answers[i] ? S.green : S.red;
        }
        return <div key={i} style={{ flex: 1, background: color, transition: "background 0.3s" }} />;
      })}
    </div>
  );
}

// ─── HOME SCREEN ───

function HomeScreen({ progress, bestScores, flaggedCount, onSelectModule, onStartMarathon, onOpenMissed }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div>
        <h1 style={{ fontFamily: S.heading, fontSize: 22, fontWeight: 700, color: S.yellow, margin: "0 0 4px 0", letterSpacing: "-0.02em" }}>
          Web Concepts
        </h1>
        <p style={{ fontFamily: S.mono, fontSize: 10, color: S.dim, margin: 0, textTransform: "uppercase", letterSpacing: "0.1em" }}>
          {CONCEPTS.length} concepts · {QUESTIONS.length} questions · Spaced Repetition
        </p>
      </div>

      <ProgressBar progress={progress} concepts={CONCEPTS} />

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 4 }}>
        {MODULE_GROUPS.map((group) => {
          const concepts = getConceptsForGroup(group);
          const questions = getQuestionsForGroup(group);
          const mastered = concepts.filter((c) => { const p = progress[c.id]; return p && p.seen && p.streak >= MASTERY_THRESHOLD; }).length;
          const best = bestScores[group.id];

          return (
            <div
              key={group.id}
              onClick={() => onSelectModule(group)}
              style={{
                background: S.cardBg,
                borderRadius: 14,
                padding: "20px 20px",
                cursor: "pointer",
                borderTop: `2px solid ${group.color}30`,
                boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                userSelect: "none",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <div>
                  <div style={{ fontFamily: S.heading, fontSize: 16, fontWeight: 700, color: group.color }}>
                    {group.name}
                  </div>
                  <div style={{ fontFamily: S.mono, fontSize: 10, color: S.dim, marginTop: 2 }}>
                    {group.subtitle}
                  </div>
                </div>
                <div style={{ fontFamily: S.mono, fontSize: 10, color: S.dim, textAlign: "right" }}>
                  {questions.length} questions
                  <br />
                  {concepts.length} concepts
                </div>
              </div>

              <div style={{ display: "flex", height: 3, borderRadius: 2, overflow: "hidden", background: "rgba(255,255,255,0.04)", marginBottom: 8 }}>
                {mastered > 0 && <div style={{ width: `${(mastered / concepts.length) * 100}%`, background: S.green }} />}
                <div style={{ flex: 1, background: "rgba(255,255,255,0.04)" }} />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: S.mono, fontSize: 10, color: S.dim }}>
                  {mastered}/{concepts.length} mastered
                </span>
                {best && (
                  <span style={{ fontFamily: S.mono, fontSize: 10, color: best.score / best.total >= 0.8 ? S.green : S.yellow }}>
                    Best: {best.score}/{best.total}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Missed Questions + Marathon */}
      <div style={{ display: "flex", gap: 10 }}>
        <button
          onClick={onOpenMissed}
          style={{
            flex: 1,
            padding: "14px 16px",
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(26,26,46,0.5)",
            color: S.text,
            fontFamily: S.mono,
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
            userSelect: "none",
            textAlign: "left",
          }}
        >
          Flagged
          {flaggedCount > 0 && (
            <span style={{ marginLeft: 8, background: S.red, color: "#fff", borderRadius: 10, padding: "2px 8px", fontSize: 10 }}>
              {flaggedCount}
            </span>
          )}
        </button>
        <button
          onClick={onStartMarathon}
          style={{
            flex: 1,
            padding: "14px 16px",
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(26,26,46,0.5)",
            color: S.text,
            fontFamily: S.mono,
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
            userSelect: "none",
            textAlign: "left",
          }}
        >
          Marathon
          <span style={{ marginLeft: 8, color: S.dim, fontSize: 10 }}>{QUESTIONS.length}</span>
        </button>
      </div>
    </div>
  );
}

// ─── MODULE DETAIL ───

function ModuleDetail({ group, progress, bestScores, onBack, onStartTest, onStartFlashcards }) {
  const concepts = getConceptsForGroup(group);
  const questions = getQuestionsForGroup(group);
  const best = bestScores[group.id];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <BackButton onClick={onBack} />

      <div>
        <h2 style={{ fontFamily: S.heading, fontSize: 20, fontWeight: 700, color: group.color, margin: "0 0 4px 0" }}>
          {group.name}
        </h2>
        <p style={{ fontFamily: S.mono, fontSize: 10, color: S.dim, margin: 0, textTransform: "uppercase", letterSpacing: "0.1em" }}>
          {group.subtitle}
        </p>
      </div>

      <ProgressBar progress={progress} concepts={concepts} />

      {best && (
        <div style={{ fontFamily: S.mono, fontSize: 12, color: S.dim }}>
          Last best: <span style={{ color: best.score / best.total >= 0.8 ? S.green : S.yellow }}>{best.score}/{best.total} ({Math.round((best.score / best.total) * 100)}%)</span>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <button
          onClick={onStartTest}
          style={{
            padding: "18px 20px",
            borderRadius: 12,
            border: `1px solid ${group.color}40`,
            background: `${group.color}10`,
            color: group.color,
            fontFamily: S.mono,
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            userSelect: "none",
            textAlign: "left",
          }}
        >
          Practice Test
          <span style={{ float: "right", fontWeight: 400, opacity: 0.6 }}>
            {Math.min(20, questions.length)} questions
          </span>
        </button>
        <button
          onClick={onStartFlashcards}
          style={{
            padding: "18px 20px",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(26,26,46,0.5)",
            color: S.text,
            fontFamily: S.mono,
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            userSelect: "none",
            textAlign: "left",
          }}
        >
          Flashcards
          <span style={{ float: "right", fontWeight: 400, opacity: 0.4 }}>
            {concepts.length} concepts
          </span>
        </button>
      </div>

      {/* Concept list */}
      <div>
        <div style={{ fontFamily: S.mono, fontSize: 10, color: S.dim, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
          Concepts
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {concepts.map((c) => {
            const p = progress[c.id];
            let statusColor = S.dim;
            let label = "New";
            if (p && p.seen) {
              if (p.streak >= MASTERY_THRESHOLD) { statusColor = S.green; label = "Mastered"; }
              else if (p.streak >= 1) { statusColor = S.yellow; label = "Learning"; }
              else { statusColor = S.red; label = "Struggling"; }
            }
            const streak = (p && p.seen) ? p.streak : 0;

            return (
              <div
                key={c.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 14px",
                  borderRadius: 8,
                  background: "rgba(26,26,46,0.4)",
                  border: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <span style={{ fontFamily: S.serif, fontSize: 13, color: S.text }}>{c.term}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ display: "flex", gap: 3 }}>
                    {Array.from({ length: MASTERY_THRESHOLD }, (_, i) => (
                      <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: i < streak ? statusColor : "rgba(255,255,255,0.1)", transition: "background 0.3s" }} />
                    ))}
                  </div>
                  <span style={{ fontFamily: S.mono, fontSize: 9, color: statusColor, textTransform: "uppercase", minWidth: 52, textAlign: "right" }}>{label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── PRACTICE TEST ───

function PracticeTest({ questions: testQuestions, progress, setProgress, flagged, setFlagged, onFinish, onBack, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]); // true/false per question
  const [score, setScore] = useState(0);

  const q = testQuestions[currentIndex];
  if (!q) return null;

  const concept = CONCEPTS.find((c) => c.id === q.conceptId);
  const catColor = concept ? (CATEGORY_COLORS[concept.category] || "#888") : "#888";
  const isFlagged = flagged.has(q.id);
  const isAnswered = selected !== null;
  const isCorrect = isAnswered && selected === q.correctIndex;
  const isLastQuestion = currentIndex === testQuestions.length - 1;

  const handleSelect = (index) => {
    if (isAnswered) return;
    setSelected(index);
    const correct = index === q.correctIndex;
    setAnswers((prev) => [...prev, correct]);
    if (correct) setScore((s) => s + 1);

    // Update streak-based progress
    if (concept) {
      setProgress((prev) => {
        const p = { ...prev };
        const current = p[concept.id] || { streak: 0, seen: false };
        if (correct) {
          p[concept.id] = { streak: current.streak + 1, seen: true };
        } else {
          p[concept.id] = { streak: 0, seen: true };
        }
        return p;
      });
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onFinish({ score: score, total: testQuestions.length, answers, questions: testQuestions });
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
    }
  };

  const toggleFlag = () => {
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(q.id)) next.delete(q.id);
      else next.add(q.id);
      return next;
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Top bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <BackButton onClick={onBack} label="Exit" />
        <span style={{ fontFamily: S.mono, fontSize: 14, color: S.text, fontWeight: 700 }}>
          {currentIndex + 1} / {testQuestions.length}
        </span>
        <button
          onClick={toggleFlag}
          style={{
            background: "none",
            border: "none",
            fontSize: 20,
            cursor: "pointer",
            padding: "4px 8px",
            userSelect: "none",
            filter: isFlagged ? "none" : "grayscale(1) opacity(0.3)",
          }}
        >
          {isFlagged ? "\u2691" : "\u2690"}
        </button>
      </div>

      {/* Title */}
      {title && (
        <div style={{ fontFamily: S.mono, fontSize: 10, color: S.dim, textTransform: "uppercase", letterSpacing: "0.08em" }}>
          {title}
        </div>
      )}

      {/* Progress bar */}
      <TestProgressBar answers={answers} total={testQuestions.length} />

      {/* Question card */}
      <div
        style={{
          background: S.cardBg,
          borderRadius: 14,
          padding: "24px 20px",
          boxShadow: "0 6px 24px rgba(0,0,0,0.25)",
          borderTop: `2px solid ${catColor}30`,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 10, fontFamily: S.mono, textTransform: "uppercase", letterSpacing: "0.12em", color: S.dim }}>
            {q.type === "scenario" ? "Scenario" : q.codeSnippet ? "Read the Code" : "Question"}
          </span>
          {concept && (
            <span style={{ fontSize: 9, fontFamily: S.mono, color: catColor, opacity: 0.6 }}>
              {concept.category}
            </span>
          )}
        </div>

        {/* Code snippet block — rendered when question has a codeSnippet field */}
        {q.codeSnippet && (
          <pre
            style={{
              fontFamily: S.mono,
              fontSize: 12,
              color: "#a0d8b0",
              background: "rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 8,
              padding: "12px 14px",
              overflowX: "auto",
              whiteSpace: "pre",
              margin: "0 0 16px 0",
              lineHeight: 1.6,
            }}
          >
            {q.codeSnippet}
          </pre>
        )}

        <p style={{ color: S.text, fontSize: (q.type === "scenario" || q.codeSnippet) ? 14 : 16, fontFamily: S.serif, fontWeight: 400, lineHeight: 1.6, margin: 0 }}>
          {q.prompt}
        </p>
      </div>

      {/* Options */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {q.options.map((opt, i) => {
          const isCorrectOpt = i === q.correctIndex;
          const isSelected = selected === i;
          let bg = "rgba(26,26,46,0.5)";
          let border = "1px solid rgba(255,255,255,0.06)";
          if (isAnswered) {
            if (isCorrectOpt) {
              bg = "rgba(39,174,96,0.15)";
              border = `1px solid ${S.green}`;
            } else if (isSelected && !isCorrectOpt) {
              bg = "rgba(192,57,43,0.15)";
              border = `1px solid ${S.red}`;
            }
          }
          return (
            <div
              key={i}
              onClick={() => handleSelect(i)}
              style={{
                padding: "14px 18px",
                borderRadius: 10,
                background: bg,
                border,
                cursor: isAnswered ? "default" : "pointer",
                transition: "all 0.2s",
                color: "#d0c8bc",
                fontSize: 14,
                fontFamily: S.serif,
                lineHeight: 1.5,
                minHeight: 44,
                userSelect: "none",
              }}
            >
              {opt}
            </div>
          );
        })}
      </div>

      {/* Explanation — ALWAYS shown after answering */}
      {isAnswered && (
        <div
          style={{
            background: isCorrect ? "rgba(39,174,96,0.08)" : "rgba(192,57,43,0.08)",
            border: `1px solid ${isCorrect ? "rgba(39,174,96,0.3)" : "rgba(192,57,43,0.3)"}`,
            borderRadius: 12,
            padding: "16px 18px",
          }}
        >
          <div style={{ fontFamily: S.mono, fontSize: 11, color: isCorrect ? S.green : S.red, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            {isCorrect ? "Correct" : "Incorrect"}
          </div>
          <p style={{ color: S.text, fontSize: 14, fontFamily: S.serif, lineHeight: 1.6, margin: 0 }}>
            {q.explanation}
          </p>
          {q.whySection && (
            <p style={{ color: "#a0a0b0", fontSize: 13, fontFamily: S.serif, lineHeight: 1.6, margin: "12px 0 0 0", fontStyle: "italic" }}>
              {q.whySection}
            </p>
          )}

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
            <button
              onClick={toggleFlag}
              style={{
                background: "none",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8,
                padding: "8px 14px",
                color: isFlagged ? S.yellow : S.dim,
                fontFamily: S.mono,
                fontSize: 11,
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              {isFlagged ? "\u2691 Flagged" : "\u2690 Flag"}
            </button>
            <button
              onClick={handleNext}
              style={{
                padding: "10px 24px",
                borderRadius: 8,
                border: "none",
                background: isCorrect ? S.green : "rgba(255,255,255,0.1)",
                color: "#fff",
                fontFamily: S.mono,
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                minHeight: 44,
                userSelect: "none",
              }}
            >
              {isLastQuestion ? "See Results" : "Next →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── TEST RESULTS ───

function TestResults({ result, questions, onRetryMissed, onBack }) {
  const { score, total, answers } = result;
  const pct = Math.round((score / total) * 100);
  const missed = questions.filter((_, i) => !answers[i]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "center", padding: "20px 0" }}>
      {/* Score circle */}
      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          border: `4px solid ${pct >= 80 ? S.green : pct >= 60 ? S.yellow : S.red}`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ fontFamily: S.heading, fontSize: 32, fontWeight: 700, color: S.text }}>{pct}%</div>
        <div style={{ fontFamily: S.mono, fontSize: 11, color: S.dim }}>{score}/{total}</div>
      </div>

      <div style={{ fontFamily: S.heading, fontSize: 18, color: pct >= 80 ? S.green : pct >= 60 ? S.yellow : S.red, textAlign: "center" }}>
        {pct >= 90 ? "Excellent!" : pct >= 80 ? "Great job!" : pct >= 60 ? "Keep practicing!" : "Let's review those concepts."}
      </div>

      {/* Progress bar summary */}
      <TestProgressBar answers={answers} total={total} />

      {/* Missed questions list */}
      {missed.length > 0 && (
        <div style={{ width: "100%" }}>
          <div style={{ fontFamily: S.mono, fontSize: 10, color: S.dim, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
            Missed ({missed.length})
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {missed.map((q) => {
              const concept = CONCEPTS.find((c) => c.id === q.conceptId);
              return (
                <div
                  key={q.id}
                  style={{
                    padding: "12px 16px",
                    borderRadius: 10,
                    background: "rgba(192,57,43,0.06)",
                    border: "1px solid rgba(192,57,43,0.15)",
                  }}
                >
                  <div style={{ fontSize: 13, fontFamily: S.serif, color: S.text, marginBottom: 6, lineHeight: 1.4 }}>
                    {q.prompt}
                  </div>
                  <div style={{ fontSize: 12, fontFamily: S.serif, color: S.green, lineHeight: 1.4 }}>
                    → {q.options[q.correctIndex]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div style={{ display: "flex", gap: 10, width: "100%" }}>
        <button
          onClick={onBack}
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.1)",
            background: "transparent",
            color: S.text,
            fontFamily: S.mono,
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            minHeight: 44,
            userSelect: "none",
          }}
        >
          Done
        </button>
        {missed.length > 0 && (
          <button
            onClick={() => onRetryMissed(missed)}
            style={{
              flex: 1,
              padding: "14px",
              borderRadius: 10,
              border: "none",
              background: S.yellow,
              color: S.bg,
              fontFamily: S.mono,
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              minHeight: 44,
              userSelect: "none",
            }}
          >
            Retry Missed ({missed.length})
          </button>
        )}
      </div>
    </div>
  );
}

// ─── FLASHCARD MODE (scoped to concepts) ───

function FlashcardMode({ progress, setProgress, concepts, onBack, title }) {
  const [current, setCurrent] = useState(() => getWeightedRandom(concepts, progress));
  const [faceIndex, setFaceIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [selfScore, setSelfScore] = useState(null);

  const cycleFace = () => {
    if (flipping) return;
    setFlipping(true);
    setTimeout(() => {
      setFaceIndex((prev) => (prev + 1) % 3);
      setFlipping(false);
    }, 250);
  };

  const handleScore = (knew) => {
    setSelfScore(knew);
    setProgress((prev) => {
      const p = { ...prev };
      const cur = p[current.id] || { streak: 0, seen: false };
      if (knew) {
        p[current.id] = { streak: cur.streak + 1, seen: true };
      } else {
        p[current.id] = { streak: 0, seen: true };
      }
      return p;
    });
    setTimeout(() => {
      setSelfScore(null);
      setFaceIndex(0);
      setFlipping(true);
      setTimeout(() => {
        setCurrent(getWeightedRandom(concepts, progress));
        setFlipping(false);
      }, 250);
    }, 400);
  };

  const face = FACES[faceIndex];
  const content = current[face];
  const catColor = CATEGORY_COLORS[current.category] || "#888";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <BackButton onClick={onBack} />
        {title && <span style={{ fontFamily: S.mono, fontSize: 10, color: S.dim, textTransform: "uppercase" }}>{title}</span>}
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <div style={{ display: "flex", gap: 8 }}>
          {FACES.map((f, i) => (
            <span
              key={f}
              style={{
                fontSize: 11,
                fontFamily: S.mono,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                padding: "4px 10px",
                borderRadius: 4,
                background: i === faceIndex ? "#1a1a2e" : "transparent",
                color: i === faceIndex ? S.text : "#666",
                fontWeight: i === faceIndex ? 700 : 400,
                transition: "all 0.2s",
                userSelect: "none",
              }}
            >
              {FACE_LABELS[f]}
            </span>
          ))}
        </div>

        <div
          onClick={cycleFace}
          style={{
            width: "100%",
            maxWidth: 480,
            minHeight: 220,
            background: S.cardBg,
            borderRadius: 16,
            padding: "40px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            userSelect: "none",
            transform: flipping ? "rotateY(90deg)" : "rotateY(0deg)",
            transition: "transform 0.25s ease-in-out",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
            position: "relative",
            borderTop: `2px solid ${catColor}30`,
          }}
        >
          <div style={{ position: "absolute", top: 14, left: 18, fontSize: 10, fontFamily: S.mono, color: S.dim, textTransform: "uppercase", letterSpacing: "0.12em" }}>
            {FACE_LABELS[face]}
          </div>
          <div style={{ position: "absolute", top: 14, right: 18, fontSize: 9, fontFamily: S.mono, color: catColor, opacity: 0.6, letterSpacing: "0.06em" }}>
            {current.category}
          </div>
          <p
            style={{
              color: face === "term" ? catColor : S.text,
              fontSize: face === "term" ? 24 : 16,
              fontFamily: face === "term" ? S.heading : S.serif,
              fontWeight: face === "term" ? 700 : 400,
              textAlign: "center",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {content}
          </p>
          <div style={{ position: "absolute", bottom: 14, fontSize: 10, color: S.dimmer, fontFamily: S.mono }}>
            tap to flip → {FACE_LABELS[FACES[(faceIndex + 1) % 3]]}
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <button
            onClick={() => handleScore(false)}
            style={{
              padding: "12px 28px",
              borderRadius: 8,
              border: `2px solid ${S.red}`,
              background: selfScore === false ? S.red : "transparent",
              color: selfScore === false ? "#fff" : S.red,
              fontFamily: S.mono,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.15s",
              minHeight: 44,
              userSelect: "none",
            }}
          >
            Didn't know
          </button>
          <button
            onClick={() => handleScore(true)}
            style={{
              padding: "12px 28px",
              borderRadius: 8,
              border: `2px solid ${S.green}`,
              background: selfScore === true ? S.green : "transparent",
              color: selfScore === true ? "#fff" : S.green,
              fontFamily: S.mono,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.15s",
              minHeight: 44,
              userSelect: "none",
            }}
          >
            Knew it
          </button>
        </div>
      </div>

      <ProgressBar progress={progress} concepts={concepts} />
    </div>
  );
}

// ─── MAIN APP ───

export default function App() {
  const [screen, setScreen] = useState("home");
  const [activeModule, setActiveModule] = useState(null);
  const [testQuestions, setTestQuestions] = useState([]);
  const [testResult, setTestResult] = useState(null);
  const [testTitle, setTestTitle] = useState("");

  // localStorage: streak-based progress
  const [progress, setProgress] = useState(() => {
    try {
      // Try new format first
      const saved = localStorage.getItem("study-progress");
      if (saved) {
        const parsed = JSON.parse(saved);
        const p = { ...parsed };
        CONCEPTS.forEach((c) => { if (!(c.id in p)) p[c.id] = { streak: 0, seen: false }; });
        return p;
      }
      // Migrate from old weight-based system
      const oldSaved = localStorage.getItem("study-weights");
      if (oldSaved) {
        const oldWeights = JSON.parse(oldSaved);
        const p = {};
        CONCEPTS.forEach((c) => {
          const w = oldWeights[c.id];
          if (w === undefined || w === 1) p[c.id] = { streak: 0, seen: false };
          else if (w < 0.6) p[c.id] = { streak: MASTERY_THRESHOLD, seen: true };
          else if (w > 1.2) p[c.id] = { streak: 0, seen: true };
          else p[c.id] = { streak: 1, seen: true };
        });
        localStorage.removeItem("study-weights");
        return p;
      }
    } catch {}
    const p = {};
    CONCEPTS.forEach((c) => (p[c.id] = { streak: 0, seen: false }));
    return p;
  });

  useEffect(() => {
    localStorage.setItem("study-progress", JSON.stringify(progress));
  }, [progress]);

  // localStorage: flagged questions
  const [flagged, setFlagged] = useState(() => {
    try {
      const saved = localStorage.getItem("study-flagged");
      if (saved) return new Set(JSON.parse(saved));
    } catch {}
    return new Set();
  });

  useEffect(() => {
    localStorage.setItem("study-flagged", JSON.stringify([...flagged]));
  }, [flagged]);

  // localStorage: best scores
  const [bestScores, setBestScores] = useState(() => {
    try {
      const saved = localStorage.getItem("study-best-scores");
      if (saved) return JSON.parse(saved);
    } catch {}
    return {};
  });

  useEffect(() => {
    localStorage.setItem("study-best-scores", JSON.stringify(bestScores));
  }, [bestScores]);

  // Navigation helpers
  const goHome = () => {
    setScreen("home");
    setActiveModule(null);
    setTestQuestions([]);
    setTestResult(null);
  };

  const selectModule = (group) => {
    setActiveModule(group);
    setScreen("module");
  };

  const startTest = (questions, title, moduleId) => {
    const test = buildTest(questions, CONCEPTS, progress, Math.min(20, questions.length));
    setTestQuestions(test);
    setTestTitle(title);
    setScreen("test");
  };

  const startModuleTest = () => {
    if (!activeModule) return;
    const questions = getQuestionsForGroup(activeModule);
    startTest(questions, activeModule.name, activeModule.id);
  };

  const startMarathon = () => {
    const test = shuffle([...QUESTIONS]).map(shuffleOptions);
    setTestQuestions(test);
    setTestTitle("Marathon");
    setScreen("test");
  };

  const startMissed = () => {
    const missedQuestions = QUESTIONS.filter((q) => flagged.has(q.id));
    if (missedQuestions.length === 0) return;
    setTestQuestions(shuffle(missedQuestions).map(shuffleOptions));
    setTestTitle("Flagged Questions");
    setScreen("test");
  };

  const finishTest = (result) => {
    setTestResult(result);
    setScreen("results");

    // Update best score for module if applicable
    if (activeModule) {
      setBestScores((prev) => {
        const current = prev[activeModule.id];
        const pct = result.score / result.total;
        if (!current || pct > current.score / current.total) {
          return { ...prev, [activeModule.id]: { score: result.score, total: result.total } };
        }
        return prev;
      });
    }
  };

  const retryMissed = (missedQuestions) => {
    setTestQuestions(shuffle(missedQuestions).map(shuffleOptions));
    setTestResult(null);
    setScreen("test");
  };

  const startFlashcards = () => {
    setScreen("flashcards");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: S.bg,
        color: S.text,
        fontFamily: S.serif,
        padding: "28px 16px env(safe-area-inset-bottom, 0)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 560 }}>
        {screen === "home" && (
          <HomeScreen
            progress={progress}
            bestScores={bestScores}
            flaggedCount={flagged.size}
            onSelectModule={selectModule}
            onStartMarathon={startMarathon}
            onOpenMissed={startMissed}
          />
        )}

        {screen === "module" && activeModule && (
          <ModuleDetail
            group={activeModule}
            progress={progress}
            bestScores={bestScores}
            onBack={goHome}
            onStartTest={startModuleTest}
            onStartFlashcards={startFlashcards}
          />
        )}

        {screen === "test" && (
          <PracticeTest
            questions={testQuestions}
            progress={progress}
            setProgress={setProgress}
            flagged={flagged}
            setFlagged={setFlagged}
            onFinish={finishTest}
            onBack={activeModule ? () => setScreen("module") : goHome}
            title={testTitle}
          />
        )}

        {screen === "results" && testResult && (
          <TestResults
            result={testResult}
            questions={testQuestions}
            onRetryMissed={retryMissed}
            onBack={activeModule ? () => setScreen("module") : goHome}
          />
        )}

        {screen === "flashcards" && activeModule && (
          <FlashcardMode
            progress={progress}
            setProgress={setProgress}
            concepts={getConceptsForGroup(activeModule)}
            onBack={() => setScreen("module")}
            title={activeModule.name + " Flashcards"}
          />
        )}
      </div>
    </div>
  );
}
