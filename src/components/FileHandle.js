import './Team-Information.xlsx';
import * as XLSX from 'xlsx';
import { useState } from 'react';
function FileHandle(){
    const [data,setData]=useState([]);
    const file=XLSX.readFile('Team-Information.xlsx');
    const sheetname=file.SheetNames[0];
    const worksheet=file.Sheets[sheetname];
    const arr=XLSX.utils.sheet_to_json(worksheet);
    setData(arr);
    return(
        <>
        <table>
            <caption>Individula data</caption>
            <tbody>
                {data.map((row,rowIndex)=>(
                    <tr key={rowIndex}>
                        {row.map((cell,cellIndex)=>(
                            <td key={cellIndex}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}
export default FileHandle;