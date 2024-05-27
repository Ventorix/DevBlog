import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from './Sidebar';

const meta = {
	title: 'widget/Sidebar',
	component: Sidebar,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},

	args: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {},
};
export const Dark: Story = {
	args: {},
	// @ts-expect-error Storybook bug
	decorators: [ThemeDecorator(Theme.DARK)],
};
