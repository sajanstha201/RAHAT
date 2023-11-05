import { useState } from "react";
import * as XLSX from 'xlsx';
function UploadExcel(){
    const [excelData,setexcelData]=useState([]);
    const [error,setError]=useState(null);
    const [show,setshow]=useState(false);
    const handleExcelFile=(e)=>{
        const file=e.target.files[0];
        if(file){
            let reader=new FileReader();
            reader.onload=(e)=>{
                const data=e.target.result;
                const workBook=XLSX.read(data,{type:'binary'});
                const sheetName=workBook.SheetNames[0];
                const workSheet=workBook.Sheets[sheetName];
                const arr=XLSX.utils.sheet_to_json(workSheet,{header:1});
                setexcelData(arr);
            }
            reader.readAsBinaryString(file);
            setError(null);
        }
        else{
            setexcelData([]);
            setError("Please Upload the File");
        }

    }
return(
<>
    <span>Choose a file: </span>
    <input type='file' accept=".xlsx" onChange={handleExcelFile}></input>
    <button onClick={()=>{setshow(true)}}>submit</button>
    <h3>Data Are: </h3>
    {error&&<h4>{error}</h4>}
    <table style={{display:{show}?'block':'none'}}>
        <tbody>
        {excelData.map((row,rowIndex)=>(
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
export default UploadExcel;