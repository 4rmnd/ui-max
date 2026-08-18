# Design Reference Sites Inspection Guide

Guide for inspecting and extracting inspiration from curated design showcase websites:

---

## 1. Inspora (`inspora.design`) & Posts (`posts.design`)
- **Focus**: Curated typography, editorial layouts, minimal hero sections.
- **Inspection Step**:
  1. `navigate_page`: `https://inspora.design`
  2. Run `evaluate_script` to list featured articles/projects and their thumbnail URLs.
  3. `take_screenshot` to capture full layout composition.

## 2. Dark Design (`dark.design`)
- **Focus**: Dark mode color palettes, subtle glowing borders, low-contrast hierarchy.
- **Inspection Step**:
  1. `navigate_page`: `https://dark.design`
  2. Extract background HSL/Hex values and border styling via `evaluate_script`.

## 3. SupaHero (`supahero.io`)
- **Focus**: High-converting hero layouts, badge styles, CTA button treatments.
- **Inspection Step**:
  1. `navigate_page`: `https://supahero.io`
  2. Extract hero headlines, subtitle structure, and CTA button classes.

## 4. TweakCN (`tweakcn.com/editor/theme` & `tweakcn.com/community`)
- **Focus**: CSS variables for shadcn/ui themes, HSL colors, radius tokens.
- **Inspection Step**:
  1. `navigate_page`: `https://tweakcn.com/community`
  2. Extract pre-made theme JSON or CSS rules.

## 5. Refero (`refero.design`)
- **Focus**: Real SaaS product UI screens (settings, onboarding, tables).
- **Inspection Step**:
  1. `navigate_page`: `https://refero.design`
  2. Filter by screen type (e.g. Dashboard / Settings) and capture UI patterns.
