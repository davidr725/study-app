// ─── QUESTION BANK ───
// Organized by category for easy maintenance.
// Each question has: id, conceptId, module, type, prompt, options, correctIndex, explanation, whySection?
// Types: "term_to_def", "def_to_term", "analogy_to_term", "term_to_analogy",
//        "scenario", "fill_in_blank", "true_false", "which_is_not"
//
// To add questions: edit the relevant category file.
// No app code changes needed.

import { QUESTIONS_API_BASICS } from "./questions-api-basics.js";
import { QUESTIONS_DAILY_ENGINEERING } from "./questions-daily-engineering.js";
import { QUESTIONS_ARCHITECTURE } from "./questions-architecture.js";
import { QUESTIONS_WEB_FUNDAMENTALS } from "./questions-web-fundamentals.js";

export const QUESTIONS = [
  ...QUESTIONS_API_BASICS,
  ...QUESTIONS_DAILY_ENGINEERING,
  ...QUESTIONS_ARCHITECTURE,
  ...QUESTIONS_WEB_FUNDAMENTALS,
];
