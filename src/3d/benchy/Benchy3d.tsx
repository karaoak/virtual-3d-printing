import React from 'react';

import { backgroundColor } from '../../theme/colors';
import { Skeleton } from '../Skeleton';
import { Wrapper, WrapperProps } from '../Wrapper';

const DynamicScene = React.lazy(() => import('./Scene'));

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
