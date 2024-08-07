import { FC, MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import * as cls from './Modal.module.scss';

interface ModalProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}

const ANIMATION_DELAY = 250;

export const Modal: FC<ModalProps> = (props) => {
	const { className, children, isOpen, onClose } = props;

	const [isClosing, setIsClosing] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	const onContentClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
		e.stopPropagation();
	};

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true);

			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeHandler();
			}
		},
		[closeHandler],
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	const mods: Mods = {
		[cls.opened]: isOpen,
		[cls.closing]: isClosing,
	};

	return (
		<Portal>
			<div className={classNames(cls.Modal, mods, [className])}>
				<div className={cls.overlay} onClick={closeHandler}>
					<div className={cls.content} onClick={(e) => onContentClick(e)}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
