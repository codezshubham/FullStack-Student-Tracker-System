import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const[user, setUser] = useState({
        name:"",
        regno:"",
        cgpa:""
    })

    const{name, regno, cgpa} = user;

    const onInputChange=(e)=>{
        setUser({...user, [e.target.name] : e.target.value });
    }

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user);
        navigate("/");
    }

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    }

    useEffect(()=>{
        loadUser();
    },[])
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className='text-center m-4'>Edit User</h2>
                <form onSubmit={ e => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="Name" className='form-label'>Name</label>
                    <input 
                        type={"text"}
                        className='form-control'
                        placeholder='Enter your name'
                        name='name'
                        value={name}
                        onChange={(e)=>onInputChange(e)}
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor="Username" className='form-label'>Registration No.</label>
                    <input 
                        type={"text"}
                        className='form-control'
                        placeholder='Enter Your Registration Number'
                        name='regno'
                        value={regno}
                        onChange={(e)=>onInputChange(e)}
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className='form-label'>Current CGPA</label>
                    <input 
                        type={"text"}
                        className='form-control'
                        placeholder='Enter Your Current CGPA'
                        name='cgpa'
                        value={cgpa}
                        onChange={(e)=>onInputChange(e)}
                        />
                </div>
                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                    <Link className='btn btn-outline-danger mx-2' to={"/"}>Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditUser
