import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('button', () => {
	test('test render', () => {
		const textInsideButton = 'Test text';
		render(<Button>{textInsideButton}</Button>);
		expect(screen.getByText(textInsideButton)).toBeInTheDocument();
	});
	test('test variant prop', () => {
		const textInsideButton = 'Test variant';
		render(<Button variant='clear'>{textInsideButton}</Button>);
		expect(screen.getByText(textInsideButton)).toHaveClass('clear');
		screen.debug();
	});
});
