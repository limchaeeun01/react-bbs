import styled from "styled-components";

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


function ForecastList(props){
    return(
        <Wrapper>
            {props.data.map((forecast) => {
                return(
                    <ForecastItem
                        key={forecast.id}
                        data={forecast}/>
                );
            })}
        </Wrapper>
    );
}

export default ForecastList;