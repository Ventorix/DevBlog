import { useTranslation } from 'react-i18next';

const MainPage = () => {
	const { t } = useTranslation('main');
	return <div>{t('page')}</div>;
};

export default MainPage;
