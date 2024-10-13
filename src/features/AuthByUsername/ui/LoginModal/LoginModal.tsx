import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import * as cls from './LoginModal.module.scss';

interface LoginModalProps {
	className?: string;
	isOpen?: boolean;
	onClose?: () => void;
}

const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
	return (
		<>
			{isOpen ? (
				<Modal
					lazy
					isOpen={isOpen}
					onClose={onClose}
					className={classNames(cls.LoginModal, {}, [className])}>
					<LoginForm />
				</Modal>
			) : null}
		</>
	);
};

export default LoginModal;
