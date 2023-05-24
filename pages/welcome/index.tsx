import { Welcome } from "@/styles/src/components/Welcome";
import Head from "next/head";
import { useRouter } from 'next/router'

export default function WelcomePage(){

    const { locale } = useRouter()
    
    return(
        <>
            <Head>
                <title>{locale == 'uk' ? 'Запрошуємо до співпраці!'
                    : locale == 'en' ? 'We invite you to collaborate!'
                    : locale == 'fr' ? 'Nous vous invitons à collaborer!'
                    : locale == 'ru' ? 'Приглашаем к сотрудничеству!'
                    : locale == 'es' ? '¡Te invitamos a colaborar!'
                    : locale == 'it' ? 'Ti invitiamo a collaborare!'
                    : ''}</title>
            </Head>
            <Welcome />
        </>
    )
}