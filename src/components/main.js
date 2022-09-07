import styled from 'styled-components';
import { Link} from "react-router-dom";
import { useState } from 'react';

//Ajustar pra ter um scroll quando o array é muito grande
//Ajustar a entrada pra transformar em formato R$XX,XX conforme vai digitando

import RenderReport from './renderReport';
import RenderReportSum from './renderReportSum';

const rep = [{date: "30/11/2022", description: "Almoço mãe", value: 39.90, type: "-"}, {date: "27/11/2022", description: "Mercado", value: 542.54, type: "-"}, {date: "26/11/2022", description: "Compras churrasco", value: 67.60, type: "-"}, {date: "20/11/2022", description: "Empréstimo Maria", value: 500, type: "+"}, {date: "15/11/2022", description: "Salário", value: 3000, type: "+"}]

//const rep = [];

export default function Main(){

    const [report, setReport] = useState(rep)

    return (
    <Centralize>
        <Title>
            Olá, Fulano
            <Link to={"/"}><ion-icon name="exit-outline"/></Link>
        </Title>
        <Report>
            <RenderReport report={report}/>
            <RenderReportSum report={report}/>
        </Report>
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
const Report = styled.div`
    width: 326px;
    height: 446px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 13px;
    margin-top: 22px;
    color: #868686;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 400;
    box-sizing: border-box;
    padding: 12px;
    padding-top: 25px;
    cursor: default;
    position: relative;

    h6{
        text-align: center;
        width: 200px;
    }
`

//Falta estilizar o tamanho do ion icon
//Falta estilizar o tamanho da borda do texto em Report pra ter quebra de linha
//Falta estilizar o tamanho do texto nos botões pra ter quebra de linha