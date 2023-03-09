import { Html, useProgress } from '@react-three/drei';
import React from 'react';

export const Loader: React.FC = () => {
	const { progress } = useProgress();
	return (
		<Html center>
			<div style={{ whiteSpace: 'nowrap' }}>{progress.toFixed()} %</div>
		</Html>
	);
};
