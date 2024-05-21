import { useTranslation } from 'react-i18next';
import * as cls from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
	const { t } = useTranslation();
	return <div className={cls.NotFoundPage}>{t('page-not-found')}</div>;
};
