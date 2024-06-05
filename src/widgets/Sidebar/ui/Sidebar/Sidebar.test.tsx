import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('sidebar', () => {
	test('test text', () => {
		componentRender(<Sidebar />);
		const sidebar = screen.getByTestId('sidebar');

		expect(sidebar).toBeInTheDocument();
	});

	test('test toggle', () => {
		componentRender(<Sidebar />);
		const toggleBtn = screen.getByTestId('sidebar-toggle');
		const sidebar = screen.getByTestId('sidebar');

		expect(sidebar).toBeInTheDocument();
		expect(toggleBtn).toBeInTheDocument();
		expect(sidebar).not.toHaveClass('collapsed');
		fireEvent.click(toggleBtn);
		expect(sidebar).toHaveClass('collapsed');
		screen.debug();
	});
});
