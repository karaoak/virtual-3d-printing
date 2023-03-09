import { useGLTF } from '@react-three/drei';
import { applyProps, useFrame } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import { Mesh } from 'three';

import { GLTFResult, MeshModel } from '../model';

import model from './benchy.glb';

export const Model: React.FC<MeshModel> = ({ rotate = true, color, ...props }) => {
	const { scene, materials } = useGLTF(model) as unknown as GLTFResult;
	useMemo(() => {
		applyProps(materials.compound, {
			color,
		});
	}, [materials]);
	const ref = useRef<Mesh>(null!);

	useFrame(() => {
		if (rotate) {
			ref.current.rotation.y += 0.01;
		}
	});

	return <primitive ref={ref} {...props} object={scene} />;
};
