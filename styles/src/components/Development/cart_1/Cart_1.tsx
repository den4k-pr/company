import cn from 'classnames'
import style from './Cart_1.module.scss'
import Link from 'next/link'

import WebDevJSON_EN from '../../../../../languages/EN/WebDev.json';
import WebDevJSON_UA from '../../../../../languages/UA/WebDev.json';
import WebDevJSON_ES from '../../../../../languages/ES/WebDev.json';
import WebDevJSON_IT from '../../../../../languages/IT/WebDev.json';
import WebDevJSON_FR from '../../../../../languages/FR/WebDev.json';
import WebDevJSON_RU from '../../../../../languages/RU/WebDev.json';
import { useRouter } from 'next/router'

export const Cart_1 = () => {
    
    const { locale } = useRouter()

    return(
        <section className={cn(style.cart_1, "container")}>
            <div className="main__box">
                <h3 className="main_title">
                    {
                        locale == 'ua' ?
                        WebDevJSON_UA['webDev-cart_1-title']
                        : locale == 'en' ?
                        WebDevJSON_EN['webDev-cart_1-title'] 
                        : locale == 'es' ?
                        WebDevJSON_ES['webDev-cart_1-title']
                        : locale == 'it' ?
                        WebDevJSON_IT['webDev-cart_1-title']
                        : locale == 'fr' ?
                        WebDevJSON_FR['webDev-cart_1-title']
                        : locale == 'ru' ?
                        WebDevJSON_RU['webDev-cart_1-title']
                        : ''
                    }
                </h3>
                <p className="main_subTitle">
                    {
                        locale == 'ua' ?
                        WebDevJSON_UA['webDev-cart_1-subTitle']
                        : locale == 'en' ?
                        WebDevJSON_EN['webDev-cart_1-subTitle'] 
                        : locale == 'es' ?
                        WebDevJSON_ES['webDev-cart_1-subTitle']
                        : locale == 'it' ?
                        WebDevJSON_IT['webDev-cart_1-subTitle']
                        : locale == 'fr' ?
                        WebDevJSON_FR['webDev-cart_1-subTitle']
                        : locale == 'ru' ?
                        WebDevJSON_RU['webDev-cart_1-subTitle']
                        : ''
                    }
                </p>
            </div>
            <div className={style.cart_1__main}>
                <div className={style.cart_1__main_left}></div>
                <div className={style.cart_1__main_right}>
                    <h3 className={style.cart_1__main_right_title}>
                    {
                        locale == 'ua' ?
                        WebDevJSON_UA['webDev-cart_1-box-title']
                        : locale == 'en' ?
                        WebDevJSON_EN['webDev-cart_1-box-title'] 
                        : locale == 'es' ?
                        WebDevJSON_ES['webDev-cart_1-box-title']
                        : locale == 'it' ?
                        WebDevJSON_IT['webDev-cart_1-box-title']
                        : locale == 'fr' ?
                        WebDevJSON_FR['webDev-cart_1-box-title']
                        : locale == 'ru' ?
                        WebDevJSON_RU['webDev-cart_1-box-title']
                        : ''
                    }
                    </h3>
                    <p className={style.cart_1__main_right_text}>
                    {
                        locale == 'ua' ?
                        WebDevJSON_UA['webDev-cart_1-box-subTitle']
                        : locale == 'en' ?
                        WebDevJSON_EN['webDev-cart_1-box-subTitle'] 
                        : locale == 'es' ?
                        WebDevJSON_ES['webDev-cart_1-box-subTitle']
                        : locale == 'it' ?
                        WebDevJSON_IT['webDev-cart_1-box-subTitle']
                        : locale == 'fr' ?
                        WebDevJSON_FR['webDev-cart_1-box-subTitle']
                        : locale == 'ru' ?
                        WebDevJSON_RU['webDev-cart_1-box-subTitle']
                        : ''
                    }
                    </p>
                    <Link className={style.cart_1__main_right_button} href='/contact'>
                    {
                        locale == 'ua' ?
                        WebDevJSON_UA['webDev-cart_1-box-button']
                        : locale == 'en' ?
                        WebDevJSON_EN['webDev-cart_1-box-button'] 
                        : locale == 'es' ?
                        WebDevJSON_ES['webDev-cart_1-box-button']
                        : locale == 'it' ?
                        WebDevJSON_IT['webDev-cart_1-box-button']
                        : locale == 'fr' ?
                        WebDevJSON_FR['webDev-cart_1-box-button']
                        : locale == 'ru' ?
                        WebDevJSON_RU['webDev-cart_1-box-button']
                        : ''
                    }
                    </Link>
                </div>
            </div>
        </section>
    )
}