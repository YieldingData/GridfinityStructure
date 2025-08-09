import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Cube() {
  return (
    <mesh rotation={[0.4, 0.4, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  )
}

export default function App() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '1rem', background: '#222', color: 'white' }}>
        <h1>GridfinityStructures</h1>
        <p>Design columns, beams, decks, and bracing.</p>
      </header>

      <main style={{ flex: 1 }}>
        <Canvas camera={{ position: [3, 3, 3] }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} />
          <Cube />
          <OrbitControls />
        </Canvas>
      </main>
    </div>
  )
}
