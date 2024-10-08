import styled from "styled-components";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import BbsList from "../list/BbsList";
import { useEffect, useState } from "react";
//import axios from "axios";
import api from "../api/axios";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`
    width: 100%;
    max-width: 720px;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

//json ver
    function HomePage(){

        const navigate = useNavigate();
        const [lst, setLst] = useState([]);

        useEffect(() => {
            getlst();
    }, [] );

//spring
    const getlst = async() => {
        try{
            const response = await api.get('bbs/index');
            setLst(response.data);
            console.log("debug >>> axios get OK!!, ", response.data);
        }catch(err){
            console.log(err);
        }
    }

    return(
        <Wrapper>
            <Container>
                <div>
                    <Button
                        title="글 작성하기"
                        onClick={() => {
                            navigate("bbs-write");
                        }}/>
                        &nbsp;&nbsp;&nbsp;
                    <Button
                        title="Forecast"
                        onClick={() => {
                            navigate("forecast")
                        }}/>
                </div>
                <p/>
                <BbsList
                    data={lst}/>
            </Container>
        </Wrapper>
    );
}

export default HomePage;