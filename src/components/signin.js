import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";

export default function SignIn(){
    return (
    <Centralize>
        <Title>
            MyWallet
        </Title>
        <Formulario>
            <input placeholder="E-mail" type="email" name="email" required>
            </input>
            <input placeholder="Senha" type="password" name="senha" required>
            </input>
            <Botao>
                Entrar
            </Botao>
        </Formulario>
        <Link to={"/signup"}><p>Primeira vez? Cadastre-se!</p></Link>
    </Centralize>
    )
}


const Title = styled.div`
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    font-weight: 400;
    color: #FFFFFF;
    margin-bottom: 30px;
    cursor: default;
`

const Centralize = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 700;

    a:-webkit-any-link {
        text-decoration: none;
        color: white;
        cursor: pointer;
    }
`

const Formulario = styled.form`
    input{
    width: 326px;
    height: 60px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 13px;
    color: #000000;
    font-size: 20px;
    font-weight: 400;
    display: flex;
    box-sizing: border-box;
    padding: 15px;
    justify-content: flex-start;
    align-items: center;
    border: 0px;
    }

    input::placeholder{
        color: #000000;
    };
`

const Botao = styled.button`
    width: 326px;
    height: 46px;
    background-color: #A328D6;
    border-radius: 5px;
    margin-bottom: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
    border: 0px;
    cursor: pointer;
`
/* const Input = styled.div`
    width: 326px;
    height: 60px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 13px;
    color: black;
    font-size: 20px;
    font-weight: 400;
    display: flex;
    box-sizing: border-box;
    padding: 15px;
    justify-content: flex-start;
    align-items: center;
` */

//Falta fazer a estilização do Input --> ver projetos antigos