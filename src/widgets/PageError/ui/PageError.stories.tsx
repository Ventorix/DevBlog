import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageError } from './PageError';

const meta = {
	title: 'widget/PageError',
	component: PageError,
	parameters: {},
	argTypes: {},

	args: {
		error: {
			message: 'Error test',
		},
	},
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	// @ts-expect-error Storybook bug
	args: {},
};
export const Dark: Story = {
	// @ts-expect-error Storybook bug
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
};
