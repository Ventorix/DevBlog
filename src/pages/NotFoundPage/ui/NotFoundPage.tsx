import { useTranslation } from 'react-i18next';
import * as cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
	const { t } = useTranslation();
	return <div className={cls.NotFoundPage}>{t('page-not-found')}</div>;
};

export default NotFoundPage;
