import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '../../lib/classNames/classNames';
import * as cls from './Button.module.scss';

export type ButtonVariant = 'primary';

export type ButtonSize = 'size-s' | 'size-m' | 'size-l' | 'size-xl';

export type ButtonFontSize = 'font-s' | 'font-m' | 'font-l' | 'font-xl';

export type ButtonFontWeight =
	| 'font-weight_s'
	| 'font-weight_m'
	| 'font-weight_l'
	| 'font-weight_xl';

export type ButtonColor = 'normal' | 'success' | 'error';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: ButtonVariant;
	size?: ButtonSize;
	fontSize?: ButtonFontSize;
	fontWeight?: ButtonFontWeight;
	color?: ButtonColor;
	disabled?: boolean;
	children?: ReactNode;
	fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		variant = 'primary',
		disabled,
		fullWidth,
		size = 'size-m',
		fontSize = 'font-m',
		fontWeight = 'font-weight_m',
		...otherProps
	} = props;

	const mods: Mods = {
		[cls.disabled]: disabled,
		[cls.fullWidth]: fullWidth,
	};

	return (
		<button
			type='button'
			className={classNames(cls.Button, mods, [
				className,
				cls[variant],
				cls[size],
				cls[fontSize],
				cls[fontWeight],
			])}
			disabled={disabled}
			{...otherProps}>
			{children}
		</button>
	);
});
