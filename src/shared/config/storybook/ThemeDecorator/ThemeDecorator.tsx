import { StoryFn } from '@storybook/react/*';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

export const ThemeDecorator = (theme: Theme) => (story: () => StoryFn) => (
	<div className={`app ${theme}`}>{story()}</div>
);
