import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
	test('should set initial value', () => {
		componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
		const value = screen.getByTestId('value-title');

		expect(value).toHaveTextContent('10');
	});

	test('should increment value', () => {
		componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
		const value = screen.getByTestId('value-title');
		const incrementBtn = screen.getByTestId('increment-btn');
		fireEvent.click(incrementBtn);
		expect(value).toHaveTextContent('11');
	});

	test('should decrement value', () => {
		componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
		const value = screen.getByTestId('value-title');
		const decrementBtn = screen.getByTestId('decrement-btn');
		fireEvent.click(decrementBtn);
		expect(value).toHaveTextContent('9');
	});

	test('should increment value by 10', () => {
		componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
		const value = screen.getByTestId('value-title');
		const incrementAmountBtn = screen.getByTestId('increment-amount-btn');
		fireEvent.click(incrementAmountBtn);
		expect(value).toHaveTextContent('20');
	});
});
