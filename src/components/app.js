import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import React from 'react'

import SignIn from './signin';
import SignUp from './signup';
import Main from './main';
import AddEntrances from './addEntrances';
import AddExits from './addExits';

export default function App () {

    const [user, setUser] = React.useState()
    const [transactions, setTransactions] = React.useState([])
    const [token, setToken] = React.useState()
    
    return (
    <Page>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn user={user} setUser={setUser} setToken={setToken}/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/main" element={<Main token={token} user={user} setUser={setUser} transactions={transactions} setTransactions={setTransactions}/>} />
                <Route path="/addEntrances" element={<AddEntrances user={user}/>} />
                <Route path="/addExits" element={<AddExits user={user}/>} />
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