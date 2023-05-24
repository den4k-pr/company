import { FormContent } from "@/styles/src/components/Contact";
import Head from "next/head";
import { useRouter } from 'next/router'

export default function Contact() {

    const { locale } = useRouter()

    return(
        <>
            <Head>
                <title>{locale == 'uk' ? 'Контакт'
                : locale == 'en' ? 'Contact'
                : locale == 'fr' ? 'Contact'
                : locale == 'ru' ? 'Контакт'
                : locale == 'es' ? 'Contacto'
                : locale == 'it' ? 'Contatto'
                : ''}</title>
            </Head>
            <FormContent />
        </>
    )
}