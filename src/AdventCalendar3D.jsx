import React, { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Box, MeshWobbleMaterial, Stars, Float, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

const prizes = [
    { day: 1, icon: '🎁', title: 'Amazon eGift Card', value: '$20' },
    { day: 2, icon: '🎮', title: 'Gaming Wallet', value: '$25' },
    { day: 3, icon: '🍕', title: 'Dominos Voucher', value: '$30' },
    { day: 4, icon: '🍔', title: 'Food Delivery', value: '$35' },
    { day: 5, icon: '🎁', title: 'Amazon eGift Card', value: '$40' },
    { day: 6, icon: '☕', title: 'Coffee Gift Card', value: '$45' },
    { day: 7, icon: '🎮', title: 'Gaming Wallet', value: '$50' },
    { day: 8, icon: '👟', title: 'Nike Gift Card', value: '$55' },
    { day: 9, icon: '🍔', title: 'Food Delivery', value: '$60' },
    { day: 10, icon: '🎯', title: 'GameStop Voucher', value: '$65' },
    { day: 11, icon: '🎮', title: 'Game Pass', value: '$70' },
    { day: 12, icon: '🛍️', title: 'Store Gift Card', value: '$75' },
    { day: 13, icon: '🍕', title: 'Dominos Voucher', value: '$80' },
    { day: 14, icon: '📺', title: 'Streaming Sub', value: '$85' },
    { day: 15, icon: '🎁', title: 'Amazon eGift Card', value: '$90' },
    { day: 16, icon: '🍔', title: 'Food Delivery', value: '$95' },
    { day: 17, icon: '🎮', title: 'Gaming Wallet', value: '$100' },
    { day: 18, icon: '🛍️', title: 'Target Gift Card', value: '$110' },
    { day: 19, icon: '👟', title: 'Nike Gift Card', value: '$120' },
    { day: 20, icon: '🎁', title: 'Amazon eGift Card', value: '$130' },
    { day: 21, icon: '🛍️', title: 'Store Gift Card', value: '$150' },
    { day: 22, icon: '🎁', title: 'Amazon eGift Card', value: '$170' },
    { day: 23, icon: '🎁', title: 'Amazon eGift Card', value: '$200' },
    { day: 24, icon: '🎮', title: 'GAMING CONSOLE!', value: '$550' },
    { day: 25, icon: '💰', title: '4 SOLANA', value: '4 SOL' }
]

function GiftBox({ position, prize, onOpen }) {
    const groupRef = useRef()
    const [hovered, setHovered] = useState(false)
    const [opened, setOpened] = useState(false)

    useFrame((state) => {
        if (groupRef.current && !opened) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
        }
    })

    const handleClick = () => {
        if (!opened) {
            setOpened(true)
            onOpen(prize)
        }
    }

    const boxColor = useMemo(() => {
        if (opened) return '#2E8B57'
        if (prize.day === 24 || prize.day === 25) return '#FFD700'
        return '#C41E3A'
    }, [opened, prize.day])

    return (
        <group ref={groupRef} position={position}>
            <Float speed={1.5} rotationIntensity={0} floatIntensity={0.5}>
                {/* Main Gift Box */}
                <mesh
                    onClick={handleClick}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                    castShadow
                    receiveShadow
                >
                    <boxGeometry args={[1.2, 1.2, 1.2]} />
                    <meshStandardMaterial
                        color={boxColor}
                        metalness={0.3}
                        roughness={0.4}
                        emissive={boxColor}
                        emissiveIntensity={hovered ? 0.3 : 0}
                    />
                </mesh>

                {/* Gold Ribbon - Vertical */}
                <mesh position={[0, 0, 0.61]} castShadow renderOrder={1}>
                    <boxGeometry args={[0.2, 1.2, 0.05]} />
                    <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
                </mesh>

                {/* Gold Ribbon - Horizontal */}
                <mesh position={[0, 0, 0.61]} castShadow renderOrder={1}>
                    <boxGeometry args={[1.2, 0.2, 0.05]} />
                    <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
                </mesh>

                {/* Bow - Center - Much smaller and behind */}
                <mesh position={[0, 0, 0.62]} scale={0.25} castShadow renderOrder={2}>
                    <sphereGeometry args={[0.5, 16, 16]} />
                    <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
                </mesh>

                {/* Day Number - HUGE and IN FRONT */}
                <Text
                    position={[0, 0, 0.75]}
                    fontSize={0.7}
                    color="#FFFFFF"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.08}
                    outlineColor="#000000"
                    fontWeight="bold"
                    renderOrder={999}
                    depthTest={false}
                >
                    {prize.day}
                </Text>

                {/* Sparkles when hovered */}
                {hovered && !opened && (
                    <Sparkles
                        count={50}
                        scale={2}
                        size={4}
                        speed={0.6}
                        opacity={1}
                        color="#FFD700"
                    />
                )}

                {/* Opened state - show prize */}
                {opened && (
                    <Text
                        position={[0, -0.8, 0]}
                        fontSize={0.2}
                        color="#FFD700"
                        anchorX="center"
                        anchorY="middle"
                        outlineWidth={0.02}
                        outlineColor="#000000"
                        fontWeight="bold"
                    >
                        {prize.value}
                    </Text>
                )}
            </Float>
        </group>
    )
}

