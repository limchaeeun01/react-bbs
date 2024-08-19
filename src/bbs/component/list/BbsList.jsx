import BbsItem from "./BbsItem";
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


function BbsList(props){
    return(
        <Wrapper>
            {props.data.map((bbs) => {
                return(
                    <BbsItem
                            title={bbs.title}/>
                );
            })}
        </Wrapper>
    );
}

export default BbsList;