import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entitites/Counter';
import { userReducer } from 'entitites/User';
import logger from 'redux-logger';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer,
	};

	return configureStore({
		reducer: rootReducer,
		devTools: __IS__DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	});
}

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
