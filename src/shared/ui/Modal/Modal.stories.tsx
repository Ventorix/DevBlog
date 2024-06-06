import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

const meta = {
	title: 'shared/Modal',
	component: Modal,
	parameters: {},
	argTypes: {},
	args: {
		children:
			'Mollit laboris id eiusmod proident tempor nisi sunt. Id eu consequat fugiat mollit. Occaecat exercitation veniam duis proident eiusmod reprehenderit occaecat irure exercitation eiusmodoccaecat. Commodo eiusmod enim pariatur enim duis amet officia consequat deserunt sint sint adipisicing.',
		isOpen: true,
	},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {},
};
export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
};
