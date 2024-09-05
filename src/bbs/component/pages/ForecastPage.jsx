import styled from "styled-components";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";
import TextInput from "../ui/TextInput";
import ForecastList from "../list/forecast/ForecastList";

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

function ForecastPage(){
    const [baseDate, setBaseDate] = useState('');
    const [baseTime, setBaseTime] = useState('');
    const [beachNum, setBeachNum] = useState('');
    //const [showList, setShowList] = useState(false);
    const [data, setData] = useState([]);


    const baseDateHandler = (e) => {
        setBaseDate(e.target.value);
    }
    const baseTimeHandler = (e) => {
        setBaseTime(e.target.value);
    }
    const beachNumHandler = (e) => {
        setBeachNum(e.target.value);
    }
    const handleSearchClick = () => {
        if (baseDate && baseTime && beachNum) {
            getData();
        } else {
            alert("모든 입력 필드를 채워주세요.");
        }
        //setShowList(true); 
    };

    const getData = async() => {
        try {
            // 사용자 입력값을 기반으로 URL을 생성
            const response = await api.get(`/api/forcast?base_time=${baseTime}&base_date=${baseDate}&beach_num=${beachNum}`);
            setData(response.data);
            console.log("debug >>> axios get OK!!, ", response.data);
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <Wrapper>
            <Container>
                <label> 발표 일자 : 
                    <TextInput
                        height={10}
                        value={baseDate}
                        onChange={baseDateHandler}
                        />
                </label>
                <p/>

                <label> 발표 시각 : 
                    <TextInput
                        height={10}
                        value={baseTime}
                        onChange={baseTimeHandler}
                        />
                </label>
                <p/>

                <label> 해변 코드 : 
                    <TextInput
                        height={10}
                        value={beachNum}
                        onChange={beachNumHandler}
                        />
                </label>
                <p/>
                <Button title="조회하기"
                        onClick={handleSearchClick}/>

                <p/>
                <p/>

                <ForecastList data={data} />
            
            </Container>
        </Wrapper>
    );
}

export default ForecastPage;