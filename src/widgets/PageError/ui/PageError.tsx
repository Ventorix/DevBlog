import { useTheme } from 'app/providers/ThemeProvider';
import { FallbackProps, useErrorBoundary } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import * as cls from './PageError.module.scss';

function PageError({ error }: FallbackProps) {
	const { theme } = useTheme();
	const { resetBoundary } = useErrorBoundary();
	const { t } = useTranslation();

	return (
		<div className={classNames(cls.PageError, {}, [theme])} role='alert'>
			<p className={cls.errorTitle}>{t('Something went wrong')}</p>
			<pre className={cls.errorDescription}>{error.message}</pre>
			<Button onClick={resetBoundary}>{t('Try again')}</Button>
		</div>
	);
}

export default PageError;
