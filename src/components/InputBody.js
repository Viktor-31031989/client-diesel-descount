import React, {useState} from 'react';
import CityList from "./CityList";

function InputBody(props) {

    const [inputCityName, setInputCityName] = useState('');
    const [inputState, setInputState] = useState('');
    const [cityName, setCityName] = useState([]);

    function cityInput(e){
       setInputCityName((e.target.value).toUpperCase());
    }

    function stateInput(e){
        setInputState((e.target.value).toUpperCase());
    }

    const submitHandler = (e) => {
        e.preventDefault();

        setCityName([...cityName, {id: Math.random(), city: inputCityName, state: inputState}])

        setInputState('');
        setInputCityName('');
    }
    return (
        <div>
            <input type="text" value={inputCityName} onChange={(e) => cityInput(e)}/>
            <input type="text" value={inputState} onChange={(e) => stateInput(e)}/>
            <button onClick={(e) => submitHandler(e)}>Add City</button>
            <hr/>
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
