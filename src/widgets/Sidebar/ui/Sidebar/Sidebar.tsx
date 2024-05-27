/* eslint-disable i18next/no-literal-string */
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { Button } from 'shared/ui/Button';
import * as cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<aside
			data-testid='sidebar'
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<Button data-testid='sidebar-toggle' onClick={onToggle}>
				toggle
			</Button>

			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</aside>
	);
};
