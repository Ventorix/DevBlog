import { StoryFn } from '@storybook/react/*';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

export const ThemeDecorator = (theme: Theme) => (story: () => StoryFn) => (
	// @ts-expect-error Types of Storybook and i18next struggle
	<div className={`app ${theme}`}>{story()}</div>
);
