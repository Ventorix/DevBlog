import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink } from './AppLink';

const meta = {
	title: 'shared/AppLink',
	component: AppLink,
	parameters: {},
	argTypes: {},

	args: { to: '/', children: 'Text' },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: { variant: 'primary' },
};
export const PrimaryDark: Story = {
	args: { variant: 'primary' },
	decorators: [ThemeDecorator(Theme.DARK)],
};
export const Secondary: Story = {
	args: { variant: 'secondary' },
};
export const SecondaryDark: Story = {
	args: { variant: 'secondary' },
	decorators: [ThemeDecorator(Theme.DARK)],
};
export const Red: Story = {
	args: { variant: 'red' },
};
export const RedDark: Story = {
	args: { variant: 'red' },
	decorators: [ThemeDecorator(Theme.DARK)],
};
