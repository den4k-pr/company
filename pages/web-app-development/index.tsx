import { Development } from "@/styles/src/components/Development";
import Head from "next/head";
import { useRouter } from 'next/router'

export default function WebAppDevelopmentPage(){

    const { locale } = useRouter()

    return(
        <>
            <Head>
                <title>{locale == 'uk' ? 'Дизайн і розробка веб-додатків'
                : locale == 'en' ? 'Web application design and development'
                : locale == 'fr' ? 'Conception et développement d applications web'
                : locale == 'ru' ? 'Дизайн и разработка веб-приложений'
                : locale == 'es' ? 'Diseño y desarrollo de aplicaciones web'
                : locale == 'it' ? 'Progettazione e sviluppo di applicazioni web'
                : ''}</title>
            </Head>
            <Development />
        </>
    )
}