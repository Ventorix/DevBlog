import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
	test('should increment value by 1', () => {
		const state: CounterSchema = { value: 10 };
		expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
	});

	test('should decrement value by 1', () => {
		const state: CounterSchema = { value: 10 };
		expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
	});

	test('should increment value by 10', () => {
		const state: CounterSchema = { value: 10 };
		expect(counterReducer(state, counterActions.incrementByAmount(10))).toEqual({ value: 20 });
	});

	test('should get default value and increment it by 1', () => {
		expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
	});
});
