import { Route, Routes } from "react-router-dom";
import TransitionWrapper from "../components/TransitionWrapper";

import Home from "../screens/Home";
import SubPage from "../screens/SubPage";

import { Container } from "./styles";

const AppRouter = () => {
    return (
        <Container>
            <Routes>
                <Route path="/" element={
                    <TransitionWrapper>
                        <Home />
                    </TransitionWrapper>
                }/>
                <Route path="/subpage/:id" element={
                    <TransitionWrapper>
                        <SubPage />
                    </TransitionWrapper>
                }/>
            </Routes>
        </Container>
    )
};

export default AppRouter;