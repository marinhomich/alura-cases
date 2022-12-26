import React from "react";
import Link from "next/link";



function Title({children}) {
    return (
        <React.Fragment>
            <h1>
                {children}
            </h1>
            <style jsx>{`
              h1 {
                color: red;
              }
            `}
            </style>
        </React.Fragment>
    )
}

export default function Home() {
    return (
        <div>
            <Title>asd</Title>
            <Link href='/Faq'>
                Ir para a página do FAQ
            </Link>
        </div>
    )
}
