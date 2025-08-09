import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './styles/global.css'

// --- 3D bits ---
function BuildPlate() {
  // A simple gray plate (200 x 200) lying flat at y=0
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[200, 200, 10, 10]} />
      <meshStandardMaterial metalness={0.1} roughness={0.9} />
    </mesh>
  )
}

function FloatingCube() {
  return (
    <mesh position={[0, 10, 0]} rotation={[0.4, 0.4, 0]} castShadow>
      <boxGeometry args={[10, 10, 10]} />
      <meshStandardMaterial />
    </mesh>
  )
}

// --- Pages ---
function Home() {
  return (
    <>
      <header style={{ padding: '1rem', background: '#222', color: '#fff' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ fontWeight: 700 }}>GridfinityStructure</div>
          <nav style={{ display:'flex', gap:14 }}>
            <a href="https://github.com/YieldingData/GridfinityStructure" target="_blank" rel="noreferrer">GitHub</a>
            <Link to="/get-started">Get started</Link>
          </nav>
        </div>
      </header>

      <main style={{ padding: '2rem', color: '#cdd6e0' }}>
        <h1 style={{ marginTop: 0 }}>Design columns, beams, decks & bracing — in your browser</h1>
        <p>Parametric parts, Gridfinity snapping, and export to STL/STEP. Click “Get started” to see the editor layout.</p>
        <Link to="/get-started" style={{ display:'inline-block', marginTop: 12, padding: '10px 16px', borderRadius: 10, background:'#00a8ff', color:'#001018' }}>
          Get started
        </Link>
      </main>
    </>
  )
}

function GetStarted() {
  // Layout: left sidebar + main viewport
  return (
    <div style={{ height: '100vh', display: 'grid', gridTemplateColumns: '280px 1fr', gridTemplateRows: 'auto 1fr' }}>
      {/* Top bar */}
      <header style={{ gridColumn: '1 / -1', padding: '10px 16px', background:'#11161d', color:'#e8f0f8', borderBottom:'1px solid #1f2a36' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <strong>Editor — Get Started</strong>
          <Link to="/" style={{ color:'#5cc8ff' }}>← Back</Link>
        </div>
      </header>

      {/* Sidebar */}
      <aside style={{ borderRight:'1px solid #1f2a36', background:'#0b0f14', color:'#9fb0c3', padding:12 }}>
        <h3 style={{ color:'#e8f0f8', marginTop: 8 }}>Tools</h3>
        <div style={{ display:'grid', gap:10 }}>
          <button className="btn">Select</button>
          <button className="btn">Move</button>
          <button className="btn">Rotate</button>
          <button className="btn">Scale</button>
        </div>

        <h3 style={{ color:'#e8f0f8', marginTop: 18 }}>Add</h3>
        <div style={{ display:'grid', gap:10 }}>
          <button className="btn">Column</button>
          <button className="btn">Beam</button>
          <button className="btn">Deck</button>
          <button className="btn">Bracing</button>
        </div>

        <h3 style={{ color:'#e8f0f8', marginTop: 18 }}>Gridfinity</h3>
        <div style={{ fontSize: 13 }}>
          <div>Unit: 42 × 42 × 7 mm</div>
          <div>Snap: ¼ unit</div>
        </div>
      </aside>

      {/* Viewport */}
      <section style={{ position:'relative', background:'#0b0f14' }}>
        <Canvas
          shadows
          camera={{ position:[60, 60, 60], fov: 45 }}
          style={{ width:'100%', height:'100%' }}
        >
          {/* Lights */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[40, 60, 30]}
            intensity={0.8}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          {/* Build plate + cube */}
          <BuildPlate />
          <FloatingCube />
          <OrbitControls enablePan enableRotate enableZoom />
        </Canvas>
      </section>
    </div>
  )
}

// --- App with hash routing (works on GitHub Pages) ---
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </HashRouter>
  )
}
