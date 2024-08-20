import styled from "styled-components";
import CommentItem from "./CommentItem";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function CommentList(props) {
    const [empty, setEmpty] = useState(true);

    useEffect(() => {
        if (props.data && props.data.length > 0) {
            setEmpty(false); 
        } else {
            setEmpty(true); 
        }
    }, [props.data]); 

    return (
        <Wrapper>
            {!empty ? (
                props.data.map((comment) => (
                    <CommentItem
                        key={comment.id}
                        data={comment.comment}
                    />
                ))
            ) : (
                <p>타임라인이 없습니다</p> 
            )}
        </Wrapper>
    );
}

export default CommentList;