function Confetti() {
    const count = 100
    const confettiRef = useRef()

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 20
            pos[i * 3 + 1] = Math.random() * 10 + 5
            pos[i * 3 + 2] = (Math.random() - 0.5) * 20
        }
        return pos
    }, [])

    const colors = useMemo(() => {
        const cols = new Float32Array(count * 3)
        const colorPalette = [
            new THREE.Color('#FFD700'),
            new THREE.Color('#E63946'),
            new THREE.Color('#2E8B57'),
            new THREE.Color('#FF6B6B'),
            new THREE.Color('#4ECDC4')
        ]
        for (let i = 0; i < count; i++) {
            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
            cols[i * 3] = color.r
            cols[i * 3 + 1] = color.g
            cols[i * 3 + 2] = color.b
        }
        return cols
    }, [])

    useFrame((state) => {
        if (confettiRef.current) {
            const positions = confettiRef.current.geometry.attributes.position.array
            for (let i = 0; i < count; i++) {
                positions[i * 3 + 1] -= 0.05
                if (positions[i * 3 + 1] < -5) {
                    positions[i * 3 + 1] = 10
                }
            }
            confettiRef.current.geometry.attributes.position.needsUpdate = true
            confettiRef.current.rotation.y += 0.01
        }
    })

    return (
        <points ref={confettiRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.1} vertexColors transparent opacity={0.8} />
        </points>
    )
}

export default function AdventCalendar3D({ onGiftOpen }) {
    const [showConfetti, setShowConfetti] = useState(false)

    const handleGiftOpen = (prize) => {
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 5000)
        if (onGiftOpen) onGiftOpen(prize)
    }

    // Arrange gifts in a nice 3D grid
    const giftPositions = useMemo(() => {
        const positions = []
        const cols = 5
        const rows = 5
        let index = 0

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (index < prizes.length) {
                    positions.push({
                        position: [
                            (col - cols / 2 + 0.5) * 2.2,
                            (rows / 2 - row - 0.5) * 2.2,
                            Math.random() * 0.5 - 0.25
                        ],
                        prize: prizes[index]
                    })
                    index++
                }
            }
        }
        return positions
    }, [])

    return (
        <div style={{ width: '100%', height: '700px', borderRadius: '20px', overflow: 'hidden' }}>
            <Canvas
                shadows
                camera={{ position: [0, 0, 18], fov: 60 }}
                gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
                style={{ background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%)' }}
            >
                {/* Scene background color */}
                <color attach="background" args={['#2a5298']} />

                {/* Enhanced Lighting */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} castShadow shadow-mapSize={[2048, 2048]} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4ECDC4" />
                <pointLight position={[10, -10, -5]} intensity={0.5} color="#FFD700" />
                <spotLight
                    position={[0, 15, 10]}
                    angle={0.6}
                    penumbra={1}
                    intensity={2}
                    castShadow
                    color="#FFD700"
                />

                {/* Beautiful starfield */}
                <Stars radius={150} depth={100} count={8000} factor={6} saturation={0.2} fade speed={1.5} />

                {/* Gift Boxes */}
                {giftPositions.map((item, index) => (
                    <GiftBox
                        key={index}
                        position={item.position}
                        prize={item.prize}
                        onOpen={handleGiftOpen}
                    />
                ))}

                {/* Confetti */}
                {showConfetti && <Confetti />}

                {/* Camera Controls */}
                <OrbitControls
                    enablePan={true}
                    enableZoom={true}
                    enableRotate={true}
                    minDistance={12}
                    maxDistance={30}
                    maxPolarAngle={Math.PI / 1.8}
                    autoRotate={false}
                    autoRotateSpeed={0.5}
                />
            </Canvas>
        </div>
    )
}
