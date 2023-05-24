import { useRef } from 'react';
import style from './PoslMain.module.scss'
import cn from 'classnames'
import useOnScreen from '../customMain/Animation';

import MainJSON_EN from '../../../../../languages/EN/Main.json';
import MainJSON_UA from '../../../../../languages/UA/Main.json';
import MainJSON_ES from '../../../../../languages/ES/Main.json';
import MainJSON_IT from '../../../../../languages/IT/Main.json';
import MainJSON_FR from '../../../../../languages/FR/Main.json';
import MainJSON_RU from '../../../../../languages/RU/Main.json';
import { useRouter } from 'next/router'

export const PoslMain = () => {

    const { locale } = useRouter()

    const ref1 = useRef<HTMLDivElement>(null);

    const isVisible1 = useOnScreen(ref1);


    return(
        <section className={cn(style.posl, 'container')}>
            <div ref={ref1} className='main__box'>
                <h2 className='main_title'>
                    {
                        locale == 'ua' ?
                        MainJSON_UA['main-cart3-title']
                        : locale == 'en' ?
                        MainJSON_EN['main-cart3-title'] 
                        : locale == 'es' ?
                        MainJSON_ES['main-cart3-title']
                        : locale == 'it' ?
                        MainJSON_IT['main-cart3-title']
                        : locale == 'fr' ?
                        MainJSON_FR['main-cart3-title']
                        : locale == 'ru' ?
                        MainJSON_RU['main-cart3-title']
                        : ''
                    }
                </h2>
                <p className={style.posl__content_subTitle}>
                {
                        locale == 'ua' ?
                        MainJSON_UA['main-cart3-subTitle']
                        : locale == 'en' ?
                        MainJSON_EN['main-cart3-subTitle'] 
                        : locale == 'es' ?
                        MainJSON_ES['main-cart3-subTitle']
                        : locale == 'it' ?
                        MainJSON_IT['main-cart3-subTitle']
                        : locale == 'fr' ?
                        MainJSON_FR['main-cart3-subTitle']
                        : locale == 'ru' ?
                        MainJSON_RU['main-cart3-subTitle']
                        : ''
                    }
                </p>
                <p className='main_subTitle'>
                    {
                        locale == 'ua' ?
                        MainJSON_UA['main-cart3-text']
                        : locale == 'en' ?
                        MainJSON_EN['main-cart3-text'] 
                        : locale == 'es' ?
                        MainJSON_ES['main-cart3-text']
                        : locale == 'it' ?
                        MainJSON_IT['main-cart3-text']
                        : locale == 'fr' ?
                        MainJSON_FR['main-cart3-text']
                        : locale == 'ru' ?
                        MainJSON_RU['main-cart3-text']
                        : ''
                    }
                </p>
            </div>
            <div className={style.posl__row}>

                { locale == 'ua' ?
                    MainJSON_UA['main-cart3-box'].map((i, index) => 
                        <div key={index} className={cn(style.posl__row__column, isVisible1 === false ? 'slide-on' :'slide-in')}>
                        <h3 className={style.posl__row__column_title}>
                            {i['main-cart3-box-title']}
                        </h3>
                        <p className={style.posl__row__column_text}>
                            {i['main-cart3-box-text']}
                        </p>
                    </div>
                    )
                    : locale == 'en' ?
                    MainJSON_EN['main-cart3-box'].map((i, index) => 
                        <div key={index} className={cn(style.posl__row__column, isVisible1 === false ? 'slide-on' :'slide-in')}>
                        <h3 className={style.posl__row__column_title}>
                            {i['main-cart3-box-title']}
                        </h3>
                        <p className={style.posl__row__column_text}>
                            {i['main-cart3-box-text']}
                        </p>
                    </div>
                    )
                    : locale == 'es' ?
                    MainJSON_ES['main-cart3-box'].map((i, index) => 
                        <div key={index} className={cn(style.posl__row__column, isVisible1 === false ? 'slide-on' :'slide-in')}>
                        <h3 className={style.posl__row__column_title}>
                            {i['main-cart3-box-title']}
                        </h3>
                        <p className={style.posl__row__column_text}>
                            {i['main-cart3-box-text']}
                        </p>
                    </div>
                    )
                    : locale == 'it' ?
                    MainJSON_IT['main-cart3-box'].map((i, index) => 
                        <div key={index} className={cn(style.posl__row__column, isVisible1 === false ? 'slide-on' :'slide-in')}>
                        <h3 className={style.posl__row__column_title}>
                            {i['main-cart3-box-title']}
                        </h3>
                        <p className={style.posl__row__column_text}>
                            {i['main-cart3-box-text']}
                        </p>
                    </div>
                    )
                    : locale == 'fr' ?
                    MainJSON_FR['main-cart3-box'].map((i, index) => 
                        <div key={index} className={cn(style.posl__row__column, isVisible1 === false ? 'slide-on' :'slide-in')}>
                        <h3 className={style.posl__row__column_title}>
                            {i['main-cart3-box-title']}
                        </h3>
                        <p className={style.posl__row__column_text}>
                            {i['main-cart3-box-text']}
                        </p>
                    </div>
                    )
                    : locale == 'ru' ?
                    MainJSON_RU['main-cart3-box'].map((i, index) => 
                        <div key={index} className={cn(style.posl__row__column, isVisible1 === false ? 'slide-on' :'slide-in')}>
                        <h3 className={style.posl__row__column_title}>
                            {i['main-cart3-box-title']}
                        </h3>
                        <p className={style.posl__row__column_text}>
                            {i['main-cart3-box-text']}
                        </p>
                    </div>
                    )
                    : ''
                }
            </div>
        </section>
    )
}