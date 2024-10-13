import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Input } from './Input';

const meta = {
	title: 'shared/Input',
	component: Input,
	parameters: {},
	argTypes: {},

	args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		placeholder: 'Type the text',
		value: 'some text',
	},
};
export const PrimaryDark: Story = {
	args: {
		placeholder: 'Type the text',
		value: 'some text',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};
