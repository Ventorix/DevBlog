import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import PageError from './PageError';

const meta = {
	title: 'widget/PageError',
	component: PageError,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},

	args: {},
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {
		error: {
			message: 'Error test',
		},
	},
};
export const Dark: Story = {
	args: {
		error: {
			message: 'Error test',
		},
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};
