import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import NotFoundPage from './NotFoundPage';

const meta = {
	title: 'pages/NotFoundPage',
	component: NotFoundPage,
	parameters: {},
	argTypes: {},

	args: {},
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {},
};
export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
};
