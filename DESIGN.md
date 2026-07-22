---
version: alpha
name: Asana
description: "A warm, human productivity canvas where Asana Coral (#F06A6A) anchors a friendly palette and the brand's three-dot motif signals clarity of focus. Soft off-white surfaces, rounded forms, and calm color-coded sections make heavy task work feel approachable and unhurried rather than corporate."

colors:
  primary: "#F06A6A"
  on-primary: "#FFFFFF"
  primary-hover: "#E5544F"
  primary-soft: "#FCE8E6"
  ink: "#1E1F21"
  ink-muted: "#6D6E6F"
  ink-subtle: "#9CA1A8"
  canvas: "#FAF9F8"
  surface-1: "#FFFFFF"
  surface-2: "#F6F5F3"
  surface-3: "#EDECE9"
  border: "#E4E4E4"
  border-strong: "#C7C5C2"
  accent-green: "#62D26F"
  accent-blue: "#4573D2"
  accent-purple: "#9D7AD9"
  accent-yellow: "#F1BD6C"
  success: "#37A66B"
  warning: "#F1BD6C"
  error: "#E8384F"

typography:
  display:
    fontFamily: "TWK Lausanne, Inter, -apple-system, Helvetica Neue, sans-serif"
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.02em
  heading:
    fontFamily: "TWK Lausanne, Inter, -apple-system, Helvetica Neue, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.01em
  body:
    fontFamily: "TWK Lausanne, Inter, -apple-system, Helvetica Neue, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  mono:
    fontFamily: "SF Mono, Menlo, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em

spacing:
  base: 4px
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64]

radius:
  sm: 4px
  md: 8px
  lg: 12px
  pill: 9999px

shadows:
  card: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)"
  elevated: "0 8px 24px rgba(0,0,0,0.12)"
  popover: "0 12px 32px rgba(0,0,0,0.16)"

motion:
  duration-fast: 120ms
  duration-base: 240ms
  easing: cubic-bezier(0.25, 0.1, 0.25, 1)
---

## Rationale

