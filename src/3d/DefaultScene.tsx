import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';

import { Loader } from './Loader';
import { SceneProps } from './model';

interface DefaultSceneProps extends SceneProps, React.PropsWithChildren {}

export const DefaultScene: React.FC<DefaultSceneProps> = ({ children }) => (
	<Canvas resize={{ offsetSize: true }} camera={{ position: [0, 0, 20], fov: 30 }}>
		<Suspense fallback={<Loader />}>
			<ambientLight intensity={0.5} />
			<directionalLight color="white" position={[0, 0, 5]} intensity={0.5} />
			<directionalLight color="white" position={[0, 0, -5]} intensity={0.5} />
			{children}
			<OrbitControls />
		</Suspense>
	</Canvas>
);
