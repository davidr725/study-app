import { useState, useCallback, useEffect, useRef } from "react";
import { CONCEPTS, CATEGORIES, CATEGORY_COLORS } from "./data/concepts.js";
import { QUESTIONS } from "./data/questions.js";

const FACES = ["term", "definition", "analogy"];
const FACE_LABELS = { term: "Term", definition: "Definition", analogy: "Analogy" };

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

function getWeightedRandom(concepts, weights) {
  const totalWeight = concepts.reduce((sum, c) => sum + (weights[c.id] || 1), 0);
  let r = Math.random() * totalWeight;
  for (const c of concepts) {
    r -= weights[c.id] || 1;
    if (r <= 0) return c;
  }
  return concepts[concepts.length - 1];
}

function getFiltered(concepts, activeCategories) {
  if (activeCategories.length === 0) return concepts;
  return concepts.filter((c) => activeCategories.includes(c.category));
}

// Get questions from the bank for a given concept, or fall back to auto-generation
function getQuestionForConcept(concept, filtered, weights) {
  // Try to find a question from the bank for this concept
  const bankQuestions = QUESTIONS.filter((q) => q.conceptId === concept.id);

  if (bankQuestions.length > 0) {
    // Pick a random question from the bank for this concept
    const question = bankQuestions[Math.floor(Math.random() * bankQuestions.length)];
    return {
      concept,
      prompt: question.prompt,
      options: question.options.map((text, i) => ({
        id: i === question.correctIndex ? concept.id : `wrong_${i}`,
        text,
        isCorrect: i === question.correctIndex,
      })),
      correctId: concept.id,
      explanation: question.explanation,
      whySection: question.whySection || null,
      type: question.type,
    };
  }

  // Fallback: auto-generate like the original
  const askFace = FACES[Math.floor(Math.random() * 3)];
  const answerFaces = FACES.filter((f) => f !== askFace);
  const answerFace = answerFaces[Math.floor(Math.random() * answerFaces.length)];

  const wrongOptions = pickRandom(
    filtered.filter((c) => c.id !== concept.id),
    3
  ).map((c) => ({ id: c.id, text: c[answerFace], isCorrect: false }));

  const options = shuffle([
    ...wrongOptions,
    { id: concept.id, text: concept[answerFace], isCorrect: true },
  ]);

  return {
    concept,
    prompt: `Given the ${FACE_LABELS[askFace]}: "${concept[askFace]}"`,
    options,
    correctId: concept.id,
    explanation: `${concept.term}: ${concept.definition}`,
    whySection: null,
    type: "auto_generated",
    askFace,
    answerFace,
  };
}

// ─── CATEGORY FILTER ───

