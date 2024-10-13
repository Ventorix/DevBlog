import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/lib/types/DeepPartial';

export function getCounter(state: DeepPartial<StateSchema>): { value?: number } {
	return state.counter ?? { value: undefined };
}
