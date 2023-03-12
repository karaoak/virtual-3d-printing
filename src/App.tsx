import React from 'react';

import { Benchy3d } from './3d/benchy/Benchy3d';
// import { Benchy3d } from './3d/benchy/minimal/Benchy3d';
import { backgroundColor } from './theme/colors';

export const App: React.FC = () => (
	<div style={{ width: '100vw', height: '100vh', backgroundColor }}>
		<Benchy3d />
	</div>
);
