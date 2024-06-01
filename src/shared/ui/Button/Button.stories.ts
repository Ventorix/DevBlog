import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from './Button';

const meta = {
	title: 'shared/Button',
	component: Button,
	parameters: {},
	argTypes: {},

	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Primary',
		variant: 'primary',
	},
};
export const PrimaryDark: Story = {
	args: {
		children: 'Primary',
		variant: 'primary',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
	args: {
		children: 'Secondary',
		variant: 'secondary',
	},
};
export const SecondaryDark: Story = {
	args: {
		children: 'Secondary',
		variant: 'secondary',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};
export const Clear: Story = {
	args: {
		children: 'Clear',
		variant: 'clear',
	},
};
