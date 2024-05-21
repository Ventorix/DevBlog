import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
	className?: string;
	children?: ReactNode;
	variant?: AppLinkVariant;
}

export const AppLink: FC<AppLinkProps> = (props) => {
	const { to, className, children, variant = 'primary', ...otherProps } = props;

	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, {}, [className, cls[variant]])}
			{...otherProps}>
			{children}
		</Link>
	);
};
