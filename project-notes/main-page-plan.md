# GridfinityStructure Main.tsx Plan

## Goal
Turn `GetStarted.tsx` → `Main.tsx` and make it the interactive editor page (similar to PrusaSlicer). It will be dynamic, modular, and safe to expand without breaking the homepage.

## Planned Layout
- **TopBar** — title, back link.
- **Sidebar** — tools, add parts (Column/Beam/Deck/Bracing), grid settings.
- **Viewport** — 3D build plate, parts, lights, orbit controls.

## State Model (Zustand Store)
### Entities
- **Part:** `id`, `type`, `position`, `rotation`, `size`.
- **Grid:** `unitXY`, `unitZ`, `snap fraction`.
- **UI:** `tool mode`, `selectedId`, `hoveredId`.
- **Scene:** list of parts.

### Actions
- `setTool(tool)`
- `addPart({...})`
- `updatePart(id, patch)`
- `select(id)`
- `remove(id)`
- `clear()`

## Phase 1 Features
1. Add parts from sidebar.
2. Render parts in viewport.
3. Click to select & highlight.
4. Visual grid lines (no snapping yet).
5. Routing:
   - `#/` → `Home.tsx`
   - `#/get-started` → `Main.tsx`

## File Structure
```
src/
  pages/
    Home.tsx
    Main.tsx
  state/
    store.ts
  components/
    editor/
      TopBar.tsx
      Sidebar/
        ToolSection.tsx
        AddSection.tsx
        GridSection.tsx
      Viewport/
        Viewport.tsx
        BuildPlate.tsx
        PartsRenderer.tsx
```

## Implementation Steps
- **Step A** — Create `store.ts` with types & actions (no UI change).
- **Step B** — Wire "Add" buttons to `addPart`.
- **Step C** — Render parts in viewport.
- **Step D** — Selection highlight.
- **Step E** — Grid lines.
- **Step F** — Snap-to-grid for movement.
