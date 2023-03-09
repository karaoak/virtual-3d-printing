import { Box, BoxProps } from '@mui/material';
import React from 'react';

import { SceneProps } from './model';

export type WrapperProps = Omit<BoxProps, 'children' | 'color'> & SceneProps;

export const Wrapper: React.FC<BoxProps> = ({ sx, children, ...props }) => (
	/* @ts-ignore */
	<Box component="div" sx={{ overflow: 'hidden', height: ['100vw', '100vh'], ...sx }} {...props}>
		{children}
	</Box>
);
