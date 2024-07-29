import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/lib/types/DeepPartial';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
	test('should return counter value = 10', () => {
		const state: DeepPartial<StateSchema> = {
			counter: { value: 10 },
		};

		expect(getCounterValue(state)).toEqual(10);
	});
});
