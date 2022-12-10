import React from 'react';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

function Header(props) {
    return (
        <div>
            <h2 style={{margin: "10px 0 10px 30px"}}>
                <span style={{color: "red"}}>XPO</span>
                <span style={{fontSize: "15px"}}>DISCOUNT FINDER
                    <LocalGasStationIcon style={{fontSize: "medium"}}/></span></h2>
        </div>
    );
}

export default Header;
