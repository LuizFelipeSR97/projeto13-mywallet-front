import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import SignIn from './signin';
import SignUp from './signup';
import Main from './main';
import AddEntrances from './addEntrances';
import AddExits from './addExits';

export default function App () {
    
    return (
    <Page>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/main" element={<Main />} />
                <Route path="/addEntrances" element={<AddEntrances />} />
                <Route path="/addExits" element={<AddExits />} />
            </Routes>
        </BrowserRouter>
    </Page>   
    )
}

const Page = styled.div`
    background-color: #8C11BE;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Raleway', sans-serif;
`