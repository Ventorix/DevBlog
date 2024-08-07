import { ErrorBoundaryProvider } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './shared/config/i18n/i18n';

const root = createRoot(document.getElementById('root')!);

root.render(
	<StoreProvider>
		<BrowserRouter>
			<ThemeProvider>
				<ErrorBoundaryProvider>
					<App />
				</ErrorBoundaryProvider>
			</ThemeProvider>
		</BrowserRouter>
	</StoreProvider>,
);
