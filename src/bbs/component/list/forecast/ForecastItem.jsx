import styled from "styled-components";
import {useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }
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

function ForecastItem({data}){

    return(
        <Wrapper>
            <TitleText>
                {`카테고리: ${data.category}`}
            </TitleText>
            <ContentText>
                {`예보 값: ${data.fcstValue}`}
            </ContentText>
        </Wrapper>
    );

}

export default ForecastItem;