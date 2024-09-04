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
    font-size: 20px;
    font-weight: 500;
`;

function ForecastItem(props){

    return(
        <Wrapper>
            <TitleText>
                {`카테고리: ${data.category} (${data.fcstDate} ${data.fcstTime})`}
            </TitleText>
            <DescriptionText>
                {`예보 값: ${data.fcstValue}`}
            </DescriptionText>
            <DescriptionText>
                {`위치: (${data.nx}, ${data.ny})`}
            </DescriptionText>
        </Wrapper>
    );

}

export default ForecastItem;