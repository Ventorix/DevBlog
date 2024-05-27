import { lazy } from 'react';

export const AboutPageAsync = lazy(
	() =>
		new Promise((res) => {
			// @ts-expect-error Only during development
			setTimeout(() => res(import('./AboutPage')), 1500);
		}),
);
