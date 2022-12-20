import { useState } from "react"
import styled from "styled-components"

const Artigo = styled.article`
    margin-top: 4em;
`

const Header = styled.header`
    
`

const Titulo = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 26.82px;
    color: #202020;
    opacity: 0.5;
`

const SubTitulo = styled.p`
    font-family: 'Elsie Swash Caps';
    font-style: normal;
    font-weight: 900;
    font-size: 82px;
    line-height: 94px;
    color: #202020;
`

const Descricao = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #202020;
    opacity: 0.5;
`

const InputDiv = styled.div`
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 60ch;
    display: flex;
    justify-content: flex-end;
    height: 70px;
`

const Icone = styled.span`
    align-self: center;
    margin-right: 10px;
    margin-left: 10px;
    flex-grow: 1;
`

const Input = styled.input`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #202020;
    opacity: 0.3;
    padding-top: 5px;
    border: none;
    flex-grow: 3;
    &:invalid {
        outline-color: red;
    }
    &:valid {
        outline: none;
    }
`

const Button = styled.button`
    flex-grow: 2;
    padding: 5px 20px;
    border: none;
    background-color: #ffcb47;
    color: white;
    opacity: ${ ({disabled}) =>  disabled ? "0.5" : "unset"};
`

export default function Newsletter() {

    const [email, setEmail] = useState('');

    const handlePressedKey = (e) => {
        if(e.target.checkValidity()) {
            setEmail(e.target.value);
        } else {
            setEmail('');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Obrigado pela sua assinatura, voce receberá nossas novidades no email ${email}`);
    }

    return (
        <Artigo>
            <Header>
                <Titulo>Sua casa com as </Titulo>
                <SubTitulo>melhores plantas</SubTitulo>
            </Header>
            <Descricao>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia.
                Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</Descricao>
            <form onSubmit={handleSubmit}>
                <InputDiv>
                    <Icone>✉️</Icone>
                    <Input type="email" placeholder="Insira seu e-mail" onKeyDown={handlePressedKey} required/>
                    <Button type="submit" disabled={email === '' ? true : false}>Assinar newsletter</Button>
                </InputDiv>
            </form>
        </Artigo>
    )
}