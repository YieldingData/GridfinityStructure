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
      <header className="header">
        <div className="container" style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div className="brand">GridfinityStructure</div>
          <nav className="nav">
            <a href="https://github.com/YieldingData/GridfinityStructure" target="_blank" rel="noreferrer">GitHub</a>
            <Link to="/create">Start Creating</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container">
          <h1>Design grid-based structures in your browser</h1>
          <p>Columns, beams, braces and floors with Gridfinity snapping. Export to STL or STEP when you are ready.</p>
          <div className="buttons">
            <Link to="/create" className="btn primary">Start Creating</Link>
            <a className="btn" href="https://github.com/YieldingData/GridfinityStructure" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>
        <section className="container" style={{ paddingTop:24, paddingBottom:40 }}>
          <img
            src="https://placehold.co/800x400/png"
            alt="Interface preview"
            style={{ width:'100%', borderRadius:14 }}
          />
        </section>
      </main>
    </>
  )
}

function Create() {
  // Layout: left sidebar + main viewport
  return (
    <div style={{ height: '100vh', display: 'grid', gridTemplateColumns: '260px 1fr', gridTemplateRows: 'auto 1fr' }}>
      {/* Top bar */}
      <header style={{ gridColumn: '1 / -1', padding: '10px 16px', background:'#11161d', color:'#e8f0f8', borderBottom:'1px solid #1f2a36' }}>
        <div style={{ display:'flex', gap:8 }}>
          <button className="btn">Columns</button>
          <button className="btn">Beams</button>
          <button className="btn">Braces</button>
          <button className="btn">Floors</button>
          <Link to="/export"><button className="btn">Export</button></Link>
        </div>
      </header>

      {/* Sidebar */}
      <aside style={{ borderRight:'1px solid #1f2a36', background:'#0b0f14', color:'#9fb0c3', padding:12, overflowY:'auto' }}>
        <h3 style={{ color:'#e8f0f8', marginTop: 8 }}>Tools</h3>
        <label style={{ display:'block', marginBottom:8 }}>Grid unit size:
          <input type="number" style={{ width:'100%', marginTop:4 }} />
        </label>
        <label style={{ display:'block', marginBottom:8 }}>Location x:
          <input type="number" style={{ width:'100%', marginTop:4 }} />
        </label>
        <label style={{ display:'block', marginBottom:8 }}>Location y:
          <input type="number" style={{ width:'100%', marginTop:4 }} />
        </label>
        <label style={{ display:'block', marginBottom:8 }}>Build plate size:
          <input type="number" style={{ width:'100%', marginTop:4 }} />
        </label>
        <label style={{ display:'block', marginBottom:8 }}>Custom size:
          <input type="number" style={{ width:'100%', marginTop:4 }} />
        </label>
        <label style={{ display:'block', marginBottom:8 }}>
          <input type="checkbox" /> Base magnets
        </label>
        <label style={{ display:'block', marginBottom:8 }}>
          <input type="checkbox" /> Screw holes
        </label>
        <label style={{ display:'block', marginBottom:8 }}>
          <input type="checkbox" /> Connectable
        </label>
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

function ExportPage() {
  return (
    <div className="container" style={{ paddingTop:40 }}>
      <h1>Export</h1>
      <p>Prepare your structure for printing.</p>
      <button className="btn" style={{ marginBottom:20 }}>Make Flat for Printing</button>
      <div className="buttons" style={{ marginBottom:20 }}>
        <button className="btn">Export 3D STL</button>
        <button className="btn">Export 3D STEP</button>
        <button className="btn">Export Flat STL</button>
        <button className="btn">Export Flat STEP</button>
      </div>
      <Link to="/create">Back to editor</Link>
    </div>
  )
}

// --- App with hash routing (works on GitHub Pages) ---
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/export" element={<ExportPage />} />
      </Routes>
    </HashRouter>
  )
}
