import { useRouter } from 'next/router'
import { LinkBox } from "../linkBox/LinkBox"
import { Cart_1 } from "./cart_1/Cart_1"
import { Cart_2 } from "./cart_2/Cart_2"
import { DevelopmentForm } from "./developmentForm/DevelopmentForm"


export const Development = () => {

    const { locale } = useRouter()

    return(
        <>
            <Cart_1 />
            <Cart_2 />
            <DevelopmentForm/>
            <LinkBox
                text={locale == 'ua' ? 'Чи може спеціальне програмне забезпечення вивести ваш бізнес на новий рівень?'
                    : locale == 'en' ? 'Can specialized software take your business to the next level?'
                    : locale == 'fr' ? 'Est-ce que des logiciels spécialisés peuvent amener votre entreprise au niveau supérieur ?'
                    : locale == 'ru' ? 'Может ли специальное программное обеспечение вывести ваш бизнес на новый уровень?'
                    : locale == 'es' ? '¿Puede el software especializado llevar su negocio al siguiente nivel?'
                    : locale == 'it' ? 'Il software specializzato può portare la tua attività al livello successivo?'
                    : ''}
                title={locale == 'ua' ? 'ПЕРЕВІРТЕСЬ, ЯК (Назва компанії) МОЖЕ ДОПОМОГТИ ВАМ.'
                    : locale == 'en' ? 'CHECK HOW (Company Name) CAN HELP YOU.'
                    : locale == 'fr' ? `VÉRIFIEZ COMMENT (Nom de l'entreprise) PEUT VOUS AIDER.`
                    : locale == 'ru' ? 'ПРОВЕРЬТЕ, КАК (Название компании) МОЖЕТ ВАМ ПОМОЧЬ.'
                    : locale == 'es' ? 'COMPRUEBE CÓMO (Nombre de la empresa) PUEDE AYUDARLE.'
                    : locale == 'it' ? `VERIFICA COME (Nome dell'azienda) POSSA AIUTARTI.`
                    : ''}
                button={
                    locale == 'ua' ? 'Дізнайтеся про наші послуги'
                    : locale == 'en' ? 'Learn about our services'
                    : locale == 'fr' ? 'Découvrez nos services'
                    : locale == 'ru' ? 'Узнайте о наших услугах'
                    : locale == 'es' ? 'Conozca nuestros servicios'
                    : locale == 'it' ? 'Scopri i nostri servizi'
                    : ''}
                backColor='radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%)'
                color='fff'
                image='box_img.jpg'
                margin='0'
                href='/'
            />
        </>
    )
}