import cn from 'classnames'
import style from './Form.module.scss'

import ContactJSON_EN from '../../../../../languages/EN/Contact.json';
import ContactJSON_UA from '../../../../../languages/UA/Contact.json';
import ContactJSON_ES from '../../../../../languages/ES/Contact.json';
import ContactJSON_IT from '../../../../../languages/IT/Contact.json';
import ContactJSON_FR from '../../../../../languages/FR/Contact.json';
import ContactJSON_RU from '../../../../../languages/RU/Contact.json';
import { useRouter } from 'next/router'
import { useState } from 'react';

export const Form = () => {
    const [name, setName] = useState('') 
    const [lastName, setLastName] = useState('') 
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [company, setCompany] = useState('')
    const [message, setMessage] = useState('') 
    const [submitted, setSubmitted] = useState(false)

    const { locale } = useRouter()

    const handleSubmit = (e:any) => { 
        e.preventDefault()
        console.log('Sending')
        let data = {
            name,
            lastName,
            email,
            phone,
            company,
            message
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setLastName('')
                setEmail('')
                setPhone('')
                setCompany('')
                setMessage('')
            }
        })
    }
      

    return(
        <section className={cn(style.form, "container")}>
            <div className={style.form__info}>
                <h2 className='main_title'>
                    {
                        locale == 'en' ?
                        ContactJSON_EN['contact-title']
                        : locale == 'ua' ?
                        ContactJSON_UA['contact-title'] 
                        : locale == 'es' ?
                        ContactJSON_ES['contact-title']
                        : locale == 'it' ?
                        ContactJSON_IT['contact-title']
                        : locale == 'fr' ?
                        ContactJSON_FR['contact-title']
                        : locale == 'ru' ?
                        ContactJSON_RU['contact-title']
                        : ''
                    }
                </h2>
                <p className='main_subTitle'>
                    {
                        locale == 'en' ?
                        ContactJSON_EN['contact-subTitlle']
                        : locale == 'ua' ?
                        ContactJSON_UA['contact-subTitlle'] 
                        : locale == 'es' ?
                        ContactJSON_ES['contact-subTitlle']
                        : locale == 'it' ?
                        ContactJSON_IT['contact-subTitlle']
                        : locale == 'fr' ?
                        ContactJSON_FR['contact-subTitlle']
                        : locale == 'ru' ?
                        ContactJSON_RU['contact-subTitlle']
                        : ''
                    }
                </p>
            </div>
            <form className={style.form__form}>
                <div className={style.form_box} tabIndex={0}>
                    <label htmlFor="name">
                    {
                        locale == 'en' ?
                        ContactJSON_EN['contact-form-label_1']
                        : locale == 'ua' ?
                        ContactJSON_UA['contact-form-label_1'] 
                        : locale == 'es' ?
                        ContactJSON_ES['contact-form-label_1']
                        : locale == 'it' ?
                        ContactJSON_IT['contact-form-label_1']
                        : locale == 'fr' ?
                        ContactJSON_FR['contact-form-label_1']
                        : locale == 'ru' ?
                        ContactJSON_RU['contact-form-label_1']
                        : ''
                    }
                    </label>
                    <input onChange={(e)=>{setName(e.target.value)}} name="name" type="text" id="name" required/>
                </div>

                <div className={style.form_box} tabIndex={0}>
                    <label htmlFor="surName">
                    {
                        locale == 'en' ?
                        ContactJSON_EN['contact-form-label_2']
                        : locale == 'ua' ?
                        ContactJSON_UA['contact-form-label_2'] 
                        : locale == 'es' ?
                        ContactJSON_ES['contact-form-label_2']
                        : locale == 'it' ?
                        ContactJSON_IT['contact-form-label_2']
                        : locale == 'fr' ?
                        ContactJSON_FR['contact-form-label_2']
                        : locale == 'ru' ?
                        ContactJSON_RU['contact-form-label_2']
                        : ''
                    }
                    </label>
                    <input onChange={(e)=>{setLastName(e.target.value)}} name="lastName" type="text" id="surName" required/>
                </div>

                <div className={style.form_box} tabIndex={0}>
                    <label htmlFor="email">
                    {
                        locale == 'en' ?
                        ContactJSON_EN['contact-form-label_3']
                        : locale == 'ua' ?
                        ContactJSON_UA['contact-form-label_3'] 
                        : locale == 'es' ?
                        ContactJSON_ES['contact-form-label_3']
                        : locale == 'it' ?
                        ContactJSON_IT['contact-form-label_3']
                        : locale == 'fr' ?
                        ContactJSON_FR['contact-form-label_3']
                        : locale == 'ru' ?
                        ContactJSON_RU['contact-form-label_3']
                        : ''
                    }
                    </label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} name="email" type="text" id="email" required/>
                </div>

                <div className={style.form_box} tabIndex={0}>
                    <label htmlFor="tel">
                    {
                        locale == 'en' ?
                        ContactJSON_EN['contact-form-label_4']
                        : locale == 'ua' ?
                        ContactJSON_UA['contact-form-label_4'] 
                        : locale == 'es' ?
                        ContactJSON_ES['contact-form-label_4']
                        : locale == 'it' ?
                        ContactJSON_IT['contact-form-label_4']
                        : locale == 'fr' ?
                        ContactJSON_FR['contact-form-label_4']
                        : locale == 'ru' ?
                        ContactJSON_RU['contact-form-label_4']
                        : ''
                    }
                    </label>
                    <input onChange={(e)=>{setPhone(e.target.value)}} name="phone" type="text" id="tel" required/>                   
                </div>

                <div className={style.form_box} tabIndex={0}>
                    <label htmlFor="company">
                    {
                        locale == 'en' ?
                        ContactJSON_EN['contact-form-label_5']
                        : locale == 'ua' ?
                        ContactJSON_UA['contact-form-label_5'] 
                        : locale == 'es' ?
                        ContactJSON_ES['contact-form-label_5']
                        : locale == 'it' ?
                        ContactJSON_IT['contact-form-label_5']
                        : locale == 'fr' ?
                        ContactJSON_FR['contact-form-label_5']
                        : locale == 'ru' ?
                        ContactJSON_RU['contact-form-label_5']
                        : ''
                    }
                    </label>
                    <input onChange={(e)=>{setCompany(e.target.value)}} name="company" type="text" id="company" required/>
                </div>
                <div className={style.form_box} tabIndex={0}>
                    <label htmlFor="desc">
                    {
                        locale == 'en' ?
                        ContactJSON_EN['contact-form-label_6']
                        : locale == 'ua' ?
                        ContactJSON_UA['contact-form-label_6'] 
                        : locale == 'es' ?
                        ContactJSON_ES['contact-form-label_6']
                        : locale == 'it' ?
                        ContactJSON_IT['contact-form-label_6']
                        : locale == 'fr' ?
                        ContactJSON_FR['contact-form-label_6']
                        : locale == 'ru' ?
                        ContactJSON_RU['contact-form-label_6']
                        : ''
                    }
                    </label>
                    <textarea onChange={(e)=>{setMessage(e.target.value)}} name="message" id='desc' required></textarea>
                </div>

                <button onClick={(e)=>{handleSubmit(e)}} type='submit'>
                {
                        locale == 'en' ?
                        ContactJSON_EN['contact-form-button']
                        : locale == 'ua' ?
                        ContactJSON_UA['contact-form-button'] 
                        : locale == 'es' ?
                        ContactJSON_ES['contact-form-button']
                        : locale == 'it' ?
                        ContactJSON_IT['contact-form-button']
                        : locale == 'fr' ?
                        ContactJSON_FR['contact-form-button']
                        : locale == 'ru' ?
                        ContactJSON_RU['contact-form-button']
                        : ''
                    }
                </button>
            </form>
        </section>
    )
}