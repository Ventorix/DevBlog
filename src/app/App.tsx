import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

function App() {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<div className='content-page'>
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	);
}

export default App;
