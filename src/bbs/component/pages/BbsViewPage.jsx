import styled from "styled-components";
import Button from "../ui/Button";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import TextInput from "../ui/TextInput";
import CommentList from "../list/CommentList";
import BbsUpdatePage from "./BbsUpdatePage";

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
const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;
const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;
const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;
const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

function BbsViewpage(props) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [bbs, setBbs] = useState({});
    const [comment, setComment] = useState('');
    const [lst, setLst] = useState([]);

    useEffect(() => {
        getBbs();
        getcomt();
    }, []);

    const commentHandler = (e) => {
        setComment(e.target.value);
    }

    const getcomt = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/comments?bbsId=${id}`
            );
            setLst(response.data);
            console.log("debug >>> axios comment get OK!!, ", response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const getBbs = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/bbs/${id}`);
            console.log("debug >>> axios get OK!!, ", response.data);
            setBbs(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const commentSave = async (bbsId, comment) => {
        if (comment !== '') {
            const data = {
                id: Date.now(),           
                comment: comment,          
                bbsId: parseInt(bbsId, 10) 
            };
        
            try {
                const response = await axios.post('http://localhost:8000/comments', data);
                console.log("debug >>> axios post response data, ", response);
                alert("코멘트 작성을 완료하였습니다.");
                setComment('');
                getcomt(); // 코멘트를 저장한 후 리스트를 업데이트
            } catch (err) {
                console.log(err);
            }
        } else {
            alert("코멘트를 한 자 이상 입력해주세요.");
        }
    }

    const onDelete = async(id) => {
        try {
            await axios.delete(`http://localhost:8000/bbs/${id}`);
            alert("게시글을 삭제하였습니다.");
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Wrapper>
            <Container>
                <Button
                    title='뒤로가기'
                    onClick={() => navigate('/')}
                />
                <p />
                <PostContainer>
                    <TitleText>{bbs.title}</TitleText>
                    <ContentText>{bbs.content}</ContentText>
                    <Button title="게시글 수정하기"
                            onClick={() => navigate(`/bbs-update/${id}`)}/>
                    &nbsp;&nbsp;&nbsp;
                    <Button title="게시글 삭제하기"
                            onClick={() => onDelete(bbs.id)}/>
                </PostContainer>

                <CommentLabel>타임라인</CommentLabel>
                <TextInput
                    height={15}
                    value={comment}
                    onChange={commentHandler}
                />
                <p />
                <Button
                    title="타임라인 등록하기"
                    onClick={() => commentSave(id, comment)}
                />
                <p />
                <CommentList
                    data={lst}
                />

            </Container>
        </Wrapper>
    );
}

export default BbsViewpage;
