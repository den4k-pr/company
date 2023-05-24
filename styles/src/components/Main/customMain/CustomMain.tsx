import Image from 'next/image'
import style from './CustomMain.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { useRef } from 'react'
import useOnScreen from './Animation'
import { useRouter } from 'next/router'

import MainJSON_EN from '../../../../../languages/EN/Main.json';
import MainJSON_UA from '../../../../../languages/UA/Main.json';
import MainJSON_ES from '../../../../../languages/ES/Main.json';
import MainJSON_IT from '../../../../../languages/IT/Main.json';
import MainJSON_FR from '../../../../../languages/FR/Main.json';
import MainJSON_RU from '../../../../../languages/RU/Main.json';

export const CustomMain = () => {
    const ref1 = useRef<HTMLDivElement>(null);

    const isVisible1 = useOnScreen(ref1);

    const { locale } = useRouter()

    return(
        <section className={cn(style.custom, 'container')}>
            <div className="main__box">
                <h2 className='main_title'>
                    {
                        locale == 'ua' ?
                        MainJSON_UA['main-cart_1-title']
                        : locale == 'en' ?
                        MainJSON_EN['main-cart_1-title'] 
                        : locale == 'es' ?
                        MainJSON_ES['main-cart_1-title']
                        : locale == 'it' ?
                        MainJSON_IT['main-cart_1-title']
                        : locale == 'fr' ?
                        MainJSON_FR['main-cart_1-title']
                        : locale == 'ru' ?
                        MainJSON_RU['main-cart_1-title']
                        : ''
                    }
                </h2>
                <p className='main_subTitle'>
                    {
                        locale == 'ua' ?
                        MainJSON_UA['main-cart_1-subTitle']
                        : locale == 'en' ?
                        MainJSON_EN['main-cart_1-subTitle'] 
                        : locale == 'es' ?
                        MainJSON_ES['main-cart_1-subTitle']
                        : locale == 'it' ?
                        MainJSON_IT['main-cart_1-subTitle']
                        : locale == 'fr' ?
                        MainJSON_FR['main-cart_1-subTitle']
                        : locale == 'ru' ?
                        MainJSON_RU['main-cart_1-subTitle']
                        : ''
                    }
                </p>
            </div>
            <div ref={ref1} className={style.dev__columns}>
                <div className={cn(style.dev__column, isVisible1 === false ? 'slide-on' :'slide-in')}>
                    <figure className={style.dev__column_content}>
                        <Image className={style.dev__column_content_img} width={60} height={60} src='/computer.svg' alt='computer'/>
                        <figcaption>
                        {
                            locale == 'ua' ?
                            MainJSON_UA['main-cart-box-text']
                            : locale == 'en' ?
                            MainJSON_EN['main-cart-box-text'] 
                            : locale == 'es' ?
                            MainJSON_ES['main-cart-box-text']
                            : locale == 'it' ?
                            MainJSON_IT['main-cart-box-text']
                            : locale == 'fr' ?
                            MainJSON_FR['main-cart-box-text']
                            : locale == 'ru' ?
                            MainJSON_RU['main-cart-box-text']
                            : ''
                        }
                        </figcaption>
                    </figure>
                </div>
                {/* <div className={style.dev__column}>
                    <figure className={style.dev__column_content}>
                        <Image className={style.dev__column_content_img} width={60} height={60} src='/mobile.svg' alt='mobile'/>
                        <figcaption>Ми розробляємо мобільні програми, які виконують свою роботу та плекшують життя.</figcaption>
                    </figure>
                </div> */}
            </div>
            <div className={cn(style.devInfo)}>
                <div className={style.devInfo__content}>
                    <Image className={style.devInfo__content_img} width={500} height={270} src='/webDev.png' alt='' />
                    <div className={style.devInfo__content__info}>
                        <Link href='/web-app-development' className={style.devInfo__content__info_title}>
                        {
                            locale == 'ua' ?
                            MainJSON_UA['main-cart2-title']
                            : locale == 'en' ?
                            MainJSON_EN['main-cart2-title'] 
                            : locale == 'es' ?
                            MainJSON_ES['main-cart2-title']
                            : locale == 'it' ?
                            MainJSON_IT['main-cart2-title']
                            : locale == 'fr' ?
                            MainJSON_FR['main-cart2-title']
                            : locale == 'ru' ?
                            MainJSON_RU['main-cart2-title']
                            : ''
                        }
                        </Link>
                        <ul className={style.devInfo__content__info_list}>
                            
                            <li>
                                <p className={style.devInfo__content__info_list_text}>
                                {
                                    locale == 'ua' ?
                                    MainJSON_UA['main-cart2-li_1']
                                    : locale == 'en' ?
                                    MainJSON_EN['main-cart2-li_1'] 
                                    : locale == 'es' ?
                                    MainJSON_ES['main-cart2-li_1']
                                    : locale == 'it' ?
                                    MainJSON_IT['main-cart2-li_1']
                                    : locale == 'fr' ?
                                    MainJSON_FR['main-cart2-li_1']
                                    : locale == 'ru' ?
                                    MainJSON_RU['main-cart2-li_1']
                                    : ''
                                }
                                </p>
                            </li>
                            <li>
                                <p className={style.devInfo__content__info_list_text}>
                                {
                                    locale == 'ua' ?
                                    MainJSON_UA['main-cart2-li_2']
                                    : locale == 'en' ?
                                    MainJSON_EN['main-cart2-li_2'] 
                                    : locale == 'es' ?
                                    MainJSON_ES['main-cart2-li_2']
                                    : locale == 'it' ?
                                    MainJSON_IT['main-cart2-li_2']
                                    : locale == 'fr' ?
                                    MainJSON_FR['main-cart2-li_2']
                                    : locale == 'ru' ?
                                    MainJSON_RU['main-cart2-li_2']
                                    : ''
                                }
                                </p>
                            </li>
                            <li>
                                <p className={style.devInfo__content__info_list_text}>
                                {
                                    locale == 'ua' ?
                                    MainJSON_UA['main-cart2-li_3']
                                    : locale == 'en' ?
                                    MainJSON_EN['main-cart2-li_3'] 
                                    : locale == 'es' ?
                                    MainJSON_ES['main-cart2-li_3']
                                    : locale == 'it' ?
                                    MainJSON_IT['main-cart2-li_3']
                                    : locale == 'fr' ?
                                    MainJSON_FR['main-cart2-li_3']
                                    : locale == 'ru' ?
                                    MainJSON_RU['main-cart2-li_3']
                                    : ''
                                }
                                </p>
                            </li>
                            <li>
                                <p className={style.devInfo__content__info_list_text}>
                                {
                                    locale == 'ua' ?
                                    MainJSON_UA['main-cart2-li_4']
                                    : locale == 'en' ?
                                    MainJSON_EN['main-cart2-li_4'] 
                                    : locale == 'es' ?
                                    MainJSON_ES['main-cart2-li_4']
                                    : locale == 'it' ?
                                    MainJSON_IT['main-cart2-li_4']
                                    : locale == 'fr' ?
                                    MainJSON_FR['main-cart2-li_4']
                                    : locale == 'ru' ?
                                    MainJSON_RU['main-cart2-li_4']
                                    : ''
                                }
                                </p>
                            </li>
                            <li>
                                <p className={style.devInfo__content__info_list_text}>
                                {
                                    locale == 'ua' ?
                                    MainJSON_UA['main-cart2-li_5']
                                    : locale == 'en' ?
                                    MainJSON_EN['main-cart2-li_5'] 
                                    : locale == 'es' ?
                                    MainJSON_ES['main-cart2-li_5']
                                    : locale == 'it' ?
                                    MainJSON_IT['main-cart2-li_5']
                                    : locale == 'fr' ?
                                    MainJSON_FR['main-cart2-li_5']
                                    : locale == 'ru' ?
                                    MainJSON_RU['main-cart2-li_5']
                                    : ''
                                }
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className={style.devInfo__content}>
                    <div className={style.devInfo__content__info}>
                        <Link href='/mobile-app-development' className={style.devInfo__content__info_title}>Можливості мобільного додатку</Link>
                        <ul className={style.devInfo__content__info_list}>
                            <li>
                                <p className={style.devInfo__content__info_list_text}>Кросплатформенний або нативний iOS/Android</p>
                            </li>
                            <li>
                                <p className={style.devInfo__content__info_list_text}>Складні робочі процеси, взаємодії та візуалізації</p>
                            </li>
                            <li>
                                <p className={style.devInfo__content__info_list_text}>Шлюз і програми керування для пристроїв IoT; Зв'язок Bluetooth і BLE</p>
                            </li>
                            <li>
                                <p className={style.devInfo__content__info_list_text}>Відшліфований, зручний, доступний інтерфейс користувача</p>
                            </li>
                            <li>
                                <p className={style.devInfo__content__info_list_text}>Хмарний; може працювати в автономному режимі та періодично синхронізувати дані</p>
                            </li>
                        </ul>
                    </div>
                    <Image className={style.devInfo__content_img} width={500} height={270} src='/mobileDev.webp' alt='' />
                </div> */}
            </div>
        </section>
    )
}