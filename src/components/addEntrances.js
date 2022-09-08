import styled from 'styled-components';
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

export default function AddEntrances({user}){

    console.log("addEntrances")

    const navigate = useNavigate();

    function enviarFormulario(e){

        e.preventDefault();
        
        navigate("/main");

        const newTransaction = {idUser: user._id, description: e.target.description.value, value: Number(e.target.value.value), type: "+"}

        axios.post("http://localhost:5000/transactions", newTransaction).then(() => {
            navigate("/main");
        }).catch(err => {
            console.error(err);
            alert("Erro ao fazer login! Consulte os logs.")
        })
    }

    return (
    <Centralize>
        <Title>
            Nova entrada
        </Title>
        <Formulario onSubmit={enviarFormulario}>
            <input placeholder="Valor" type="number" name="value" required/>
            <input placeholder="Descrição" type="text" name="description" required/>
            <Botao>
                Salvar entrada
            </Botao>
        </Formulario>
    </Centralize>
    )
}


const Title = styled.div`
    font-size: 26px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 30px;
    cursor: default;
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
