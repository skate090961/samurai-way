import React, {useState} from 'react';
import inputStyle from '../LoginForm.module.css'
import s from './Captcha.module.css'
import {getCaptchaTC} from "../../../../../store/auth/auth-thunk";
import {IoMdRefresh} from "react-icons/io";
import {useAppDispatch} from "../../../../../store/store";
import {FieldErrors, RegisterOptions} from "react-hook-form";
import {LoginFormType} from "../LoginForm";

type CaptchaPropsType = {
    captcha: string
    errors: FieldErrors<LoginFormType>
    register: (name: keyof LoginFormType, options?: RegisterOptions) => void
}

const Captcha: React.FC<CaptchaPropsType> = ({

                                                 captcha,
                                                 errors,
                                                 register
                                             }) => {
    const [isDisabledRefresh, setIsDisabledRefresh] = useState<boolean>(false)
    const refreshCaptchaHandler = () => {
        setIsDisabledRefresh(true)
        dispatch(getCaptchaTC())
            .finally(() => setIsDisabledRefresh(false))
    }
    const dispatch = useAppDispatch()
    return (
        <div className={s.container}>
            <div className={s.captcha}>
                <img src={captcha} alt="captcha" className={s.image}/>
                <button onClick={refreshCaptchaHandler} className={s.captchaButton} disabled={isDisabledRefresh}>
                    <IoMdRefresh className={s.buttonIcon}/>
                    <p>Refresh</p>
                </button>
            </div>
            <div className={s.captcha_input}>
                <div className={s.captchaInput}>
                    <input
                        autoFocus
                        placeholder={'Enter the code from the picture'}
                        className={errors.captcha ? inputStyle.input + ' ' + inputStyle.error_input : inputStyle.input}
                        {...register("captcha")}
                    />
                </div>
            </div>
            {errors.captcha && <p className={inputStyle.error_message}>{errors.captcha.message}</p>}
        </div>
    );
};

export default Captcha;