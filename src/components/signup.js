import styled from 'styled-components';
import { Link, useNavigate} from "react-router-dom";


let db_users=[{name: "fulano", email: "fulano@fulano.com", password: "fulano"},{name: "bob", email: "bob@driven.com", password: "bob@driven"}]

export default function SignUp(){

    console.log("signup")

    const navigate = useNavigate();

    function enviarFormulario(e){

        e.preventDefault();
        if (e.target.passwordVerification.value !== e.target.password.value){
            alert ("erro")
            return
        }
        const user = {name: e.target.name.value, email: e.target.email.value, password: e.target.password.value};
        db_users.push(user);
        console.log(db_users);
        navigate("/");

        //Quando tiver pronto, tirar esse push e o navigate de cima e descomentar o axios abaixo
        
        //axios.post("http://localhost:5000/myWalletUsers", user).then(() => {
        //    navigate("/main");
        //}).catch(err => {
        //    console.error(err);
        //    alert("Erro ao fazer login! Consulte os logs.")
        //})
    }

    return (
    <Centralize>
        <Title>
            MyWallet
        </Title>
        <Formulario onSubmit={enviarFormulario}>
            <input placeholder="Nome" type="text" name="name" required/>
            <input placeholder="E-mail" type="email" name="email" required/>
            <input placeholder="Senha" type="password" name="password" required/>
            <input placeholder="Confirme a senha" type="password" name="passwordVerification" required/>
            <Botao>
                Entrar
            </Botao>
        </Formulario>
        <Link to={"/"}><p>Já tem uma conta? Entre agora!</p></Link>
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