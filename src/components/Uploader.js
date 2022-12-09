import React, {useState} from 'react';

const xlsx = require('xlsx');

function Uploader() {

    const [uploaded, setUploaded] = useState(false);

    const readUpLoadFile = (e) => {
        e.preventDefault();
        setUploaded(true)

        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, {type: "array"});
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                console.log(json);
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    };

    const dateAndTime = () => {
        const current = new Date();
        const date = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;
        return date;
    };

    return (
        <div>
            <input type="file" name="upload" onChange={readUpLoadFile}/>
            <p style={{margin: '0'}}>{uploaded ?  <span style={{fontSize: '14px', color: 'grey'}}>uploaded: ${dateAndTime()} </span>: ''}</p>
        </div>
    );
}

export default Uploader;
