'use client'

import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Environment } from '@react-three/drei'

function AnimatedSphere() {
    const meshRef = useRef()

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
        }
    })

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={1}>
                <MeshDistortMaterial
                    color="#FCE7F3"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.1}
                    transparent
                    opacity={0.85}
                />
            </Sphere>
            {/* Inner glowing core */}
            <Sphere args={[0.8, 32, 32]}>
                <meshBasicMaterial color="#F9A8D4" transparent opacity={0.6} />
            </Sphere>
        </Float>
    )
}

function FloatingParticles() {
    const particles = useRef()

    useFrame((state) => {
        if (particles.current) {
            particles.current.rotation.y = state.clock.elapsedTime * 0.05
        }
    })

    return (
        <group ref={particles}>
            {[...Array(20)].map((_, i) => {
                const theta = (i / 20) * Math.PI * 2
                const radius = 2.5 + Math.random() * 0.5
                return (
                    <Float key={i} speed={1 + Math.random()} floatIntensity={0.5}>
                        <mesh
                            position={[
                                Math.cos(theta) * radius,
                                (Math.random() - 0.5) * 2,
                                Math.sin(theta) * radius,
                            ]}
                        >
                            <sphereGeometry args={[0.05 + Math.random() * 0.05, 16, 16]} />
                            <meshBasicMaterial color="#E11D48" transparent opacity={0.6} />
                        </mesh>
                    </Float>
                )
            })}
        </group>
    )
}

export default function FloatingOrb({ className = '' }) {
    return (
        <div className={`${className} pointer-events-none`}>
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                style={{ background: 'transparent' }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#E11D48" />

                <Suspense fallback={null}>
                    <AnimatedSphere />
                    <FloatingParticles />
                    <Environment preset="sunset" />
                </Suspense>
            </Canvas>
        </div>
    )
}
