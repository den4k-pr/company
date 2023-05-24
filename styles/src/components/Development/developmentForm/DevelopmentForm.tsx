import cn from 'classnames'
import style from './DevelopmentForm.module.scss'

import WebDevJSON_EN from '../../../../../languages/EN/WebDev.json';
import WebDevJSON_UA from '../../../../../languages/UA/WebDev.json';
import WebDevJSON_ES from '../../../../../languages/ES/WebDev.json';
import WebDevJSON_IT from '../../../../../languages/IT/WebDev.json';
import WebDevJSON_FR from '../../../../../languages/FR/WebDev.json';
import WebDevJSON_RU from '../../../../../languages/RU/WebDev.json';
import { useRouter } from 'next/router'

export const DevelopmentForm = () => {

    const { locale } = useRouter()

    return(
        <section className={cn(style.form, "container")}>
            <div className={style.form__info}>
                <h2 className='main_title'>
                    {
                        locale == 'ua' ?
                        WebDevJSON_UA['webDev-cart_3-title']
                        : locale == 'en' ?
                        WebDevJSON_EN['webDev-cart_3-title'] 
                        : locale == 'es' ?
                        WebDevJSON_ES['webDev-cart_3-title']
                        : locale == 'it' ?
                        WebDevJSON_IT['webDev-cart_3-title']
                        : locale == 'fr' ?
                        WebDevJSON_FR['webDev-cart_3-title']
                        : locale == 'ru' ?
                        WebDevJSON_RU['webDev-cart_3-title']
                        : ''
                    }
                </h2>
            </div>
            <form className={style.form__form}>
                <div className={style.form_box} tabIndex={0}>
                    <label htmlFor="name">
                    {
                        locale == 'ua' ?
                        WebDevJSON_UA['webDev-cart_3-label-1']
                        : locale == 'en' ?
                        WebDevJSON_EN['webDev-cart_3-label-1'] 
                        : locale == 'es' ?
                        WebDevJSON_ES['webDev-cart_3-label-1']
                        : locale == 'it' ?
                        WebDevJSON_IT['webDev-cart_3-label-1']
                        : locale == 'fr' ?
                        WebDevJSON_FR['webDev-cart_3-label-1']
                        : locale == 'ru' ?
                        WebDevJSON_RU['webDev-cart_3-label-1']
                        : ''
                    }
                    </label>
                    <input type="text" id="name" required/>
                </div>

                <div className={style.form_box} tabIndex={0}>
                    <label htmlFor="surName">
                    {
                        locale == 'ua' ?
                        WebDevJSON_UA['webDev-cart_3-label-2']
                        : locale == 'en' ?
                        WebDevJSON_EN['webDev-cart_3-label-2'] 
                        : locale == 'es' ?
                        WebDevJSON_ES['webDev-cart_3-label-2']
                        : locale == 'it' ?
                        WebDevJSON_IT['webDev-cart_3-label-2']
                        : locale == 'fr' ?
                        WebDevJSON_FR['webDev-cart_3-label-2']
                        : locale == 'ru' ?
                        WebDevJSON_RU['webDev-cart_3-label-2']
                        : ''
                    }
                    </label>
                    <input type="text" id="surName" required/>
                </div>

                <div className={style.form_box} tabIndex={0}>
                    <label htmlFor="email">
                    {
                        locale == 'ua' ?
                        WebDevJSON_UA['webDev-cart_3-label-3']
                        : locale == 'en' ?
                        WebDevJSON_EN['webDev-cart_3-label-3'] 
                        : locale == 'es' ?
                        WebDevJSON_ES['webDev-cart_3-label-3']
                        : locale == 'it' ?
                        WebDevJSON_IT['webDev-cart_3-label-3']
                        : locale == 'fr' ?
                        WebDevJSON_FR['webDev-cart_3-label-3']
                        : locale == 'ru' ?
                        WebDevJSON_RU['webDev-cart_3-label-3']
                        : ''
                    }
                    </label>
                    <input type="text" id="email" required/>
                </div>

                <div className={style.form_box} tabIndex={0}>
                    <label htmlFor="tel">
                    {
                        locale == 'ua' ?
                        WebDevJSON_UA['webDev-cart_3-label-4']
                        : locale == 'en' ?
                        WebDevJSON_EN['webDev-cart_3-label-4'] 
                        : locale == 'es' ?
                        WebDevJSON_ES['webDev-cart_3-label-4']
                        : locale == 'it' ?
                        WebDevJSON_IT['webDev-cart_3-label-4']
                        : locale == 'fr' ?
                        WebDevJSON_FR['webDev-cart_3-label-4']
                        : locale == 'ru' ?
                        WebDevJSON_RU['webDev-cart_3-label-4']
                        : ''
                    }
                    </label>
                    <input type="text" id="tel" required/>                   
                </div>

                <div className={style.form_box} tabIndex={0}>
                    <label htmlFor="company">
                    {
                        locale == 'ua' ?
                        WebDevJSON_UA['webDev-cart_3-label-5']
                        : locale == 'en' ?
                        WebDevJSON_EN['webDev-cart_3-label-5'] 
                        : locale == 'es' ?
                        WebDevJSON_ES['webDev-cart_3-label-5']
                        : locale == 'it' ?
                        WebDevJSON_IT['webDev-cart_3-label-5']
                        : locale == 'fr' ?
                        WebDevJSON_FR['webDev-cart_3-label-5']
                        : locale == 'ru' ?
                        WebDevJSON_RU['webDev-cart_3-label-5']
                        : ''
                    }
                    </label>
                    <input type="text" id="company" required/>
                </div>
                <div className={style.form_box} tabIndex={0}>
                    <label htmlFor="desc">
                    {
                        locale == 'ua' ?
                        WebDevJSON_UA['webDev-cart_3-label-6']
                        : locale == 'en' ?
                        WebDevJSON_EN['webDev-cart_3-label-6'] 
                        : locale == 'es' ?
                        WebDevJSON_ES['webDev-cart_3-label-6']
                        : locale == 'it' ?
                        WebDevJSON_IT['webDev-cart_3-label-6']
                        : locale == 'fr' ?
                        WebDevJSON_FR['webDev-cart_3-label-6']
                        : locale == 'ru' ?
                        WebDevJSON_RU['webDev-cart_3-label-6']
                        : ''
                    }
                    </label>
                    <textarea id='desc' required></textarea>
                </div>

                <button>
                    {
                        locale == 'ua' ?
                        WebDevJSON_UA['webDev-cart_3-button']
                        : locale == 'en' ?
                        WebDevJSON_EN['webDev-cart_3-button'] 
                        : locale == 'es' ?
                        WebDevJSON_ES['webDev-cart_3-button']
                        : locale == 'it' ?
                        WebDevJSON_IT['webDev-cart_3-button']
                        : locale == 'fr' ?
                        WebDevJSON_FR['webDev-cart_3-button']
                        : locale == 'ru' ?
                        WebDevJSON_RU['webDev-cart_3-button']
                        : ''
                    }
                </button>
            </form>
        </section>
    )
}