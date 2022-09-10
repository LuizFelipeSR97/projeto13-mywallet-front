import styled from 'styled-components';

export default function RenderReport({report}){

    if (report.length===0){
        return (
        <ReportDefault>
            <h6>Não há registros de entrada ou saída</h6>
        </ReportDefault>
        )
    } else {
        return (report.map(transaction=>(transaction.type==="+")?
        <Transaction>
            <h1>{transaction.date.slice(0,5)}</h1>
            <h2>{transaction.description}</h2>
            <h3>{transaction.value.toFixed(2).toString().replace(".",",")}</h3>             
        </Transaction>
        :
        <Transaction>
            <h1>{transaction.date.slice(0,5)}</h1>
            <h2>{transaction.description}</h2>
            <h4>{transaction.value.toFixed(2).toString().replace(".",",")}</h4>          
        </Transaction>
        )
        )        
    }
}

const ReportDefault = styled.div`
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
padding-top: 150px;
cursor: default;

h6{
    text-align: center;
    width: 200px;
}
`

const Transaction = styled.div`
width: 100%;
display: flex;
display: flex;
margin-bottom: 20px;

h1{
    text-align: left;
    width: 70px;
    margin-right: 5px;
    font-size: 16px;
    color: #C6C6C6;
}

h2{
    text-align: left;
    width: 100%;
    font-size: 16px;
    color: #000000;
}

h3{
    text-align: right;
    width: 70px;
    font-size: 16px;
    color: #03AC00;
}

h4{
    text-align: right;
    width: 70px;
    font-size: 16px;
    color: #C70000;
}
`