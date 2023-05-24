import cn from 'classnames'
import style from './WelForm.module.scss'

import WelcomeJSON_EN from '../../../../../languages/EN/Welcome.json';
import WelcomeJSON_UA from '../../../../../languages/UA/Welcome.json';
import WelcomeJSON_ES from '../../../../../languages/ES/Welcome.json';
import WelcomeJSON_IT from '../../../../../languages/IT/Welcome.json';
import WelcomeJSON_FR from '../../../../../languages/FR/Welcome.json';
import WelcomeJSON_RU from '../../../../../languages/RU/Welcome.json';
import { useRouter } from 'next/router'


export const WelForm = () => {

    const { locale } = useRouter()
    
    return(
        <section className={cn(style.welForm, "container")}>
            <div className={style.welForm__top}>
                <h2 className='main_title'>
                    {
                        locale == 'en' ?
                        WelcomeJSON_EN['welcome-cart_3-title']
                        : locale == 'ua' ?
                        WelcomeJSON_UA['welcome-cart_3-title'] 
                        : locale == 'es' ?
                        WelcomeJSON_ES['welcome-cart_3-title']
                        : locale == 'it' ?
                        WelcomeJSON_IT['welcome-cart_3-title']
                        : locale == 'fr' ?
                        WelcomeJSON_FR['welcome-cart_3-title']
                        : locale == 'ru' ?
                        WelcomeJSON_RU['welcome-cart_3-title']
                        : ''
                    }
                </h2>
                <p className='main_subTitle'>
                    {
                        locale == 'en' ?
                        WelcomeJSON_EN['welcome-cart_3-subTitle']
                        : locale == 'ua' ?
                        WelcomeJSON_UA['welcome-cart_3-subTitle'] 
                        : locale == 'es' ?
                        WelcomeJSON_ES['welcome-cart_3-subTitle']
                        : locale == 'it' ?
                        WelcomeJSON_IT['welcome-cart_3-subTitle']
                        : locale == 'fr' ?
                        WelcomeJSON_FR['welcome-cart_3-subTitle']
                        : locale == 'ru' ?
                        WelcomeJSON_RU['welcome-cart_3-subTitle']
                        : ''
                    }
                </p>
            </div>
            <form className={style.welForm__form}>
                <div className={style.welForm_box} tabIndex={0}>
                    <label htmlFor="name">
                    {
                        locale == 'en' ?
                        WelcomeJSON_EN['welcome-cart_3-form-label_1']
                        : locale == 'ua' ?
                        WelcomeJSON_UA['welcome-cart_3-form-label_1'] 
                        : locale == 'es' ?
                        WelcomeJSON_ES['welcome-cart_3-form-label_1']
                        : locale == 'it' ?
                        WelcomeJSON_IT['welcome-cart_3-form-label_1']
                        : locale == 'fr' ?
                        WelcomeJSON_FR['welcome-cart_3-form-label_1']
                        : locale == 'ru' ?
                        WelcomeJSON_RU['welcome-cart_3-form-label_1']
                        : ''
                    }
                    </label>
                    <input className={style.welForm_box_file}  type="file" id="name" required/>
                </div>
                <div className={style.welForm_box} tabIndex={0}>
                    <label htmlFor="desc">
                    {
                        locale == 'en' ?
                        WelcomeJSON_EN['welcome-cart_3-form-label_2']
                        : locale == 'ua' ?
                        WelcomeJSON_UA['welcome-cart_3-form-label_2'] 
                        : locale == 'es' ?
                        WelcomeJSON_ES['welcome-cart_3-form-label_2']
                        : locale == 'it' ?
                        WelcomeJSON_IT['welcome-cart_3-form-label_2']
                        : locale == 'fr' ?
                        WelcomeJSON_FR['welcome-cart_3-form-label_2']
                        : locale == 'ru' ?
                        WelcomeJSON_RU['welcome-cart_3-form-label_2']
                        : ''
                    }
                    </label>
                    <textarea maxLength={400} id='desc' required></textarea>
                </div>

                <button>
                {
                        locale == 'en' ?
                        WelcomeJSON_EN['welcome-cart_3-form-button']
                        : locale == 'ua' ?
                        WelcomeJSON_UA['welcome-cart_3-form-button'] 
                        : locale == 'es' ?
                        WelcomeJSON_ES['welcome-cart_3-form-button']
                        : locale == 'it' ?
                        WelcomeJSON_IT['welcome-cart_3-form-button']
                        : locale == 'fr' ?
                        WelcomeJSON_FR['welcome-cart_3-form-button']
                        : locale == 'ru' ?
                        WelcomeJSON_RU['welcome-cart_3-form-button']
                        : ''
                    }
                </button>
            </form>
        </section>
    )
}