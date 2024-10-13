import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/userSchema';

const initialState: UserSchema = {
	authData: {
		id: '1',
		username: 'Admin',
	},
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
