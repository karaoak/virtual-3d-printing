import React from 'react';

import { Skeleton } from '../Skeleton';
import { Wrapper, WrapperProps } from '../Wrapper';

const DynamicScene = React.lazy(() => import('./Scene'));

const backgroundColor = '#E1F0F9';

export const Benchy3d: React.FC<WrapperProps> = ({
	color,
	rotate,
	scale,
	sx = { backgroundColor },
	...props
}) => (
	<Wrapper sx={sx} {...props}>
		<React.Suspense fallback={<Skeleton />}>
			<DynamicScene color={color} rotate={rotate} scale={scale} />
		</React.Suspense>
	</Wrapper>
);
