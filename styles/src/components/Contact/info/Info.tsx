import cn from 'classnames'
import style from './Info.module.scss'

import ContactJSON_EN from '../../../../../languages/EN/Contact.json';
import ContactJSON_UA from '../../../../../languages/UA/Contact.json';
import ContactJSON_ES from '../../../../../languages/ES/Contact.json';
import ContactJSON_IT from '../../../../../languages/IT/Contact.json';
import ContactJSON_FR from '../../../../../languages/FR/Contact.json';
import ContactJSON_RU from '../../../../../languages/RU/Contact.json';
import { useRouter } from 'next/router'

export const Info = () => {

    const { locale } = useRouter()

    return(
        <section className={cn(style.info, "container")}>
            <div className={style.info__box}>
                <h3 className={style.info__box_title}>
                    {
                        locale == 'en' ?
                        ContactJSON_EN['info-title']
                        : locale == 'ua' ?
                        ContactJSON_UA['info-title'] 
                        : locale == 'es' ?
                        ContactJSON_ES['info-title']
                        : locale == 'it' ?
                        ContactJSON_IT['info-title']
                        : locale == 'fr' ?
                        ContactJSON_FR['info-title']
                        : locale == 'ru' ?
                        ContactJSON_RU['info-title']
                        : ''
                    }
                </h3>
                <button className={style.info__box_button}>
                {
                        locale == 'en' ?
                        ContactJSON_EN['info-tel']
                        : locale == 'ua' ?
                        ContactJSON_UA['info-tel'] 
                        : locale == 'es' ?
                        ContactJSON_ES['info-tel']
                        : locale == 'it' ?
                        ContactJSON_IT['info-tel']
                        : locale == 'fr' ?
                        ContactJSON_FR['info-tel']
                        : locale == 'ru' ?
                        ContactJSON_RU['info-tel']
                        : ''
                    }
                </button>
                <button className={style.info__box_button}>
                {
                        locale == 'en' ?
                        ContactJSON_EN['info-email']
                        : locale == 'ua' ?
                        ContactJSON_UA['info-email'] 
                        : locale == 'es' ?
                        ContactJSON_ES['info-email']
                        : locale == 'it' ?
                        ContactJSON_IT['info-email']
                        : locale == 'fr' ?
                        ContactJSON_FR['info-email']
                        : locale == 'ru' ?
                        ContactJSON_RU['info-email']
                        : ''
                    }
                </button>
            </div>
            <div className={style.info__box}>
                <h3 className={style.info__box_title}>
                {
                        locale == 'en' ?
                        ContactJSON_EN['info-title2']
                        : locale == 'ua' ?
                        ContactJSON_UA['info-title2'] 
                        : locale == 'es' ?
                        ContactJSON_ES['info-title2']
                        : locale == 'it' ?
                        ContactJSON_IT['info-title2']
                        : locale == 'fr' ?
                        ContactJSON_FR['info-title2']
                        : locale == 'ru' ?
                        ContactJSON_RU['info-title2']
                        : ''
                    }
                </h3>
            </div>
        </section>
    )
}