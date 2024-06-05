import { useState } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { ArrowLeftIcon, ArrowRightIcon, HomeIcon, NotebookIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button } from 'shared/ui/Button';
import * as cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const { t } = useTranslation();

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<aside
			data-testid='sidebar'
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<div className={cls.items}>
				<div className={cls.item}>
					<AppLink className={cls.link} to={'/'}>
						<HomeIcon width={20} height={20} />
						<span className={`${cls.title} ${collapsed ? cls.hide : ''}`}>{t('Main')}</span>
					</AppLink>
				</div>
				<div className={cls.item}>
					<AppLink className={cls.link} to={RoutePath.about}>
						<NotebookIcon width={20} height={20} />
						<span className={`${cls.title} ${collapsed ? cls.hide : ''}`}>{t('About')}</span>
					</AppLink>
				</div>
			</div>
			<div className={cls.switchersBlock}>
				<Button
					data-testid='sidebar-toggle'
					variant='primary'
					onClick={onToggle}
					className={cls.collapseBtn}
					size='l'>
					{collapsed ? <ArrowRightIcon /> : <ArrowLeftIcon />}
				</Button>
				<div className={cls.switchers}>
					<ThemeSwitcher className={`${collapsed ? cls.sidebarBtn : ''}`} />
					<LangSwitcher
						className={`${collapsed ? cls.sidebarBtn : cls.langBtn}`}
						short={collapsed}
					/>
				</div>
			</div>
		</aside>
	);
};
