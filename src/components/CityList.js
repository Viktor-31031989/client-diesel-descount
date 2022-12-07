import React, {useState} from 'react';
import Results from "./Results";

function CityList({el, setCityName, cityName}) {

    function deleteHandler(id){
        setCityName(cityName.filter(el => el.id !==id))
    }

    return (
        <>
            <div>
                {`${el.city}, ${el.state}`}
                <button onClick={() => deleteHandler(el.id)}>X</button>
            </div>

            <Results
                el={el}
            />
            <hr/>
        </>
    );
}

export default CityList;
