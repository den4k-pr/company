import { useRouter } from 'next/router'
import { LinkBox } from "../linkBox/LinkBox"
import { CustomMain } from "./customMain/CustomMain"
import { HeaderMain } from "./headerMain/HeaderMain"
import { PoslMain } from "./poslMain/PoslMain"

export const MainPage = () => {

    const { locale } = useRouter()

    return (
        <>
            <HeaderMain />
            <CustomMain />
            <PoslMain />
            <LinkBox 
                text={locale == 'ua' ? `У нас є досвід роботи з багатьма фреймворками, мовами та інструментами, і ми можемо зібрати набір, який чудово підходить для вашого проекту. Це кілька, якими ми часто користуємося.`
                : locale == 'en' ? `We have experience working with many frameworks, languages, and tools, and we can put together a set that is perfect for your project. Here are a few we often use.`
                : locale == 'fr' ? `Nous avons de l'expérience de travail avec de nombreux frameworks, langages et outils, et nous pouvons mettre en place un ensemble qui est parfait pour votre projet. En voici quelques-uns que nous utilisons souvent.`
                : locale == 'ru' ? `У нас есть опыт работы с многими фреймворками, языками и инструментами, и мы можем собрать набор, который отлично подходит для вашего проекта. Вот несколько, которыми мы часто пользуемся.`
                : locale == 'es' ? `Tenemos experiencia trabajando con muchos marcos de trabajo, lenguajes y herramientas, y podemos armar un conjunto que sea perfecto para su proyecto. Aquí hay algunos que usamos con frecuencia.`
                : locale == 'it' ? `Abbiamo esperienza nel lavorare con molti framework, linguaggi e strumenti e possiamo mettere insieme un set perfetto per il tuo progetto. Ecco alcuni che usiamo spesso.`
                : ''}
                title={locale == 'ua' ? 'Набір технічних навичок'
                    : locale == 'en' ? 'Technical Skill Set'
                    : locale == 'fr' ? 'Ensemble de compétences techniques'
                    : locale == 'ru' ? 'Набор технических навыков'
                    : locale == 'es' ? 'Conjunto de habilidades técnicas'
                    : locale == 'it' ? 'Set di competenze tecniche'
                    : ''}
                button={locale == 'ua' ? 'Перейти до портфоліо'
                    : locale == 'en' ? 'Go to portfolio'
                    : locale == 'fr' ? 'Aller au portfolio'
                    : locale == 'ru' ? 'Перейти к портфолио'
                    : locale == 'es' ? 'Ir al portafolio'
                    : locale == 'it' ? 'Vai al portfolio'
                    : ''}
                backColor='radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%)'
                color="fff"
                image='specyf.png'
                margin='30px 0'
                href=''
            />
        </>
    )
}