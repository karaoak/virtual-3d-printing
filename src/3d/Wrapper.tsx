import { Box, BoxProps } from '@mui/material';
import React from 'react';

import { Controls } from './Controls';
import { SceneProps } from './model';
import { WrapperProvider } from './WrapperContext';

export type WrapperProps = Omit<BoxProps, 'children' | 'color'> & SceneProps;

export const Wrapper: React.FC<BoxProps> = ({ sx, children, ...props }) => (
  <WrapperProvider>
    {/* @ts-ignore https://github.com/pmndrs/drei/issues/823 */}
    <Box component="div" sx={{ overflow: 'hidden', height: '100vh', ...sx }} {...props}>
      {children}
      <Controls />
    </Box>
  </WrapperProvider>
);
