import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Text } from '@react-three/drei';
import * as THREE from 'three';

interface ProductMeshProps {
  hovered: boolean;
  clicked: boolean;
}

function ProductMesh({ hovered, clicked }: ProductMeshProps) {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.5;
      mesh.current.scale.x = mesh.current.scale.y = mesh.current.scale.z = 
        hovered ? 1.1 : clicked ? 0.9 : 1;
    }
  });

  return (
    <Box ref={mesh} args={[1, 1, 1]}>
      <meshStandardMaterial 
        color={hovered ? "#333333" : "#000000"} 
        wireframe 
        transparent 
        opacity={0.7}
      />
    </Box>
  );
}

interface ThreeProductCardProps {
  className?: string;
}

const ThreeProductCard = ({ className = "" }: ThreeProductCardProps) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <div 
      className={`w-full h-48 ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
    >
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ProductMesh hovered={hovered} clicked={clicked} />
      </Canvas>
    </div>
  );
};

export default ThreeProductCard;