**Warmth as a productivity strategy** — Asana competes in a category full of cold, gridded, corporate task trackers, and it deliberately chose to feel human instead. Asana Coral (#F06A6A) is an unusually warm, almost optimistic red-pink — closer to a sunrise than a stop sign — and it sets the emotional tone for everything. The canvas is a soft, slightly warm off-white (#FAF9F8) rather than clinical pure white. The bet is that work tools are used for hours under pressure, and a calmer, friendlier surface helps people stay in flow rather than feeling nagged by their backlog.

**Coral marks the moment of commitment** — The brand coral is reserved for the highest-intent actions: the primary "Add task" / "Create" button, the active-state highlights, and the celebratory moments. It is not sprinkled across the chrome. Sidebar, headers, and tables stay neutral so that when coral appears, it means "do this" or "this is selected." This restraint is what keeps a screen full of tasks from becoming a wall of competing color.

**The three-dot motif as a signature** — Asana's identity is built on three dots — its logo, its loading animations, and the "celebration" creatures (the flying unicorn, narwhal, and phoenix) that burst across the screen when you complete a task. Dots and circles recur throughout the UI: circular avatars, the round task-completion checkmark, status dots, and color tags. This soft, circular geometry reinforces the friendly, human posture and gives the product a recognizable rhythm distinct from the hard rectangles of enterprise tools.

**Color-coding as structural language** — Because Asana organizes work into projects, sections, tags, and custom fields, a curated set of muted accent hues (green, blue, purple, yellow alongside coral) becomes a functional vocabulary, not decoration. Users assign these colors to projects and statuses, so the palette is intentionally soft and harmonious — many colors must coexist on one board without clashing or screaming. The system favors desaturated, pastel-leaning accents precisely so dozens of them can share a screen calmly.

## 1. Visual Theme & Atmosphere
Asana feels warm, soft, and unhurried. The off-white canvas (#FAF9F8) carries a faint warmth that pure white lacks, and content sits on clean white cards with gentle rounded corners and the lightest of shadows. There are very few hard lines; structure comes from spacing and subtle surface shifts rather than heavy borders, so a dense project board still reads as calm.

The atmosphere is friendly and quietly playful. Circular avatars, round completion checks, and color-coded dots give the interface a soft visual rhythm, and the occasional celebration creature flying across the screen on task completion is a deliberate moment of delight — a reminder that finishing work should feel good. Coral threads through as the warm heartbeat of the brand without ever dominating the workspace.

## 2. Color System
**Neutral surfaces**:
- Canvas: #FAF9F8 — warm off-white page background
- Surface 1: #FFFFFF — cards, task rows, panels
- Surface 2: #F6F5F3 — hovered rows, inset fills
- Surface 3: #EDECE9 — pressed states, grouping bands
- Border: #E4E4E4 — light dividers
- Border strong: #C7C5C2 — input outlines, stronger separation

**The brand accent**:
- Coral: #F06A6A — primary action, active selection, brand moments
- Hover: #E5544F / Soft: #FCE8E6 — pressed coral and tint backgrounds

**Color-coding accents** (projects, tags, statuses):
- Green #62D26F, Blue #4573D2, Purple #9D7AD9, Yellow #F1BD6C — user-assignable, intentionally muted to coexist

**Text**:
- Primary ink: #1E1F21 — near-black task and heading text
- Muted: #6D6E6F — metadata, due dates, secondary labels
- Subtle: #9CA1A8 — placeholders, disabled, hint text

**Semantic**:
- Success: #37A66B — on-track status, completion
- Warning: #F1BD6C — at-risk status
- Error: #E8384F — overdue, validation, destructive

Coral is held back from the chrome on purpose; its scarcity is what lets it mean "act" or "selected" at a glance across a busy board.

## 3. Typography
Asana's product type is a clean, warm geometric-humanist sans (TWK Lausanne in the modern brand system, with Inter and system sans as faithful fallbacks). It favors generous x-height and open counters so 14px task text stays comfortable through long lists, and it pairs friendly letterforms with tight tracking at display sizes for a confident, approachable headline voice.

At display scale (empty-state heroes, onboarding): 40px weight 600 with tight −0.02em tracking. Headings (project titles, section headers): 20px weight 600. Body and task names run at 14px weight 400 — the dominant size across boards and lists. Metadata and timestamps drop to 12–13px in muted ink.

Weight, not color, carries most hierarchy: 600 for titles, 500 for emphasized inline labels, 400 for body. Monospace appears only in code snippets and integration tokens.

## 4. Components & Patterns
**Task row**:
- Circular completion checkbox at left (fills green-checked on complete)
- Task name, assignee avatar, due date pill, project/tag color dots
- Click opens the task detail pane; hover reveals quick actions

**Task detail pane**:
- Right-side slide-in panel with title, assignee, due date, description
- Subtasks, comments thread, attachments, and custom fields
- "Mark complete" button flips to a green completed state

**Project board (Kanban)**:
- Horizontal columns of sections, each holding draggable task cards
- Cards show avatar, due date, and color tags; drag to reorder/move
- Add-task affordance pinned at the bottom of each column

**Sidebar navigation**:
- Neutral left rail: Home, My Tasks, Inbox, Portfolios, project list
- Each project shows a small color dot; active item gets a subtle fill
- Collapsible favorites and team sections

**Coral primary button**:
- Solid #F06A6A fill, white label, pill or 8px radius, 32–36px tall
- The single highest-intent action per surface (Create, Add task)

**Avatar & assignee**:
- Circular avatar with colored initials fallback
- Stacked avatar groups for multi-collaborator tasks

**Color tag / status pill**:
- Rounded pill in a muted accent hue with a label
- Used for custom-field values, priorities, and statuses

**Celebration creature**:
- On task completion a unicorn / narwhal / phoenix flies across screen
- Optional, delightful reward moment tied to the three-dot brand

**Inbox notification list**:
- Activity stream grouped by task with avatars and action verbs
- Read/unread shown with a coral unread dot

**Date & timeline view**:
- Gantt-style timeline with rounded task bars in project colors
- Dependencies drawn as thin connecting lines

## 5. Spacing & Layout
Asana uses a 4px base grid with comfortable, airy spacing — productivity tools become exhausting when cramped, so row heights (~40px) and padding (16px) lean generous. Cards round at 8–12px and stack with 12px gaps.

The canonical layout is a neutral left sidebar (~240–280px), a top bar with the view switcher (List / Board / Timeline / Calendar), and a main content region on the warm canvas. The right-side task detail pane slides over content rather than navigating away, keeping the user oriented in their list. Layouts reflow to a single column with a bottom tab bar on mobile.

## 6. Motion & Interaction
**Soft, easeful transitions**: motion uses a gentle ease (`cubic-bezier(0.25, 0.1, 0.25, 1)`) at 120–240ms — nothing snaps, everything settles. The friendly tone extends into how panels slide and checkboxes fill.

**Completion delight**: checking a task animates the circular checkbox filling green, and milestone completions can trigger a celebration creature flying across the viewport — Asana's signature reward moment.

**Detail pane slide**: the task pane eases in from the right; the list behind it dims slightly but stays visible, preserving spatial context.

**Drag and drop**: board and list reordering uses a lifted card with a soft elevated shadow and a smooth placeholder gap that animates open and closed.

## Accessibility

### Contrast Ratios
- **#1E1F21 ink on #FAF9F8 canvas**: 15.6:1 — passes AAA
- **#1E1F21 ink on #FFFFFF surface-1**: 16.5:1 — passes AAA
- **#6D6E6F muted on #FAF9F8**: 4.9:1 — passes AA
- **#9CA1A8 subtle on #FFFFFF**: 2.6:1 — fails AA; use only for placeholder/disabled text
- **#FFFFFF on #F06A6A coral**: 3.0:1 — fails AA for small text; use white labels at 14px+ bold or pair with the darker hover coral
- **#FFFFFF on #E5544F coral-hover**: 3.6:1 — fails AA for small text; large/bold only
- **#37A66B success on #FFFFFF**: 3.2:1 — fails AA for small text; use as an icon/fill or with a text label
- **#E8384F error on #FFFFFF**: 4.0:1 — borderline; prefer larger/bold or pair with an icon

### Minimum Requirements
- **Touch targets**: 40×40px minimum for task checkboxes and row actions
- **Focus indicator**: 2px coral focus ring with offset on interactive elements, visible against the warm canvas
- **Status is never color-only**: project/tag color dots always pair with a text label, and completion shows a checkmark, not just a color change
- **Coral button text**: white labels on coral must be 14px+ and semibold to compensate for the soft 3.0:1 contrast, or use the darker coral for small text

### Motion
- Respects `prefers-reduced-motion`: yes — the celebration creatures, pane slide, and drag animations are suppressed; completion becomes an instant state change
- The celebration animation is opt-out by design and never blocks task completion

### Notes
- White-on-coral is only 3.0:1 — Asana Coral must carry white text only at large/bold sizes or as a fill behind an icon; for small coral text on white, darken toward #E5544F or below
- The muted accent palette is tuned so many colors coexist on one board; do not introduce fully-saturated hues that would break the calm harmony
- Color-coded fields, tags, and statuses must always carry a text label for colorblind users — color alone never encodes meaning
- The warm off-white canvas (#FAF9F8) is intentional; switching to pure white removes the brand's signature warmth and should be avoided
