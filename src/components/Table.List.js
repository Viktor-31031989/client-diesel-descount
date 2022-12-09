
function TableList({filteredDB}) {

    return (
        <>
            <td>{filteredDB.TSName}</td>
            <td>{filteredDB.PumpPrice}</td>
            <td>{filteredDB.CustomerPrice}</td>
            <td>{filteredDB.Location}</td>
            <td>
                <button onClick={()=> navigator.clipboard.writeText(filteredDB.Location)}>
                    copy address
                </button>
            </td>
        </>
    );
}

export default TableList;
