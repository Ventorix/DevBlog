import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entitites/Counter';
import logger from 'redux-logger';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
	return configureStore({
		reducer: { counter: counterReducer },
		devTools: __IS__DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	});
}

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
