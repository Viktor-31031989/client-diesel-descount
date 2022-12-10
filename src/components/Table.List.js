import {Button} from "@mui/material";

function TableList({filteredDB}) {

    return (
        <>
            <td style={{fontWeight: "bold"}}>{filteredDB.TSName}</td>
            <td>{filteredDB.PumpPrice}</td>
            <td style={{color: 'red'}}>{filteredDB.CustomerPrice}</td>
            <td>{filteredDB.Location}</td>
            <td>
                <button  onClick={()=> navigator.clipboard.writeText(filteredDB.Location)}>
                    copy address
                </button>
            </td>
        </>
    );
}

export default TableList;
