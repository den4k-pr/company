import cn from 'classnames'
import style from './Cart_2.module.scss'
import Image from 'next/image'

import WebDevJSON_EN from '../../../../../languages/EN/WebDev.json';
import WebDevJSON_UA from '../../../../../languages/UA/WebDev.json';
import WebDevJSON_ES from '../../../../../languages/ES/WebDev.json';
import WebDevJSON_IT from '../../../../../languages/IT/WebDev.json';
import WebDevJSON_FR from '../../../../../languages/FR/WebDev.json';
import WebDevJSON_RU from '../../../../../languages/RU/WebDev.json';
import { useRouter } from 'next/router'

export const Cart_2 = () => {

    const { locale } = useRouter()

    return(
        <section className={cn(style.cart_2, "container")}>
            <div className="main__box">
                <h3 className="main_title">
                    {
                        locale == 'ua' ?
                        WebDevJSON_UA['webDev-cart_2-title']
                        : locale == 'en' ?
                        WebDevJSON_EN['webDev-cart_2-title'] 
                        : locale == 'es' ?
                        WebDevJSON_ES['webDev-cart_2-title']
                        : locale == 'it' ?
                        WebDevJSON_IT['webDev-cart_2-title']
                        : locale == 'fr' ?
                        WebDevJSON_FR['webDev-cart_2-title']
                        : locale == 'ru' ?
                        WebDevJSON_RU['webDev-cart_2-title']
                        : ''
                    }
                </h3>
                <p className="main_subTitle">
                    {
                        locale == 'ua' ?
                        WebDevJSON_UA['webDev-cart_2-subTitle']
                        : locale == 'en' ?
                        WebDevJSON_EN['webDev-cart_2-subTitle'] 
                        : locale == 'es' ?
                        WebDevJSON_ES['webDev-cart_2-subTitle']
                        : locale == 'it' ?
                        WebDevJSON_IT['webDev-cart_2-subTitle']
                        : locale == 'fr' ?
                        WebDevJSON_FR['webDev-cart_2-subTitle']
                        : locale == 'ru' ?
                        WebDevJSON_RU['webDev-cart_2-subTitle']
                        : ''
                    }
                </p>
            </div>
            <div className={style.cart_2__columns}>
                {
                    locale == 'it' ?
                    WebDevJSON_IT['webDev-cart_2-box'].map((i, index) => 
                        <div key={index} className={style.cart_2__column}>
                            <Image className={style.cart_2__column_image} src={i['webDev-cart_2-box-img']} width={68} height={68} alt='' />
                            <h4 className={style.cart_2__column_title}>{i['webDev-cart_2-box-title']}</h4>
                            <p className={style.cart_2__column_text}>{i['webDev-cart_2-box-text']}</p>
                        </div>
                    )
                    : locale == 'ua' ?
                    WebDevJSON_UA['webDev-cart_2-box'].map((i, index) => 
                        <div key={index} className={style.cart_2__column}>
                            <Image className={style.cart_2__column_image} src={i['webDev-cart_2-box-img']} width={68} height={68} alt='' />
                            <h4 className={style.cart_2__column_title}>{i['webDev-cart_2-box-title']}</h4>
                            <p className={style.cart_2__column_text}>{i['webDev-cart_2-box-text']}</p>
                        </div>
                    )
                    : locale == 'en' ?
                    WebDevJSON_EN['webDev-cart_2-box'].map((i, index) => 
                        <div key={index} className={style.cart_2__column}>
                            <Image className={style.cart_2__column_image} src={i['webDev-cart_2-box-img']} width={68} height={68} alt='' />
                            <h4 className={style.cart_2__column_title}>{i['webDev-cart_2-box-title']}</h4>
                            <p className={style.cart_2__column_text}>{i['webDev-cart_2-box-text']}</p>
                        </div>
                    )
                    : locale == 'es' ?
                    WebDevJSON_ES['webDev-cart_2-box'].map((i, index) => 
                        <div key={index} className={style.cart_2__column}>
                            <Image className={style.cart_2__column_image} src={i['webDev-cart_2-box-img']} width={68} height={68} alt='' />
                            <h4 className={style.cart_2__column_title}>{i['webDev-cart_2-box-title']}</h4>
                            <p className={style.cart_2__column_text}>{i['webDev-cart_2-box-text']}</p>
                        </div>
                    )
                    : locale == 'fr' ?
                    WebDevJSON_FR['webDev-cart_2-box'].map((i, index) => 
                        <div key={index} className={style.cart_2__column}>
                            <Image className={style.cart_2__column_image} src={i['webDev-cart_2-box-img']} width={68} height={68} alt='' />
                            <h4 className={style.cart_2__column_title}>{i['webDev-cart_2-box-title']}</h4>
                            <p className={style.cart_2__column_text}>{i['webDev-cart_2-box-text']}</p>
                        </div>
                    )
                    : locale == 'ru' ?
                    WebDevJSON_RU['webDev-cart_2-box'].map((i, index) => 
                        <div key={index} className={style.cart_2__column}>
                            <Image className={style.cart_2__column_image} src={i['webDev-cart_2-box-img']} width={68} height={68} alt='' />
                            <h4 className={style.cart_2__column_title}>{i['webDev-cart_2-box-title']}</h4>
                            <p className={style.cart_2__column_text}>{i['webDev-cart_2-box-text']}</p>
                        </div>
                    )
                    : ''
                }
            </div>
        </section>
    )
}