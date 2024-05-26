import { StoryFn } from '@storybook/react/*';
import { ErrorBoundaryProvider } from 'app/providers/ErrorBoundary';

export const ErrorBoundaryDecorator = (story: () => StoryFn) => {
	return <ErrorBoundaryProvider>{story()}</ErrorBoundaryProvider>;
};
