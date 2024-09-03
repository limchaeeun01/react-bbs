import styled from "styled-components";
import TextInput from "../ui/TextInput";
import React, { useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
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


function BbsWriterPage(props) {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const titleHandler = (e) => {
        setTitle(e.target.value);
    }
    const contentHandler = (e) => {
        setContent(e.target.value);
    }

    const cancleHandler = () => { 
        alert("글 작성을 취소하고 홈으로 이동합니다.")
        navigate("/");
    }

    /*
    const bbsSave = async(title, content) => {
        const data = {
            id : Date.now(),
            title : title,
            content : content
        };
        try{
            const response = await api.post('bbs', data);
            console.log("debug >>> axios post response data, ", response);
            alert("글 작성을 완료하고 홈으로 이동합니다.");
            navigate("/");
        }catch(err){
            console.log(err);
        }


    }
        */

    const bbsSave = async(title, content) => {
        const data = {
            title : title,
            content : content
        };
        try{
            const response = await api.post('bbs/save', data);
            console.log("debug >>> axios post response data, ", response);
            if(response.status == 204){
                alert("글 작성을 완료하고 홈으로 이동합니다.");
                navigate("/");
            }else{
                alert("데이터 저장 오류 발생");
            }
            
        }catch(err){
            console.log(err);
        }


    }

    return(
        <Wrapper>
            <Container>
                <label> 제목 : 
                    <TextInput
                        height={20}
                        value={title}
                        onChange={titleHandler}/>
                </label>
                
                <label> 내용 : 
                    <TextInput
                        height={480}
                        value={content}
                        onChange={contentHandler}/>
                </label>
                <Button title="글 작성하기"
                        onClick={(e) => bbsSave(title, content)}/>
                &nbsp;&nbsp;&nbsp;
                <Button title="글 작성 취소"
                        onClick={cancleHandler}/>
            
            </Container>
        </Wrapper>
    );
}
export default BbsWriterPage;