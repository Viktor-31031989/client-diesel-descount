import React, {useState} from 'react';
import CityList from "./CityList";
import {Button, TextField} from "@mui/material";

function InputBody(props) {

    const [inputCityName, setInputCityName] = useState('');
    const [inputState, setInputState] = useState('');
    const [cityName, setCityName] = useState([]);

    function cityInput(e) {
        setInputCityName((e.target.value).toUpperCase());
    }

    function stateInput(e) {
        if(e.target.value.length > 2){
            return ''
        } else {
            setInputState((e.target.value).toUpperCase());
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        setCityName([...cityName, {id: Math.random(), city: inputCityName, state: inputState}])

        setInputState('');
        setInputCityName('');
    }
    return (
        <div>
            <div>
                <div>
                    <TextField style={{
                        margin: "10px 10px 10px 20px",
                        width: "120px"
                    }} id="outlined-basic" label="Enter City" variant="outlined" type="text"
                               value={inputCityName}
                               onChange={(e) => cityInput(e)}/>
                    <TextField style={{
                        width: "70px",
                        margin: "10px 10px 10px 0"
                    }} id="outlined-basic" label="State" variant="outlined" type="text"
                               value={inputState} onChange={(e) => stateInput(e)}/>
                    <Button style={{margin: "10px", padding: "14px"}} variant="contained"
                            onClick={(e) => submitHandler(e)}>Add City</Button>
                </div>
            </div>

            {cityName.map((el) => (
                <CityList
                    key={el.id}
                    el={el}
                    setCityName={setCityName}
                    cityName={cityName}
                />
            ))}
        </div>
    );
}

export default InputBody;
