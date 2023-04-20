import React from "react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { ContainerPage } from "../../components/main";

export default function Email() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
    
        if (name==='' || email==='' || message===''){
            alert('Preencha os campos');
            return;
        }

        const templateParams = {
            to_name:name,
            message:message,
            email:email
        }

        emailjs.send("service_0by64eu","template_sabkqyr",templateParams,"laKWgD8Ead9q9jX85")
      .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    }

    return (
        <>
            <ContainerPage>
                
                    <h1>ENVIO DE E-MAIL</h1>
                
                <form className="form" onSubmit={sendEmail}>
                    <input className="input" type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} value={name}/>
                    <input className="input" type="text" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <input className="input" type="text" placeholder="Digite sua mensagem" onChange={(e) => setMessage(e.target.value)} value={message}/>
                    <input className="button" type="submit" value="Enviar"/>
                </form>
            </ContainerPage>
        </>
    )
}