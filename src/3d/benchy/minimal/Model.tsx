import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Mesh } from 'three';

import { GLTFResult, MeshModel } from '../../model';
import model from '../benchy.glb';

export const Model: React.FC<MeshModel> = ({ rotate = true, ...props }) => {
	const { scene } = useGLTF(model) as unknown as GLTFResult;
	const ref = useRef<Mesh>(null!);

	useFrame(() => {
		if (rotate) {
			ref.current.rotation.y += 0.01;
		}
	});

	return <primitive ref={ref} {...props} object={scene} />;
};