function CategoryFilter({ active, setActive }) {
  const toggle = (cat) => {
    if (active.includes(cat)) {
      setActive(active.filter((c) => c !== cat));
    } else {
      setActive([...active, cat]);
    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
      {CATEGORIES.map((cat) => {
        const isActive = active.length === 0 || active.includes(cat);
        const color = CATEGORY_COLORS[cat] || "#888";
        const count = CONCEPTS.filter((c) => c.category === cat).length;
        return (
          <button
            key={cat}
            onClick={() => toggle(cat)}
            style={{
              padding: "5px 12px",
              borderRadius: 6,
              border: `1px solid ${isActive ? color : "rgba(255,255,255,0.08)"}`,
              background: isActive ? `${color}15` : "transparent",
              color: isActive ? color : "#555",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.15s",
              letterSpacing: "0.03em",
              userSelect: "none",
            }}
          >
            {cat}
            <span style={{ opacity: 0.5, marginLeft: 4 }}>{count}</span>
          </button>
        );
      })}
    </div>
  );
}

// ─── PROGRESS BAR ───

function ProgressBar({ weights, filtered }) {
  const mastered = filtered.filter((c) => (weights[c.id] || 1) < 0.6).length;
  const learning = filtered.filter((c) => {
    const w = weights[c.id] || 1;
    return w >= 0.6 && w <= 1.2;
  }).length;
  const struggling = filtered.filter((c) => (weights[c.id] || 1) > 1.2).length;
  const total = filtered.length;

  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", height: 4, borderRadius: 2, overflow: "hidden", background: "rgba(255,255,255,0.04)" }}>
        {mastered > 0 && (
          <div style={{ width: `${(mastered / total) * 100}%`, background: "#27ae60", transition: "width 0.4s" }} />
        )}
        {learning > 0 && (
          <div style={{ width: `${(learning / total) * 100}%`, background: "#f0c674", transition: "width 0.4s" }} />
        )}
        {struggling > 0 && (
          <div style={{ width: `${(struggling / total) * 100}%`, background: "#c0392b", transition: "width 0.4s" }} />
        )}
      </div>
      <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
        {[
          { label: "Mastered", count: mastered, color: "#27ae60" },
          { label: "Learning", count: learning, color: "#f0c674" },
          { label: "Needs work", count: struggling, color: "#c0392b" },
        ].map((s) => (
          <span
            key={s.label}
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: s.color, opacity: s.count > 0 ? 1 : 0.3 }}
          >
            {s.count} {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── FLASHCARD MODE ───

function FlashcardMode({ weights, setWeights, filtered }) {
  const [current, setCurrent] = useState(() => getWeightedRandom(filtered, weights));
  const [faceIndex, setFaceIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [selfScore, setSelfScore] = useState(null);

  useEffect(() => {
    setCurrent(getWeightedRandom(filtered, weights));
    setFaceIndex(0);
  }, [filtered.length]);

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
    setWeights((prev) => {
      const w = { ...prev };
      if (knew) {
        w[current.id] = Math.max(0.3, (w[current.id] || 1) * 0.6);
      } else {
        w[current.id] = Math.min(5, (w[current.id] || 1) * 1.8);
      }
      return w;
    });
    setTimeout(() => {
      setSelfScore(null);
      setFaceIndex(0);
      setFlipping(true);
      setTimeout(() => {
        setCurrent(getWeightedRandom(filtered, weights));
        setFlipping(false);
      }, 250);
    }, 400);
  };

  const face = FACES[faceIndex];
  const content = current[face];
  const catColor = CATEGORY_COLORS[current.category] || "#888";

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, padding: "8px 0" }}>
      <div style={{ display: "flex", gap: 8 }}>
        {FACES.map((f, i) => (
          <span
            key={f}
            style={{
              fontSize: 11,
              fontFamily: "'JetBrains Mono', monospace",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              padding: "4px 10px",
              borderRadius: 4,
              background: i === faceIndex ? "#1a1a2e" : "transparent",
              color: i === faceIndex ? "#e0d6c8" : "#666",
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
          background: "linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)",
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
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 18,
            fontSize: 10,
            fontFamily: "'JetBrains Mono', monospace",
            color: "#5a5a7a",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
          }}
        >
          {FACE_LABELS[face]}
        </div>
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 18,
            fontSize: 9,
            fontFamily: "'JetBrains Mono', monospace",
            color: catColor,
            opacity: 0.6,
            letterSpacing: "0.06em",
          }}
        >
          {current.category}
        </div>
        <p
          style={{
            color: face === "term" ? catColor : "#e0d6c8",
            fontSize: face === "term" ? 24 : 16,
            fontFamily: face === "term" ? "'Space Mono', monospace" : "'IBM Plex Sans', sans-serif",
            fontWeight: face === "term" ? 700 : 400,
            textAlign: "center",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {content}
        </p>
        <div
          style={{
            position: "absolute",
            bottom: 14,
            fontSize: 10,
            color: "#4a4a6a",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          tap to flip → {FACE_LABELS[FACES[(faceIndex + 1) % 3]]}
        </div>
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        <button
          onClick={() => handleScore(false)}
          style={{
            padding: "12px 28px",
            borderRadius: 8,
            border: "2px solid #c0392b",
            background: selfScore === false ? "#c0392b" : "transparent",
            color: selfScore === false ? "#fff" : "#c0392b",
            fontFamily: "'JetBrains Mono', monospace",
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
            border: "2px solid #27ae60",
            background: selfScore === true ? "#27ae60" : "transparent",
            color: selfScore === true ? "#fff" : "#27ae60",
            fontFamily: "'JetBrains Mono', monospace",
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
  );
}

// ─── QUIZ MODE ───

function QuizMode({ weights, setWeights, filtered }) {
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState(null);
  const [streak, setStreak] = useState(0);
  const [total, setTotal] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const generateQuestion = useCallback(() => {
    if (filtered.length < 4) return;
    const concept = getWeightedRandom(filtered, weights);
    const q = getQuestionForConcept(concept, filtered, weights);
    setQuestion(q);
    setSelected(null);
    setShowExplanation(false);
  }, [weights, filtered]);

  useEffect(() => {
    generateQuestion();
  }, [filtered.length]);

  if (!question)
    return (
      <div
        style={{
          color: "#666",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
          padding: 40,
          textAlign: "center",
        }}
      >
        Need at least 4 cards in selected categories for quiz mode.
      </div>
    );

  const handleSelect = (opt) => {
    if (selected !== null) return;
    const optIndex = question.options.indexOf(opt);
    setSelected(optIndex);
    const isCorrect = opt.isCorrect || opt.id === question.correctId;
    setTotal((p) => p + 1);
    if (isCorrect) {
      setCorrect((p) => p + 1);
      setStreak((p) => p + 1);
      // Show brief explanation on correct, then auto-advance
      setShowExplanation(true);
      setTimeout(generateQuestion, 1500);
    } else {
      setStreak(0);
      // Show full explanation on incorrect, wait for user to dismiss
      setShowExplanation(true);
    }
    setWeights((prev) => {
      const w = { ...prev };
      if (isCorrect) {
        w[question.concept.id] = Math.max(0.3, (w[question.concept.id] || 1) * 0.6);
      } else {
        w[question.concept.id] = Math.min(5, (w[question.concept.id] || 1) * 1.8);
      }
      return w;
    });
  };

  const isCorrectAnswer = selected !== null && (question.options[selected]?.isCorrect || question.options[selected]?.id === question.correctId);
  const catColor = CATEGORY_COLORS[question.concept.category] || "#888";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: "8px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#888" }}>
          {correct}/{total} correct
        </span>
        {streak >= 3 && (
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#f0c674" }}>
            {streak} streak
          </span>
        )}
      </div>

      <div
        style={{
          background: "linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)",
          borderRadius: 14,
          padding: "28px 24px",
          boxShadow: "0 6px 24px rgba(0,0,0,0.25)",
          borderTop: `2px solid ${catColor}30`,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <span
            style={{
              fontSize: 10,
              fontFamily: "'JetBrains Mono', monospace",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#5a5a7a",
            }}
          >
            {question.type === "scenario" ? "Scenario" : question.askFace ? `Given the ${FACE_LABELS[question.askFace]}` : "Question"}
          </span>
          <span style={{ fontSize: 9, fontFamily: "'JetBrains Mono', monospace", color: catColor, opacity: 0.6 }}>
            {question.concept.category}
          </span>
        </div>
        <p
          style={{
            color: "#e0d6c8",
            fontSize: question.type === "scenario" ? 14 : 16,
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontWeight: 400,
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {question.prompt}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {question.options.map((opt, i) => {
          const isCorrectOpt = opt.isCorrect || opt.id === question.correctId;
          const isSelected = selected === i;
          let bg = "rgba(26,26,46,0.5)";
          let border = "1px solid rgba(255,255,255,0.06)";
          if (selected !== null) {
            if (isCorrectOpt) {
              bg = "rgba(39,174,96,0.15)";
              border = "1px solid #27ae60";
            } else if (isSelected && !isCorrectOpt) {
              bg = "rgba(192,57,43,0.15)";
              border = "1px solid #c0392b";
            }
          }
          return (
            <div
              key={i}
              onClick={() => handleSelect(opt)}
              style={{
                padding: "14px 18px",
                borderRadius: 10,
                background: bg,
                border,
                cursor: selected !== null ? "default" : "pointer",
                transition: "all 0.2s",
                color: "#d0c8bc",
                fontSize: 14,
                fontFamily: "'IBM Plex Sans', sans-serif",
                lineHeight: 1.5,
                minHeight: 44,
                userSelect: "none",
              }}
            >
              {opt.text}
            </div>
          );
        })}
      </div>

      {/* Explanation card */}
      {showExplanation && selected !== null && (
        <div
          style={{
            background: isCorrectAnswer ? "rgba(39,174,96,0.08)" : "rgba(192,57,43,0.08)",
            border: `1px solid ${isCorrectAnswer ? "rgba(39,174,96,0.3)" : "rgba(192,57,43,0.3)"}`,
            borderRadius: 12,
            padding: "20px 20px",
          }}
        >
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: isCorrectAnswer ? "#27ae60" : "#c0392b", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            {isCorrectAnswer ? "Correct" : "Incorrect"}
          </div>
          <p style={{ color: "#e0d6c8", fontSize: 14, fontFamily: "'IBM Plex Sans', sans-serif", lineHeight: 1.6, margin: 0 }}>
            {question.explanation}
          </p>
          {question.whySection && (
            <p style={{ color: "#a0a0b0", fontSize: 13, fontFamily: "'IBM Plex Sans', sans-serif", lineHeight: 1.6, margin: "12px 0 0 0", fontStyle: "italic" }}>
              {question.whySection}
            </p>
          )}
          {!isCorrectAnswer && (
            <button
              onClick={generateQuestion}
              style={{
                marginTop: 16,
                padding: "10px 24px",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(26,26,46,0.6)",
                color: "#e0d6c8",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                minHeight: 44,
                userSelect: "none",
              }}
            >
              Got it — next question
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// ─── MATCH MODE ───

function MatchMode({ weights, setWeights, filtered }) {
  const [round, setRound] = useState(null);
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matched, setMatched] = useState({});
  const [wrong, setWrong] = useState(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startRound = useCallback(() => {
    if (filtered.length < 4) return;
    const count = Math.min(isMobile ? 4 : 5, filtered.length);
    const subset = pickRandom(filtered, count);
    const leftFace = FACES[Math.floor(Math.random() * 3)];
    const rightFaces = FACES.filter((f) => f !== leftFace);
    const rightFace = rightFaces[Math.floor(Math.random() * rightFaces.length)];

    setRound({
      items: subset,
      leftFace,
      rightFace,
      leftOrder: shuffle(subset),
      rightOrder: shuffle(subset),
    });
    setSelectedLeft(null);
    setMatched({});
    setWrong(null);
  }, [filtered, isMobile]);

  useEffect(() => {
    startRound();
  }, [filtered.length]);

  if (!round)
    return (
      <div
        style={{
          color: "#666",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
          padding: 40,
          textAlign: "center",
        }}
      >
        Need at least 4 cards in selected categories for match mode.
      </div>
    );

  const handleLeftClick = (id) => {
    if (matched[id]) return;
    setSelectedLeft(id);
    setWrong(null);
  };

  const handleRightClick = (id) => {
    if (!selectedLeft || matched[selectedLeft]) return;
    if (id === selectedLeft) {
      const newMatched = { ...matched, [id]: true };
      setMatched(newMatched);
      setSelectedLeft(null);
      setScore((p) => ({ correct: p.correct + 1, total: p.total + 1 }));
      setWeights((prev) => {
        const w = { ...prev };
        w[id] = Math.max(0.3, (w[id] || 1) * 0.6);
        return w;
      });
      if (Object.keys(newMatched).length === round.items.length) {
        setTimeout(startRound, 800);
      }
    } else {
      setWrong({ left: selectedLeft, right: id });
      setScore((p) => ({ ...p, total: p.total + 1 }));
      setWeights((prev) => {
        const w = { ...prev };
        w[selectedLeft] = Math.min(5, (w[selectedLeft] || 1) * 1.8);
        return w;
      });
      setTimeout(() => {
        setWrong(null);
        setSelectedLeft(null);
      }, 600);
    }
  };

  const renderItem = (item, face, side) => {
    const isMatched = matched[item.id];
    const isSelected = side === "left" && selectedLeft === item.id;
    const isWrong = side === "left" ? wrong?.left === item.id : wrong?.right === item.id;
    const catColor = CATEGORY_COLORS[item.category] || "#888";
    let bg = "rgba(26,26,46,0.6)";
    let border = "1px solid rgba(255,255,255,0.06)";
    if (isMatched) {
      bg = "rgba(39,174,96,0.12)";
      border = "1px solid rgba(39,174,96,0.3)";
    } else if (isWrong) {
      bg = "rgba(192,57,43,0.15)";
      border = "1px solid #c0392b";
    } else if (isSelected) {
      bg = "rgba(240,198,116,0.1)";
      border = "1px solid #f0c674";
    }
    return (
      <div
        key={`${side}_${item.id}`}
        onClick={() => (side === "left" ? handleLeftClick(item.id) : handleRightClick(item.id))}
        style={{
          padding: "10px 12px",
          borderRadius: 8,
          background: bg,
          border,
          cursor: isMatched || (side === "right" && !selectedLeft) ? "default" : "pointer",
          opacity: isMatched ? 0.4 : 1,
          transition: "all 0.2s",
          color: face === "term" ? catColor : "#d0c8bc",
          fontSize: face === "term" ? 13 : 11,
          fontFamily: face === "term" ? "'Space Mono', monospace" : "'IBM Plex Sans', sans-serif",
          fontWeight: face === "term" ? 600 : 400,
          lineHeight: 1.4,
          minHeight: 44,
          display: "flex",
          alignItems: "center",
          userSelect: "none",
        }}
      >
        {item[face]}
      </div>
    );
  };

  // On mobile, show stacked layout with clear labels
  if (isMobile) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "8px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#888" }}>
            {score.correct}/{score.total} matched
          </span>
        </div>

        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#5a5a7a", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Select a {FACE_LABELS[round.leftFace]}:
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {round.leftOrder.map((item) => renderItem(item, round.leftFace, "left"))}
        </div>

        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#5a5a7a", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Match to {FACE_LABELS[round.rightFace]}:
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {round.rightOrder.map((item) => renderItem(item, round.rightFace, "right"))}
        </div>
      </div>
    );
  }

  // Desktop: side-by-side columns
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "8px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#888" }}>
          {score.correct}/{score.total} matched
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            color: "#5a5a7a",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          {FACE_LABELS[round.leftFace]} → {FACE_LABELS[round.rightFace]}
        </span>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          {round.leftOrder.map((item) => renderItem(item, round.leftFace, "left"))}
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          {round.rightOrder.map((item) => renderItem(item, round.rightFace, "right"))}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN APP ───

export default function App() {
  const [mode, setMode] = useState("flashcard");
  const [activeCategories, setActiveCategories] = useState([]);

  // localStorage persistence for weights
  const [weights, setWeights] = useState(() => {
    try {
      const saved = localStorage.getItem("study-weights");
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure all concepts have a weight (handles newly added concepts)
        const w = { ...parsed };
        CONCEPTS.forEach((c) => {
          if (!(c.id in w)) w[c.id] = 1;
        });
        return w;
      }
    } catch {
      // Corrupted data, start fresh
    }
    const w = {};
    CONCEPTS.forEach((c) => (w[c.id] = 1));
    return w;
  });

  // Persist weights to localStorage on change
  useEffect(() => {
    localStorage.setItem("study-weights", JSON.stringify(weights));
  }, [weights]);

  const filtered = getFiltered(CONCEPTS, activeCategories);

  const modes = [
    { key: "flashcard", label: "Flashcards" },
    { key: "quiz", label: "Quiz" },
    { key: "match", label: "Match" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d0d1a",
        color: "#e0d6c8",
        fontFamily: "'IBM Plex Sans', sans-serif",
        padding: "28px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 560 }}>
        <h1
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 20,
            fontWeight: 700,
            color: "#f0c674",
            margin: "0 0 4px 0",
            letterSpacing: "-0.02em",
          }}
        >
          Web Concepts
        </h1>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            color: "#5a5a7a",
            margin: "0 0 20px 0",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          {CONCEPTS.length} concepts · {CATEGORIES.length} categories · Spaced Repetition
        </p>

        <CategoryFilter active={activeCategories} setActive={setActiveCategories} />
        <ProgressBar weights={weights} filtered={filtered} />

        <div
          style={{
            display: "flex",
            gap: 0,
            background: "rgba(26,26,46,0.5)",
            borderRadius: 10,
            padding: 3,
            marginBottom: 20,
          }}
        >
          {modes.map((m) => (
            <button
              key={m.key}
              onClick={() => setMode(m.key)}
              style={{
                flex: 1,
                padding: "10px 0",
                border: "none",
                borderRadius: 8,
                background: mode === m.key ? "#1a1a2e" : "transparent",
                color: mode === m.key ? "#f0c674" : "#666",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                fontWeight: mode === m.key ? 700 : 400,
                cursor: "pointer",
                transition: "all 0.2s",
                boxShadow: mode === m.key ? "0 2px 8px rgba(0,0,0,0.3)" : "none",
                minHeight: 44,
                userSelect: "none",
              }}
            >
              {m.label}
            </button>
          ))}
        </div>

        {mode === "flashcard" && <FlashcardMode weights={weights} setWeights={setWeights} filtered={filtered} />}
        {mode === "quiz" && <QuizMode weights={weights} setWeights={setWeights} filtered={filtered} />}
        {mode === "match" && <MatchMode weights={weights} setWeights={setWeights} filtered={filtered} />}
      </div>
    </div>
  );
}
