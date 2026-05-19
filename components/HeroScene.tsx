'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

const PRIMARY = '#185319'
const PRIMARY_LIGHT = '#2a7a32'
const PRIMARY_SOFT = '#4a9f55'

function Particles({ count = 1400 }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 10
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [count])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.03
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.06
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={PRIMARY}
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  )
}

function WireframeCore() {
  const ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.x = t * 0.18
    ref.current.rotation.y = t * 0.28
    ref.current.position.y = Math.sin(t * 0.5) * 0.15
  })

  return (
    <group ref={ref}>
      <mesh>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshBasicMaterial
          color={PRIMARY}
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>
      <mesh scale={1.4}>
        <torusGeometry args={[2, 0.018, 12, 80]} />
        <meshBasicMaterial
          color={PRIMARY_LIGHT}
          transparent
          opacity={0.35}
        />
      </mesh>
      <mesh scale={1.85} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.6, 0.012, 8, 64]} />
        <meshBasicMaterial
          color={PRIMARY_SOFT}
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  )
}

function Scene() {
  return (
    <>
      <color attach="background" args={['#f6faf7']} />
      <fog attach="fog" args={['#f6faf7', 8, 22]} />
      <ambientLight intensity={0.85} color="#ffffff" />
      <pointLight position={[6, 6, 6]} intensity={0.9} color="#ffffff" />
      <pointLight position={[-5, 3, 4]} intensity={0.5} color={PRIMARY_LIGHT} />
      <pointLight position={[0, -4, 2]} intensity={0.3} color={PRIMARY_SOFT} />
      <Particles />
      <WireframeCore />
    </>
  )
}

export default function HeroScene() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  if (reducedMotion) {
    return (
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#f6faf7] via-[#e8f3ea] to-[#eef5f0]"
        aria-hidden
      />
    )
  }

  return (
    <Canvas
      className="absolute inset-0"
      camera={{ position: [0, 0.2, 7], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
    >
      <Scene />
    </Canvas>
  )
}