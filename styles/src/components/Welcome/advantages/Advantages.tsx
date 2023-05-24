import { useRef } from 'react';
import style from './Advantages.module.scss'
import cn from 'classnames'
import useOnScreen from '../../Main/customMain/Animation';

import WelcomeJSON_EN from '../../../../../languages/EN/Welcome.json';
import WelcomeJSON_UA from '../../../../../languages/UA/Welcome.json';
import WelcomeJSON_ES from '../../../../../languages/ES/Welcome.json';
import WelcomeJSON_IT from '../../../../../languages/IT/Welcome.json';
import WelcomeJSON_FR from '../../../../../languages/FR/Welcome.json';
import WelcomeJSON_RU from '../../../../../languages/RU/Welcome.json';
import { useRouter } from 'next/router'

export const Advantages = () => {
    const ref1 = useRef<HTMLDivElement>(null);

    const { locale } = useRouter()

    const isVisible1 = useOnScreen(ref1);

    return(
        <section className={cn(style.advantage, "container")}>
            <div className="main__box">
                <h3 className='main_title'>
                    {
                        locale == 'en' ?
                        WelcomeJSON_EN['welcome-cart_2-title']
                        : locale == 'ua' ?
                        WelcomeJSON_UA['welcome-cart_2-title'] 
                        : locale == 'es' ?
                        WelcomeJSON_ES['welcome-cart_2-title']
                        : locale == 'it' ?
                        WelcomeJSON_IT['welcome-cart_2-title']
                        : locale == 'fr' ?
                        WelcomeJSON_FR['welcome-cart_2-title']
                        : locale == 'ru' ?
                        WelcomeJSON_RU['welcome-cart_2-title']
                        : ''
                    }
                </h3>
                <p className='main_subTitle'>
                    {
                        locale == 'en' ?
                        WelcomeJSON_EN['welcome-cart_2-subTitle']
                        : locale == 'ua' ?
                        WelcomeJSON_UA['welcome-cart_2-subTitle'] 
                        : locale == 'es' ?
                        WelcomeJSON_ES['welcome-cart_2-subTitle']
                        : locale == 'it' ?
                        WelcomeJSON_IT['welcome-cart_2-subTitle']
                        : locale == 'fr' ?
                        WelcomeJSON_FR['welcome-cart_2-subTitle']
                        : locale == 'ru' ?
                        WelcomeJSON_RU['welcome-cart_2-subTitle']
                        : ''
                    }
                </p>
            </div>
            <div className={style.advantage__columns}>
                <div ref={ref1}  className={cn(style.advantage__column, isVisible1 === false ? 'slide-on' :'slide-in')}>
                    <h4 className={style.advantage__column_title}>
                    {
                        locale == 'en' ?
                        WelcomeJSON_EN['welcome-cart_2-left-title']
                        : locale == 'ua' ?
                        WelcomeJSON_UA['welcome-cart_2-left-title'] 
                        : locale == 'es' ?
                        WelcomeJSON_ES['welcome-cart_2-left-title']
                        : locale == 'it' ?
                        WelcomeJSON_IT['welcome-cart_2-left-title']
                        : locale == 'fr' ?
                        WelcomeJSON_FR['welcome-cart_2-left-title']
                        : locale == 'ru' ?
                        WelcomeJSON_RU['welcome-cart_2-left-title']
                        : ''
                    }
                    </h4>
                    <p className={style.advantage__column_subtitle}>
                    {
                        locale == 'en' ?
                        WelcomeJSON_EN['welcome-cart_2-left-subTitle']
                        : locale == 'ua' ?
                        WelcomeJSON_UA['welcome-cart_2-left-subTitle'] 
                        : locale == 'es' ?
                        WelcomeJSON_ES['welcome-cart_2-left-subTitle']
                        : locale == 'it' ?
                        WelcomeJSON_IT['welcome-cart_2-left-subTitle']
                        : locale == 'fr' ?
                        WelcomeJSON_FR['welcome-cart_2-left-subTitle']
                        : locale == 'ru' ?
                        WelcomeJSON_RU['welcome-cart_2-left-subTitle']
                        : ''
                    }
                    </p>
                    <ul className={style.advantage__column_list}>
                        { locale == 'ua' ?
                            WelcomeJSON_UA['welcome-cart_2-box_1'].map((i, index) => 
                                <li key={index}>
                                    {i['welcome-cart_2-box_1-text']}
                                </li>
                            )
                            : locale == 'en' ?
                            WelcomeJSON_EN['welcome-cart_2-box_1'].map((i, index) => 
                                <li key={index}>
                                    {i['welcome-cart_2-box_1-text']}
                                </li>
                            )
                            : locale == 'es' ?
                            WelcomeJSON_ES['welcome-cart_2-box_1'].map((i, index) => 
                                <li key={index}>
                                    {i['welcome-cart_2-box_1-text']}
                                </li>
                            )
                            : locale == 'it' ?
                            WelcomeJSON_IT['welcome-cart_2-box_1'].map((i, index) => 
                                <li key={index}>
                                    {i['welcome-cart_2-box_1-text']}
                                </li>
                            )
                            : locale == 'fr' ?
                            WelcomeJSON_FR['welcome-cart_2-box_1'].map((i, index) => 
                                <li key={index}>
                                    {i['welcome-cart_2-box_1-text']}
                                </li>
                            )
                            : locale == 'ru' ?
                            WelcomeJSON_RU['welcome-cart_2-box_1'].map((i, index) => 
                                <li key={index}>
                                    {i['welcome-cart_2-box_1-text']}
                                </li>
                            )
                            : ''
                        }
                    </ul>
                </div>
                <div className={cn(style.advantage__column, isVisible1 === false ? 'slide-on' :'slide-in')}>
                    <h4 className={style.advantage__column_title}>
                    {
                        locale == 'en' ?
                        WelcomeJSON_EN['welcome-cart_2-right-title']
                        : locale == 'ua' ?
                        WelcomeJSON_UA['welcome-cart_2-right-title'] 
                        : locale == 'es' ?
                        WelcomeJSON_ES['welcome-cart_2-right-title']
                        : locale == 'it' ?
                        WelcomeJSON_IT['welcome-cart_2-right-title']
                        : locale == 'fr' ?
                        WelcomeJSON_FR['welcome-cart_2-right-title']
                        : locale == 'ru' ?
                        WelcomeJSON_RU['welcome-cart_2-right-title']
                        : ''
                    }
                    </h4>
                    <p className={style.advantage__column_subtitle}>
                    {
                        locale == 'en' ?
                        WelcomeJSON_EN['welcome-cart_2-right-subTitle']
                        : locale == 'ua' ?
                        WelcomeJSON_UA['welcome-cart_2-right-subTitle'] 
                        : locale == 'es' ?
                        WelcomeJSON_ES['welcome-cart_2-right-subTitle']
                        : locale == 'it' ?
                        WelcomeJSON_IT['welcome-cart_2-right-subTitle']
                        : locale == 'fr' ?
                        WelcomeJSON_FR['welcome-cart_2-right-subTitle']
                        : locale == 'ru' ?
                        WelcomeJSON_RU['welcome-cart_2-right-subTitle']
                        : ''
                    }
                    </p>
                    <ul className={style.advantage__column_list}>
                    { locale == 'ua' ?
                            WelcomeJSON_UA['welcome-cart_2-box_2'].map((i, index) => 
                                <li key={index}>
                                    {i['welcome-cart_2-box_2-text']}
                                </li>
                            )
                            : locale == 'en' ?
                            WelcomeJSON_EN['welcome-cart_2-box_2'].map((i, index) => 
                                <li key={index}>
                                    {i['welcome-cart_2-box_2-text']}
                                </li>
                            )
                            : locale == 'es' ?
                            WelcomeJSON_ES['welcome-cart_2-box_2'].map((i, index) => 
                                <li key={index}>
                                    {i['welcome-cart_2-box_2-text']}
                                </li>
                            )
                            : locale == 'it' ?
                            WelcomeJSON_IT['welcome-cart_2-box_2'].map((i, index) => 
                                <li key={index}>
                                    {i['welcome-cart_2-box_2-text']}
                                </li>
                            )
                            : locale == 'fr' ?
                            WelcomeJSON_FR['welcome-cart_2-box_2'].map((i, index) => 
                                <li key={index}>
                                    {i['welcome-cart_2-box_2-text']}
                                </li>
                            )
                            : locale == 'ru' ?
                            WelcomeJSON_RU['welcome-cart_2-box_2'].map((i, index) => 
                                <li key={index}>
                                    {i['welcome-cart_2-box_2-text']}
                                </li>
                            )
                            : ''
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}