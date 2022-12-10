import React, {useEffect, useState} from 'react';
import axios from "axios";
import TableList from "./Table.List";

function Results({el}) {

    const [isLoading, setIsLoading] = useState(false);
    const [DB, setDB] = useState([])

    useEffect(() => {
        getDB()
    }, []);

    function getDB() {
        setIsLoading(true);
        axios.get('http://localhost:3000/excel/')
            .then(function (response) {
                setDB(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <>
            {isLoading ? '...loading' :
                <table border={1} style={{border: "1px"}}>
                    <thead>

                    </thead>
                    <tbody style={{fontSize: "10px"}}>
                    {DB.filter(item => item.City === el.city && item.State === el.state).map(filteredDB => (
                        <tr>
                            <TableList
                                key={filteredDB.id}
                                filteredDB={filteredDB}
                                el={el}
                            />
                        </tr>
                    ))}
                    </tbody>
                </table>
            }
        </>
    );
}

export default Results;
