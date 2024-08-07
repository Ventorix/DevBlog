import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/lib/types/DeepPartial';
import { getCounter } from './getCounter';

describe('getCounter', () => {
	test('should return counter value', () => {
		const state: DeepPartial<StateSchema> = {
			counter: { value: 10 },
		};
		expect(getCounter(state)).toEqual({ value: 10 });
	});
});
