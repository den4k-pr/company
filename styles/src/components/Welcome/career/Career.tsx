import cn from 'classnames'
import style from './Career.module.scss'
import { useRef } from "react";

import WelcomeJSON_EN from '../../../../../languages/EN/Welcome.json';
import WelcomeJSON_UA from '../../../../../languages/UA/Welcome.json';
import WelcomeJSON_ES from '../../../../../languages/ES/Welcome.json';
import WelcomeJSON_IT from '../../../../../languages/IT/Welcome.json';
import WelcomeJSON_FR from '../../../../../languages/FR/Welcome.json';
import WelcomeJSON_RU from '../../../../../languages/RU/Welcome.json';
import { useRouter } from 'next/router'

const scrollToBottom = () => {
  window.scrollTo({
    top: window.pageYOffset + 1700,
    behavior: "smooth"
  });
};
export const Career = () => {

    const { locale } = useRouter()

    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = () => {
        scrollToBottom();
    };
    return(
        <section className={cn(style.career, "container")}>
            <div className='main__box'>
                <h2 className='main_title'>
                    {
                        locale == 'en' ?
                        WelcomeJSON_EN['welcome-cart_1-title']
                        : locale == 'ua' ?
                        WelcomeJSON_UA['welcome-cart_1-title'] 
                        : locale == 'es' ?
                        WelcomeJSON_ES['welcome-cart_1-title']
                        : locale == 'it' ?
                        WelcomeJSON_IT['welcome-cart_1-title']
                        : locale == 'fr' ?
                        WelcomeJSON_FR['welcome-cart_1-title']
                        : locale == 'ru' ?
                        WelcomeJSON_RU['welcome-cart_1-title']
                        : ''
                    }
                </h2>
                <p className='main_subTitle'>
                    {
                        locale == 'en' ?
                        WelcomeJSON_EN['welcome-cart_1-subTitle']
                        : locale == 'ua' ?
                        WelcomeJSON_UA['welcome-cart_1-subTitle'] 
                        : locale == 'es' ?
                        WelcomeJSON_ES['welcome-cart_1-subTitle']
                        : locale == 'it' ?
                        WelcomeJSON_IT['welcome-cart_1-subTitle']
                        : locale == 'fr' ?
                        WelcomeJSON_FR['welcome-cart_1-subTitle']
                        : locale == 'ru' ?
                        WelcomeJSON_RU['welcome-cart_1-subTitle']
                        : ''
                    }
                </p>
                <button ref={buttonRef} onClick={handleClick} className={style.career_button}>
                    {
                        locale == 'en' ?
                        WelcomeJSON_EN['welcome-cart_1-button']
                        : locale == 'ua' ?
                        WelcomeJSON_UA['welcome-cart_1-button'] 
                        : locale == 'es' ?
                        WelcomeJSON_ES['welcome-cart_1-button']
                        : locale == 'it' ?
                        WelcomeJSON_IT['welcome-cart_1-button']
                        : locale == 'fr' ?
                        WelcomeJSON_FR['welcome-cart_1-button']
                        : locale == 'ru' ?
                        WelcomeJSON_RU['welcome-cart_1-button']
                        : ''
                    }
                </button>
            </div>
            <div className={style.career_img}></div>
            <div className={style.career__box}>
                <h2 className='main_title'>
                    {
                        locale == 'en' ?
                        WelcomeJSON_EN['welcome-cart_1-content-title']
                        : locale == 'ua' ?
                        WelcomeJSON_UA['welcome-cart_1-content-title'] 
                        : locale == 'es' ?
                        WelcomeJSON_ES['welcome-cart_1-content-title']
                        : locale == 'it' ?
                        WelcomeJSON_IT['welcome-cart_1-content-title']
                        : locale == 'fr' ?
                        WelcomeJSON_FR['welcome-cart_1-content-title']
                        : locale == 'ru' ?
                        WelcomeJSON_RU['welcome-cart_1-content-title']
                        : ''
                    }
                </h2>
                <p className='main_subTitle'>
                    {
                        locale == 'en' ?
                        WelcomeJSON_EN['welcome-cart_1-content-subTitle']
                        : locale == 'ua' ?
                        WelcomeJSON_UA['welcome-cart_1-content-subTitle'] 
                        : locale == 'es' ?
                        WelcomeJSON_ES['welcome-cart_1-content-subTitle']
                        : locale == 'it' ?
                        WelcomeJSON_IT['welcome-cart_1-content-subTitle']
                        : locale == 'fr' ?
                        WelcomeJSON_FR['welcome-cart_1-content-subTitle']
                        : locale == 'ru' ?
                        WelcomeJSON_RU['welcome-cart_1-content-subTitle']
                        : ''
                    }
                </p>
            </div>
        </section>
    )
}