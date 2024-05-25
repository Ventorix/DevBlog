import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '../../lib/classNames/classNames';
import * as cls from './Button.module.scss';

export type ButtonVariant =
	| 'primary'
	| 'primary_outline'
	| 'secondary'
	| 'secondary_outline'
	| 'danger'
	| 'danger_outline'
	| 'clear';

export type ButtonSize = 'm' | 'l' | 'xl';

export type ButtonColor = 'normal' | 'success' | 'error';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: ButtonVariant;
	size?: ButtonSize;
	color?: ButtonColor;
	square?: boolean;
	disabled?: boolean;
	children?: ReactNode;
	fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		variant = 'clear',
		square,
		disabled,
		fullWidth,
		size = 'm',
		...otherProps
	} = props;

	const mods: Mods = {
		[cls.square]: square,
		[cls.disabled]: disabled,
		[cls.fullWidth]: fullWidth,
	};

	return (
		<button
			type='button'
			className={classNames(cls.Button, mods, [className, cls[variant], cls[size]])}
			disabled={disabled}
			{...otherProps}>
			{children}
		</button>
	);
});
