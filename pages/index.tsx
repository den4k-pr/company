import { MainPage } from "@/styles/src/components/Main";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from 'next/router'

export default function Home() {

  const { locale } = useRouter()

  return(
    <>
      <Head>
        <title>{locale == 'uk' ? 'Головна'
      : locale == 'en' ? 'Main'
      : locale == 'fr' ? 'Principal'
      : locale == 'ru' ? 'Главная'
      : locale == 'es' ? 'Principal'
      : locale == 'it' ? 'Principale'
      : ''}</title>
      </Head>
      <MainPage />
    </>
  )
}
