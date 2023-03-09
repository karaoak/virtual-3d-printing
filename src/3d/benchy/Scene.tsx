import React from 'react';

import { DefaultScene } from '../DefaultScene';
import { SceneProps } from '../model';

import { Model } from './Model';

export const Scene: React.FC<SceneProps> = ({ color, scale = 1.4 }) => (
	<DefaultScene>
		<Model color={color} scale={scale} />
	</DefaultScene>
);

// eslint-disable-next-line import/no-default-export
export default Scene;
