import Results from "./Results";

function CityList({el, setCityName, cityName}) {

    function deleteHandler(id){
        setCityName(cityName.filter(el => el.id !==id))
    }

    return (
        <div style={{margin: "10px"}}>
            <div style={{display: "flex", justifyContent: "flex-end", margin: "20px 0 3px 0"}}>
                {`${el.city}, ${el.state}`}
                <button onClick={() => deleteHandler(el.id)} style={{marginLeft: "5px", color: "red"}}>X</button>
            </div>

            <Results
                el={el}
            />
        </div>
    );
}

export default CityList;
