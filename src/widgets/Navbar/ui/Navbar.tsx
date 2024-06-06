/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import * as cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = () => {
		setIsAuthModal((prev) => !prev);
	};

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button variant='primary' onClick={onToggleModal}>
				{t('navbar_sign_in')}
			</Button>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				Mollit laboris id eiusmod proident tempor nisi sunt. Id eu consequat fugiat mollit. Occaecat
				exercitation veniam duis proident eiusmod reprehenderit occaecat irure exercitation eiusmod
				occaecat. Commodo eiusmod enim pariatur enim duis amet officia consequat deserunt sint sint
				adipisicing.
			</Modal>
		</div>
	);
};
