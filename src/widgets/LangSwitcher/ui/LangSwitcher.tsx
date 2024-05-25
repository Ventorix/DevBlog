import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	const toggleLang = async () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<Button className={className} onClick={toggleLang}>
			{t('Language')}
		</Button>
	);
};
