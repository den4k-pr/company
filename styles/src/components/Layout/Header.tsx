import Link from 'next/link'
import style from './Layout.module.scss'
import cn from 'classnames'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import React from 'react';
import LayoutJSON_EN from '../../../../languages/EN/Layout.json';
import LayoutJSON_UA from '../../../../languages/UA/Layout.json';
import LayoutJSON_ES from '../../../../languages/ES/Layout.json';
import LayoutJSON_IT from '../../../../languages/IT/Layout.json';
import LayoutJSON_FR from '../../../../languages/FR/Layout.json';
import LayoutJSON_RU from '../../../../languages/RU/Layout.json';

const arrLang = ['English','Russian', 'Ukrainian', 'Spanish', 'Italian', 'French', ]

export const Header = () => {

    const [burder, setBurger] = useState(false)
    const [langBody, setLangBody] = useState(false)

    const [isScrolled, setIsScrolled] = useState(false);

    const [scrollProgress, setScrollProgress] = useState(0);
    const router = useRouter();

    const handleScroll = () => {
        const scrollY = window.scrollY || window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollY / documentHeight) * 100;
        setScrollProgress(progress);
    };

    useEffect(() => {
        const handleRouteChange = () => {
        setScrollProgress(0);
        };

        router.events.on('routeChangeStart', handleRouteChange);
        return () => {
        router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const { locale, locales, push } = useRouter()

    const handleClick = (l:any) => () => {
        push('/', undefined, { locale: l })
    }

    return(
        <header className={style.header}>
            {langBody && 
                <div onClick={() => setLangBody(false)} className={style.header__chooseLang}>
                    <div onClick={(e) => e.stopPropagation()} className={style.header__chooseLang__content}>
                        <h3 className={style.header__chooseLang__content_title}>Виберіть мову</h3>
                        <div className={style.header__chooseLang__content_box}>
                            {locales && locales.map((l, index) => 
                                <Link className={style.header__chooseLang__content_box_link} href={''} locale={l} onClick={() => (handleClick(l), setLangBody(false))} key={l}>{arrLang[index]} / {l}</Link>
                            )}
                        </div>
                    </div>
                </div>
            }
            <div id="myElement" className={cn(style.header__content, 'header_effect', isScrolled === false ? '' : 'header__headerActive')}>
                <Link href='/' className={style.header__content_logo}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="70px" height="70px" fillRule="nonzero"><g fill="#C0B7E8" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(5.12,5.12)"><path d="M44,16v8.592l-8,-7.592l-8,7.592v-2.185l-6,6.581v4.012h5l9,-8.324l9,8.324h5v-17zM48,31h-2.24l-9.76,-9l-9.76,9h-2.24v-1.785l2,-2.209v1.994l10,-9.342l10,9.342v-11h2zM22,26.595l6,-6.6v-3.995h-5l-9,9.291l-9,-9.291h-5v17h6v-7.58l7.966,7.58l8.034,-8.605zM13.972,30.342l-9.972,-10.342v11h-2v-13h2.224l9.776,10l9.776,-10h2.224v1.773l-2,2.197v-1.97z"></path></g></g></svg>
                </Link>
                <ul className={cn(style.header__content_list, burder && style.header__content_listActive)}>
                    <li>
                        <Link onClick={() => setBurger(!burder)} className={style.header__content_list_link} href='/'>
                            {
                                locale == 'ua' ?
                                LayoutJSON_UA['header-list-link_1']
                                : locale == 'en' ?
                                LayoutJSON_EN['header-list-link_1'] 
                                : locale == 'es' ?
                                LayoutJSON_ES['header-list-link_1']
                                : locale == 'it' ?
                                LayoutJSON_IT['header-list-link_1']
                                : locale == 'fr' ?
                                LayoutJSON_FR['header-list-link_1']
                                : locale == 'ru' ?
                                LayoutJSON_RU['header-list-link_1']
                                : ''
                            }
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => setBurger(!burder)} className={style.header__content_list_link} href=''>
                            {
                                locale == 'ua' ?
                                LayoutJSON_UA['header-list-link_2']
                                : locale == 'en' ?
                                LayoutJSON_EN['header-list-link_2'] 
                                : locale == 'es' ?
                                LayoutJSON_ES['header-list-link_2']
                                : locale == 'it' ?
                                LayoutJSON_IT['header-list-link_2']
                                : locale == 'fr' ?
                                LayoutJSON_FR['header-list-link_2']
                                : locale == 'ru' ?
                                LayoutJSON_RU['header-list-link_2']
                                : ''
                            }
                        </Link>
                    </li>
                    <Link onClick={() => setBurger(!burder)} href='/welcome' className={style.header__content_box_ButtonNew}>
                            {
                                locale == 'ua' ?
                                LayoutJSON_UA['header-button']
                                : locale == 'en' ?
                                LayoutJSON_EN['header-button'] 
                                : locale == 'es' ?
                                LayoutJSON_ES['header-button']
                                : locale == 'it' ?
                                LayoutJSON_IT['header-button']
                                : locale == 'fr' ?
                                LayoutJSON_FR['header-button']
                                : locale == 'ru' ?
                                LayoutJSON_RU['header-button']
                                : ''
                            }
                    </Link>
                </ul>

                <nav onClick={() => setLangBody(true)} className={style.header__content_lang}>
                    <Image className={style.header__content_lang_img} width={26} height={22} alt='' src={
                        locale == 'ua' ? "/lang/ukrain.png" : locale == 'en' ? '/lang/usa.jpg' : locale == 'it' ? '/lang/italy.png' : locale == 'es' ? '/lang/hishpan.png' : locale == 'fr' ? '/lang/franch.jpg' : locale == 'ru' ? '/lang/gavno.png' : ''
                    } />
                    <p className={style.header__content_lang_name}>{
                        locale == 'ua' ? "UA" : locale == 'en' ? 'EN' : locale == 'it' ? 'IT' : locale == 'es' ? 'ES' : locale == 'fr' ? 'FR' : locale == 'ru' ? 'RU' : ''
                    }</p>
                </nav>

                <Link href='/welcome' className={style.header__content_box_Button}>
                    {
                        locale == 'ua' ?
                        LayoutJSON_UA['header-button']
                        : locale == 'en' ?
                        LayoutJSON_EN['header-button'] 
                        : locale == 'es' ?
                        LayoutJSON_ES['header-button']
                        : locale == 'it' ?
                        LayoutJSON_IT['header-button']
                        : locale == 'fr' ?
                        LayoutJSON_FR['header-button']
                        : locale == 'ru' ?
                        LayoutJSON_RU['header-button']
                        : ''
                    }
                </Link>
                <nav onClick={() => setBurger(!burder)} className={cn(style.header__content_burger, burder && style.header__content_burgerActive)}>
                    <span className={style.header__content_burger_line}></span>
                    <span className={style.header__content_burger_line}></span>
                    <span className={style.header__content_burger_line}></span>
                </nav>
            </div>
            <div
                style={{
                    position: 'fixed',
                    top: 67,
                    left: 0,
                    right: 0,
                    zIndex: 3,
                    height: '5px',
                    backgroundColor: '#C0B7E8',
                    width: `${scrollProgress}%`,
                }}
            />
        </header>
    )
}