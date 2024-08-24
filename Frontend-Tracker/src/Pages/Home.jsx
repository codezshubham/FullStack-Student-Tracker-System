import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
const Home = () => {

    const {id} = useParams();
    const[users, setUsers] = useState([]);

    const loadUsers = async ()=>{
        // const response = await fetch("http://localhost:8080/users");
        // const output = await response.json();
        const result = await axios.get("http://localhost:8080/users");
        console.log(result.data);
        setUsers(result.data);
    }

    const deleteUsers = async (id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
    }
    useEffect(()=>{
        loadUsers();
    },[])

    return (
        <div className='container'>
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">SI No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Reg No.</th>
                            <th scope="col">Cur. CGPA</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index)=>{
                        return(
                        <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.regno}</td>
                            <td>{user.cgpa}</td>
                            <td>
                                <Link className="btn btn-primary mx-2"
                                to={`/viewuser/${user.id}`}>View</Link>
                                <Link className="btn btn-outline-primary mx-2"
                                to={`/edituser/${user.id}`}>Edit</Link>
                                <button className="btn btn-danger mx-2"
                                onClick={()=>deleteUsers(user.id)}>Delete</button>
                            </td>
                        </tr>
                        )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
