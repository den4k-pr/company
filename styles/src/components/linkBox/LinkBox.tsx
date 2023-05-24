import { FC } from 'react'
import style from './LinkBox.module.scss'
import Link from 'next/link'

export interface BoxLink {
    text: string,
    title: string,
    button: string,
    image: string,
    backColor: string,
    color: string,
    margin: string,
    href: string
}

export const LinkBox: FC<BoxLink> = ({ text, title, button, image, backColor, color, margin, href }) => {
    return(
        <section style={{background: `${backColor}`}} className={style.linkBox}>
            <div className="container">
                <div className={style.linkBox__content}>
                    <div style={{color: `#${color}`}} className={style.linkBox__content_left}>
                        <h2>{title}</h2>
                        <p>{text}</p>
                        <Link className={style.linkBox__content_left_button} href={href}>{button}</Link>
                    </div>
                    <div style={{backgroundImage: `url(/${image})`, margin: margin}} className={style.linkBox__content_right}>
                    </div>
                </div>
            </div>
        </section>
    )
}