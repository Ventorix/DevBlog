import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Button } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button className={className} onClick={toggleTheme}>
			{theme === Theme.DARK ? (
				<DarkIcon width={24} height={24} />
			) : (
				<LightIcon width={24} height={24} />
			)}
		</Button>
	);
};
