import Link from 'next/link'
import style from './Layout.module.scss'
import LayoutJSON_EN from '../../../../languages/EN/Layout.json';
import LayoutJSON_UA from '../../../../languages/UA/Layout.json';
import LayoutJSON_ES from '../../../../languages/ES/Layout.json';
import LayoutJSON_IT from '../../../../languages/IT/Layout.json';
import LayoutJSON_FR from '../../../../languages/FR/Layout.json';
import LayoutJSON_RU from '../../../../languages/RU/Layout.json';
import { useRouter } from 'next/router'

export const Footer = () => {

    const { locale } = useRouter()

    return(
        <footer className={style.footer}>
            <div className={style.footer__content}>
                <ul className={style.footer__content_list}>
                    <li>
                        <Link className={style.footer__content_list_link} href="">
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
                        <Link className={style.footer__content_list_link} href="">
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
                </ul>
                <div className={style.footer__content_box}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="100px" height="100px" fillRule="nonzero"><g fill="#1fb018" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(5.12,5.12)"><path d="M44,16v8.592l-8,-7.592l-8,7.592v-2.185l-6,6.581v4.012h5l9,-8.324l9,8.324h5v-17zM48,31h-2.24l-9.76,-9l-9.76,9h-2.24v-1.785l2,-2.209v1.994l10,-9.342l10,9.342v-11h2zM22,26.595l6,-6.6v-3.995h-5l-9,9.291l-9,-9.291h-5v17h6v-7.58l7.966,7.58l8.034,-8.605zM13.972,30.342l-9.972,-10.342v11h-2v-13h2.224l9.776,10l9.776,-10h2.224v1.773l-2,2.197v-1.97z"></path></g></g></svg>
                    <Link href='/welcome' className={style.footer__content_box_button}>
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
                </div>
                <ul className={style.footer__content_listIcons}>
                    <li>
                        <Link className={style.footer__content_listIcons_linkIcon} href="">
                            <svg width="2rem" height="2rem" viewBox="0 0 498 498" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M498 249c0 137.52-111.48 249-249 249S0 386.52 0 249 111.48 0 249 0c137.25-.27 248.73 110.77 249 248v1zm-62.2-91.2a164.5 164.5 0 0 1-40.9 11.2c14.8-8.8 25.3-22.6 30.4-39.4a141.54 141.54 0 0 1-44.3 17.3 70.25 70.25 0 0 0-51.3-22.4c-39.1 0-70.3 31.6-70.3 71a72.54 72.54 0 0 0 1.7 16 200.83 200.83 0 0 1-146.4-74.4 76.13 76.13 0 0 0-9.2 35.7 70 70 0 0 0 31.1 58.8 63.53 63.53 0 0 1-31.9-8.8v.7c0 34.5 24.3 62.7 56.7 69.8a66.54 66.54 0 0 1-18.5 2.2 82.43 82.43 0 0 1-13.4-1.2c8.8 28.2 35.3 47.4 65.9 47.9-24.3 19-54.2 32.3-87.8 32.3-5.6 0-11.4-.7-16.5-1.2 31.1 20.2 68.6 31.1 108.2 31.1 130.3 0 201.1-107.7 201.1-201.1v-9.2c14-9.5 25.6-22.4 35.4-36.3z" fill="CurrentColor"></path>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link className={style.footer__content_listIcons_linkIcon} href="">
                            <svg width="2rem" height="2rem" viewBox="0 0 498 498" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M499,250c0,137.9-111.9,249-249,249A248.51,248.51,0,0,1,1,250C1,112.9,112.1,1,250,1,387.1,1,499,112.9,499,250ZM270.7,164.2c0-17.3,3.6-28.2,25.5-28.2H330l2.9-58.8s-17.3-3.4-47.2-3.4c-61,0-87.5,36.7-87.5,78.3v56.4H156.6v62.2h41.6V426.3h72.5V270.7H329l3.9-61.5H270.7v-45h0Z" fill="CurrentColor"></path>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link className={style.footer__content_listIcons_linkIcon} href="">
                            <svg width="2rem" height="2em" viewBox="0 0 498 498" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M249,0C111.5,0,0,114.3,0,255.3,0,368.1,71.3,463.8,170.3,497.5c12.4,2.3,17-5.5,17-12.3,0-6.1-.2-26.2-0.3-47.5-69.2,15.4-83.9-30.1-83.9-30.1-11.3-29.5-27.6-37.3-27.6-37.3-22.6-15.8,1.7-15.5,1.7-15.5,25,1.8,38.2,26.3,38.2,26.3,22.2,39,58.3,27.7,72.5,21.2,2.3-16.5,8.7-27.7,15.8-34.1C148.3,361.7,90.1,339.8,90.1,242c0-27.9,9.7-50.6,25.6-68.5-2.5-6.5-11.1-32.5,2.5-67.6,0,0,20.9-6.9,68.5,26.2a230,230,0,0,1,124.6,0c47.5-33.1,68.4-26.2,68.4-26.2,13.6,35.2,5,61.1,2.5,67.6,16,17.9,25.6,40.6,25.6,68.5,0,98.1-58.2,119.7-113.7,126,9,7.9,16.9,23.4,16.9,47.2,0,34.1-.3,61.6-0.3,70.1,0,6.8,4.5,14.7,17.1,12.2C426.7,463.7,498,368,498,255.3,498,114.3,386.5,0,249,0Z" fill="CurrentColor"></path>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link className={style.footer__content_listIcons_linkIcon} href="">
                            <svg width="2rem" height="2rem" viewBox="0 0 498 498" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M498,249c0,137.52-111.48,249-249,249S0,386.52,0,249,111.48,0,249,0C386.25-.27,497.73,110.77,498,248Q498,248.51,498,249ZM186.8,129.6c-0.5-20.7-16-36.2-41.6-36.2-24.8,0-41.3,15.6-41.3,36.2,0,20.2,16,36.5,40.9,36.5h0.5c25.4,0,41.5-16.3,41.5-36.5h0Zm-10.5,67.6H114V373.5h62.2V197.2h0.1Zm228.3,82.9c0-57.1-28.2-93.4-72.7-93.4-25.3,0-43.8,15.1-51.8,37.4l-2.2-27H216.1c0.5,6.8,1.7,41.3,1.7,41.3v135H280V280c0-25.3,11.4-41.6,30.6-41.6,19,0,31.6,10,31.6,41.6v93.4h62.2V280.1h0.2Z" fill="CurrentColor"></path>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link className={style.footer__content_listIcons_linkIcon} href="">
                        <svg width="2rem" height="2rem" viewBox="0 0 498 498" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M499,250c0,137.4-111.6,249-249,249S1,387.4,1,250S112.6,1,250,1S499,112.6,499,250z M395.2,146.2c0-22.9-18.5-41.3-41.3-41.3H146.2c-22.9,0-41.3,18.5-41.3,41.3v207.7c0,22.9,18.5,41.3,41.3,41.3h207.7c22.9,0,41.3-18.5,41.3-41.3V146.2z M332.9,250c0,45.7-37,82.9-82.9,82.9s-82.9-37.2-82.9-82.9c0-7.1,0.7-14.1,2.4-20.7H136v124.5c0,5.6,4.6,10.2,10.2,10.2h207.7c5.6,0,10.2-4.6,10.2-10.2V229.3h-33.6C332.2,235.9,332.9,242.9,332.9,250z M250,301.8c28.7,0,51.8-23.1,51.8-51.8s-23.1-51.8-51.8-51.8s-51.8,23.1-51.8,51.8S221.3,301.8,250,301.8z M353.8,135.9h-31.1c-5.8,0-10.5,4.6-10.5,10.2v31.1c0,5.8,4.6,10.5,10.5,10.5h31.1c5.6,0,10.2-4.6,10.2-10.5v-31.1C364,140.6,359.4,135.9,353.8,135.9z" fill="currentColor" />
                        </svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}