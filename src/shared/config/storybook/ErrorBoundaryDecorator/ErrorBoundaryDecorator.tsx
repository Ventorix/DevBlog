import { StoryFn } from '@storybook/react/*';
import { ErrorBoundaryProvider } from 'app/providers/ErrorBoundary';

export const ErrorBoundaryDecorator = (Story: StoryFn) => {
	return <ErrorBoundaryProvider>{<Story />}</ErrorBoundaryProvider>;
};
