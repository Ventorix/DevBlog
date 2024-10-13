import { classNames } from 'shared/lib/classNames/classNames';

import { LoginModal } from 'features/AuthByUsername';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import * as cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onCloseModal = () => {
		setIsAuthModal(false);
	};

	const onShowModal = () => {
		setIsAuthModal(true);
	};

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button variant='primary' onClick={onShowModal}>
				{t('navbar_sign_in')}
			</Button>
			<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
		</div>
	);
};
