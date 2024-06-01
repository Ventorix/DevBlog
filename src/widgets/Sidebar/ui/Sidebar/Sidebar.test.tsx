import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('sidebar', () => {
	test('test text', () => {
		renderWithTranslation(<Sidebar />);
		const sidebar = screen.getByTestId('sidebar');

		expect(sidebar).toBeInTheDocument();
	});

	test('test toggle', () => {
		renderWithTranslation(<Sidebar />);
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
