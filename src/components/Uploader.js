import React, {useState} from 'react';
import axios from "axios";

const xlsx = require('xlsx');

function Uploader() {

    const [uploaded, setUploaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const readUpLoadFile = (e) => {
        e.preventDefault();

        setIsLoading(true);

        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, {type: "array"});
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                console.log(json);

                for (let i = 0; i <= json.length; i++) {
                    axios.post(`http://localhost:3000/excel/`, json[i])
                        .then(response => {
                            console.log(response)
                        })
                        .catch(function (error) {
                            console.log(error)
                        })

                }
                setIsLoading(false)
                setUploaded(true)
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    };

    const deleteAllData = () => {
        axios.delete("http://localhost:3000/excel/", {data: {}})
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
}

const dateAndTime = () => {
    const current = new Date();
    const date = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;
    return date;
};

return (
    <div>

        <input type="file" name="upload" onChange={readUpLoadFile}/>
        <button onClick={deleteAllData}>DELETE DATABASE</button>
        {isLoading ?
            <p>...LOADING TO SERVER</p>
            :
            <p style={{margin: '0'}}>{uploaded ?
                <span style={{fontSize: '14px', color: 'grey'}}>uploaded: {dateAndTime()} </span>
                :
                ''}
            </p>
        }
    </div>
);
}

export default Uploader;
