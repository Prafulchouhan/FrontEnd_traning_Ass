import React, { useEffect, useState } from "react";
import Click from "./Click";
function Table ()  {
        const[data,setData]=useState([]);
        useEffect(()=>{
            fetch('http://localhost:8000/User')
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                setData(data);
            })
        },[]);
        function sortName(){
            const x=[...data];
            setData(x.sort((a,b)=>a.name.localeCompare(b.name)));
        }
        function sortAge(){
            const x=[...data];
            setData(x.sort((a,b)=>a.age.localeCompare(b.age)));
          }
        return ( 
            <div>
            <Click sortName={sortName} sortAge={sortAge}/>
            <table border={1}>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                {
                    data.map(data=>(
                        <tr>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                </tr>
                ))
            }
            </table>
            </div>
        );
    
}
 
export default Table;