import styled from "styled-components";
import ForecastItem from "./ForecastItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > * {
    :not(:last-child){
        margin-bottom : 16px;}
    }
`;


function ForecastList({data}){
    return(
        <Wrapper>
            {data.map((forecast, index) => {
                return(
                    <ForecastItem
                        key={index}
                        data={forecast}/>
                );
            })}
        </Wrapper>
    );
}

export default ForecastList;