import Link from "next/link";
import {useEffect, useState} from "react";
import Head from "next/head";
import PageTitle from "../../src/components/PageTitle";

export async function getStaticProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(FAQ_API_URL).then((respo) => {
        return respo.json()
    })
        .then((resposta) => {
            return resposta
        })
    return {
        props: {
            faq
        },
    }
}
export default function FAQPage({faq}) {

    // const [faq, setFaq] = useState([])
    //
    // useEffect(() => {
    //
    // }, [])

    return (
        <div>
            <PageTitle>FAQ - Alura Cases Campanha</PageTitle>
            <h1>Alura Cases - Página de Perguntas FAQ</h1>
            <Link href='/'>
                Ir para Home
            </Link>
            <ul>
                {faq.map(({answer, question}) => (
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>))
                }
            </ul>
        </div>
    )
}
