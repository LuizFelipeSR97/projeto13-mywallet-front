import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";

export default function Main(){
    return (
    <Centralize>
        <Title>
            Olá, Fulano
            <ion-icon name="exit-outline"/>
        </Title>
        <Registros>
        <h1>Não há registros de entrada ou saída</h1>
        </Registros>
        <Botoes>
        <Link to={"/addEntrances"}>
            <Botao>
                <ion-icon name="add-circle-outline"/>
                <h1>Nova entrada</h1>
            </Botao>
        </Link>
        <Link to={"/addExits"}>
            <Botao>
                <ion-icon name="remove-circle-outline"/>
                <h1>Nova saida</h1>
            </Botao>
        </Link>
        </Botoes>
    </Centralize>
    )
}


const Title = styled.div`
    font-size: 26px;
    font-weight: 700;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    width: 326px;
    cursor: default;

    ion-icon{
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
`


const Centralize = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 700;
    box-sizing: border-box;
    padding: 25px;

    a:-webkit-any-link {
        text-decoration: none;
        color: white;
        cursor: pointer;
    }
`

const Botoes = styled.div`
    width: 326px;
    margin-bottom: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
`

const Botao = styled.div`
    width: 155px;
    height: 114px;
    background-color: #A328D6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    color: #FFFFFF;
    font-size: 17px;
    font-weight: 700;
    box-sizing: border-box;
    padding: 10px;

    h1{
        text-align: left;
        width: 65px;
    }

    ion-icon{
        width: 25px;
        height: 25px;
    }
`
const Registros = styled.div`
    width: 326px;
    height: 446px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 13px;
    margin-top: 22px;
    color: #868686;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    box-sizing: border-box;
    padding: 12px;
    cursor: default;

    h1{
        text-align: center;
        width: 200px;
    }
`

//Falta estilizar o tamanho do ion icon
//Falta estilizar o tamanho da borda do texto em registros pra ter quebra de linha
//Falta estilizar o tamanho do texto nos botões pra ter quebra de linha