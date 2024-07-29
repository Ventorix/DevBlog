import { Counter } from 'entitites/Counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
	const { t } = useTranslation('main');
	return (
		<div>
			{t('page')}
			<Counter />
		</div>
	);
};

export default MainPage;
