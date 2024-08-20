import styled from "styled-components";
import TextInput from "../ui/TextInput";
import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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

function BbsUpdatePage(props){

    const navigate = useNavigate();
    const { id } = useParams(); 
    const [title, setTitle] = useState(''); 
    const [content, setContent] = useState(''); 
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getBbs();
    }, []);

    const titleHandler = (e) => {
        setTitle(e.target.value);
    }
    const contentHandler = (e) => {
        setContent(e.target.value);
    }
    const cancleHandler = () => { 
        alert("글 수정을 취소합니다.")
        navigate("/");
    }

    const getBbs = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/bbs/${id}`);
            console.log("debug >>> axios get OK!!, ", response.data);
            setTitle(response.data.title); 
            setContent(response.data.content); 
            setIsLoaded(true);
        } catch (err) {
            console.log(err);
        }
    }

    const bbsUpdate = async(title, content) => {
        const data = {
            title : title,
            content : content
        };
        try{
            const response = await axios.put(`http://localhost:8000/bbs/${id}`, data);
            console.log("debug >>> axios post response data, ", response);
            alert("글 작성을 완료하고 홈으로 이동합니다.");
            navigate("/");
        }catch(err){
            console.log(err);
        }


    }

    return(
        <Wrapper>
            <Container>
                {isLoaded ? (
                    <>
                        <label> 제목 : 
                            <TextInput
                                height={20}
                                value={title}
                                onChange={titleHandler}
                            />
                        </label>
                        
                        <label> 내용 : 
                            <TextInput
                                height={480}
                                value={content}
                                onChange={contentHandler}
                            />
                        </label>
                        <Button 
                            title="글 수정하기"
                            onClick={() => bbsUpdate(title, content)}
                        />
                        &nbsp;&nbsp;&nbsp;
                        <Button 
                            title="글 수정 취소"
                            onClick={cancleHandler}
                        />
                    </>
                ) : (
                    <p>Loading...</p> 
                )}
            </Container>
        </Wrapper>
    );
}

export default BbsUpdatePage;