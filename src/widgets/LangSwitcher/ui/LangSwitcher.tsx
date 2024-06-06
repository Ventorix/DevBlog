import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
interface LangSwitcherProps {
	className?: string;
	short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	const toggleLang = async () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<Button fontSize='font-s' className={className} onClick={toggleLang}>
			{short ? t('short_language') : t('language')}
		</Button>
	);
};
