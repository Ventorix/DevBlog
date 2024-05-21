import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps {
	children?: ReactNode;
}

export const ErrorBoundaryProvider = ({ children }: ErrorBoundaryProps) => {
	return <ErrorBoundary FallbackComponent={PageError}>{children}</ErrorBoundary>;
};
