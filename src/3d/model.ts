import { Instance } from '@react-three/fiber/dist/declarations/src/core/renderer.d';
import { GLTF } from 'three-stdlib';

export type Color = string;

export interface GLTFResult extends GLTF {
	materials: Record<string, Instance>;
	nodes: Record<string, Instance>;
}

export interface SceneProps {
	color?: Color;
	rotate?: boolean;
	scale?: number;
}

export type MeshModel = Omit<JSX.IntrinsicElements['mesh'], 'color'> & SceneProps;
