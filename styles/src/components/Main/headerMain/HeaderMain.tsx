import Link from 'next/link'
import style from './HeaderMain.module.scss'
import cn from 'classnames'
import MainJSON_EN from '../../../../../languages/EN/Main.json';
import MainJSON_UA from '../../../../../languages/UA/Main.json';
import MainJSON_ES from '../../../../../languages/ES/Main.json';
import MainJSON_IT from '../../../../../languages/IT/Main.json';
import MainJSON_FR from '../../../../../languages/FR/Main.json';
import MainJSON_RU from '../../../../../languages/RU/Main.json';
import { useRouter } from 'next/router'

export const HeaderMain = () => {

    const { locale } = useRouter()

    return(
        <section className={style.topMain_fon}>
            <div className={cn(style.topMain, 'container')}>
                <h1 className={style.topMain_title}>
                    {
                        locale == 'ua' ?
                        MainJSON_UA['main-header-title']
                        : locale == 'en' ?
                        MainJSON_EN['main-header-title'] 
                        : locale == 'es' ?
                        MainJSON_ES['main-header-title']
                        : locale == 'it' ?
                        MainJSON_IT['main-header-title']
                        : locale == 'fr' ?
                        MainJSON_FR['main-header-title']
                        : locale == 'ru' ?
                        MainJSON_RU['main-header-title']
                        : ''
                    }
                </h1>
                <p className={style.topMain_text}>
                    {
                        locale == 'ua' ?
                        MainJSON_UA['main-header-subTitle']
                        : locale == 'en' ?
                        MainJSON_EN['main-header-subTitle'] 
                        : locale == 'es' ?
                        MainJSON_ES['main-header-subTitle']
                        : locale == 'it' ?
                        MainJSON_IT['main-header-subTitle']
                        : locale == 'fr' ?
                        MainJSON_FR['main-header-subTitle']
                        : locale == 'ru' ?
                        MainJSON_RU['main-header-subTitle']
                        : ''
                    }
                </p>
                <Link href='/contact' className={style.topMain_button}>
                    {
                        locale == 'ua' ?
                        MainJSON_UA['main-header-button']
                        : locale == 'en' ?
                        MainJSON_EN['main-header-button'] 
                        : locale == 'es' ?
                        MainJSON_ES['main-header-button']
                        : locale == 'it' ?
                        MainJSON_IT['main-header-button']
                        : locale == 'fr' ?
                        MainJSON_FR['main-header-button']
                        : locale == 'ru' ?
                        MainJSON_RU['main-header-button']
                        : ''
                    }
                </Link>
            </div>
        </section>
    )
}