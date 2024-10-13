import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import * as cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation();

	return (
		<form className={classNames(cls.LoginForm, {}, [className])}>
			<Input type='text' autofocus placeholder={t('login_form_text')} className={cls.input} />
			<Input type='text' className={cls.input} />
			<div className={classNames(cls.LoginButtons, {}, [className])}>
				<Button fullWidth>{t('login_form_sign_in')}</Button>
				<Button fullWidth>{t('login_form_sign_up')}</Button>
			</div>
		</form>
	);
};
