import { useState } from "react";
import { Header } from "../../components/Header";
import { Container, Content } from "./style";

export function Login() {

    

    return (
        <Container>
            <Header />
            <Content>
            <p>Insira seu email:</p>
            <input className="inputbox" />
            <p style={{marginTop:"30px"}}>Insira sua senha:</p>
            <input />
            <button style={{marginTop:"30px"}} >Entrar</button>
            </Content>
        </Container>
    )
}

