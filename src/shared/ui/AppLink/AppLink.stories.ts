import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink } from './AppLink';

const meta = {
	title: 'shared/AppLink',
	component: AppLink,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},

	args: { to: '/' },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: { variant: 'primary', children: 'Text' },
};
export const PrimaryDark: Story = {
	args: { variant: 'primary', children: 'Text' },
	decorators: [ThemeDecorator(Theme.DARK)],
};
export const Secondary: Story = {
	args: { variant: 'secondary', children: 'Text' },
};
export const SecondaryDark: Story = {
	args: { variant: 'secondary', children: 'Text' },
	decorators: [ThemeDecorator(Theme.DARK)],
};
export const Red: Story = {
	args: { variant: 'red', children: 'Text' },
};
export const RedDark: Story = {
	args: { variant: 'red', children: 'Text' },
	decorators: [ThemeDecorator(Theme.DARK)],
};
