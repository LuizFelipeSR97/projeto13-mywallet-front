import styled from 'styled-components';

export default function RenderReportSum({report}){

    if (report.length>0){

        console.log(report)

        let sum = 0;

        for (let i=0; i<report.length; i++){
            if (report[i].type==="+"){
                sum += report[i].value
            } else {
                sum -= report[i].value
            }
        }

        return (
            (sum>0)
            ?
            <Sum>
                <h1>TOTAL</h1>
                <h3>{sum.toFixed(2).toString().replace(".",",")}</h3>             
            </Sum>
            :
            <Sum>
                <h1>TOTAL</h1>
                <h4>{sum.toFixed(2).toString().replace(".",",")}</h4>          
            </Sum>
        )
    }
    else {
        return <></>
    }
}

const Sum = styled.div`
width: 290px;
display: flex;
justify-content: space-between;
margin-bottom: 20px;
position: absolute;
bottom: -5px;
left: 15px;

h1{
    text-align: left;
    width: 70px;
    font-size: 17px;
    font-weight: 700;
    color: #000000;
    text-align: left;
}

h3{
    text-align: right;
    width: 70px;
    font-size: 17px;
    color: #03AC00;
    text-align: right;
}

h4{
    text-align: right;
    width: 70px;
    font-size: 16px;
    color: #C70000;
    text-align: right;
}
`