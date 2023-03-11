import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';

import { Model } from './Model';

export const Benchy3d: React.FC = () => (
	<Canvas resize={{ offsetSize: true }} camera={{ position: [0, 0, 20], fov: 30 }}>
		<ambientLight intensity={0.5} />
		<directionalLight color="white" position={[0, 0, 5]} intensity={0.5} />
		<directionalLight color="white" position={[0, 0, -5]} intensity={0.5} />
		<Model />
		<OrbitControls />
	</Canvas>
);
