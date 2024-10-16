import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { LoginForm } from './LoginForm';

const meta = {
	title: 'features/LoginForm',
	component: LoginForm,
	parameters: {},
	argTypes: {},

	args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
export const PrimaryDark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
};
