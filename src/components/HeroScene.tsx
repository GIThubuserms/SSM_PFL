import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, geometry, color }: { position: [number, number, number]; geometry: THREE.BufferGeometry; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} geometry={geometry}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  );
}

function Scene() {
  const diamondGeometry = new THREE.OctahedronGeometry(0.3);
  const starGeometry = new THREE.SphereGeometry(0.15, 8, 8);
  const triangleGeometry = new THREE.ConeGeometry(0.2, 0.4, 3);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4f46e5" />

      <FloatingShape position={[-3, 2, 0]} geometry={diamondGeometry} color="#fbbf24" />
      <FloatingShape position={[3.5, 2.5, 0]} geometry={starGeometry} color="#ffffff" />
      <FloatingShape position={[-2.5, -1.5, 0]} geometry={triangleGeometry} color="#3b82f6" />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}
