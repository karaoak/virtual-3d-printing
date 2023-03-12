import { PauseRounded, PlayArrowRounded } from '@mui/icons-material';
import { Fab } from '@mui/material';
import React from 'react';

import { useWrapper } from './WrapperContext';

export const Controls: React.FC = () => {
	const { rotate, toggleRotate } = useWrapper();
	return (
		<Fab
			color="default"
			size="small"
			aria-label="toggle-rotate"
			sx={{ position: 'absolute', bottom: 22, left: 22, opacity: 0.3 }}
			onClick={toggleRotate}
		>
			{rotate ? <PauseRounded /> : <PlayArrowRounded />}
		</Fab>
	);
};
