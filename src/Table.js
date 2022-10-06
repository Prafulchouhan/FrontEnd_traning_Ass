import React, { useEffect, useState } from "react";

const Table = () => {

    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            return res.json();
        })
        .then((data)=>{
            setData(data);
            console.log(data);
        })
    },[])
    return ( 
            <table border={1}>
            <tr>
                <th>Id</th>
                <th>UserId</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            {
                data.map((data)=>(
                    <tr>
                    <td>{data.id}</td>
                    <td>{data.userId}</td>
                    <td>{data.title}</td>
                    <td>{data.body}</td>
                </tr>
                ))
            }
        </table>
        )
        
}
 
export default Table;