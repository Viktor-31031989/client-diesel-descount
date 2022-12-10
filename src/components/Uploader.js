import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Input} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const xlsx = require('xlsx');

function Uploader() {

    const [open, setOpen] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [date, setDate] = useState([]);


    useEffect(() => {
        getDateAndTime()
    }, []);

    const readUpLoadFile = (e) => {

        setOpen(true);

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
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
        dateAndTime()
        setOpen(false)
    };

    const deleteAllData = () => {
        axios.delete("http://localhost:3000/excel/", {data: {}})
        &&
        axios.delete("http://localhost:3000/date/", {data: {}})
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const dateAndTime = () => {
        const current = new Date();
        const date = {
            Uploaded: 'File uploaded day:',
            Day: current.getMonth() + 1,
            Month: current.getDate(),
            Year: current.getFullYear(),
        }

        axios.post(`http://localhost:3000/date/`, date)
            .then(response => {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    };

    function getDateAndTime() {
        axios.get(`http://localhost:3000/date/`)
            .then(function (response) {
                setDate(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return (
        <>
            <hr/>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <Input type="file" name="upload" onChange={readUpLoadFile}/>
                <Button variant="outlined"  onClick={deleteAllData}><DeleteIcon/></Button>
            </div>
            {open ?
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
                :
                <div style={{margin: '0'}}>{date.Uploaded === String ?
                    <span style={{fontSize: '14px', color: 'grey'}}>{date.map(el => (
                        <p style={{marginLeft: "40px"}}>{`${el.Uploaded} ${el.Month}/${el.Day}/${el.Year}`}</p>
                    ))} </span>
                    :
                    ''}
                </div>
            }
        </>
    );
}

export default Uploader;
