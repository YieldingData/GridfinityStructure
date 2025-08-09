🏗️ GridfinityStructures

**Parametric 3D generator for structural Gridfinity parts** — columns, beams, floor decks, and bracing — designed for engineering-style layouts with the flexibility and modularity of the Gridfinity ecosystem.

![GridfinityStructures Preview](docs/images/preview.png)

---

## 📖 Overview

GridfinityStructures lets you **design structural assemblies directly in your browser** using a grid-snapped 3D editor.  
Export your parts as **STL** for 3D printing or **STEP** for CAD workflows.

Inspired by [gridfinitygenerator.com](https://gridfinitygenerator.com/en), this project adapts the concept for **structural design** instead of storage bins.

---

## ✨ Features

- **Interactive 3D editor**
  - Orbit, pan, and zoom
  - Snap to Gridfinity unit spacing (default: 42×42×7 mm)
  - Transform handles for moving, rotating, and scaling

- **Parametric components**
  - **Columns** — rectangular, round, or I-section
  - **Beams** — I-beam, box, angle profiles
  - **Floor decks** — ribbed plate parameters
  - **Bracing** — X, K, or V configurations with adjustable angles

- **Engineering-specific options**
  - Section dimensions (bf, tf, tw, d)
  - Coping, notches, web holes
  - Gusset plate placeholders
  - Bracing pitch and deck spans

- **Export**
  - **STL** for 3D printing
  - **STEP** for CAD integration

- **Model persistence**
  - Save/load assemblies with part parameters
  - (Optional) User accounts for managing saved designs

---

## 📐 Units & Snapping

- **Default Gridfinity units:** `42 mm (X/Y)` and `7 mm (Z)`
- Snap increments: ¼ unit
- All components align to a visual grid

---

## 🛠 Tech Stack

- **Frontend:** React + TypeScript
- **3D Engine:** Three.js / React Three Fiber
- **Geometry Kernel:** OpenCascade.js (STEP) or OpenSCAD-WASM (STL)
- **State Management:** Zustand
- **Auth & Database:** Supabase (optional)

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm or yarn

### Install
```bash
git clone https://github.com/YOUR_USERNAME/GridfinityStructures.git
cd GridfinityStructures
npm install
