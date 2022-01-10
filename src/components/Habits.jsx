import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import MainHabits from "./MainHabits"
import { useContext } from "react"
import UserDataContext from "./tools/UserDataContext"

export default function Habits() {

    const { userData } = useContext(UserDataContext)

    return (
        <Main>
            <Header userData={userData} />
            <MainHabits userData={userData} />
            <Footer />
        </Main>
    )

}

const Main = styled.div`
    min-height: 100vh;
    
    display:flex;
    flex-direction: column;
    align-items:center;
`