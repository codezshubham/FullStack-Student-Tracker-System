import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const ViewUser = () => {

    const[user, setUser] = useState({
        name:"",
        regno:"",
        cgpa:""
    })

    const{id} = useParams();

    useEffect(()=>{
        loadUser();
    },[])

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    }

return (
    <div className='container'>
        <div className="row mt-4">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className='text-center m-4'>User Details</h2>
            </div>
            <div className="card mt-4">
                <div className="card-header">
                    Details Of User id :
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Name :  </b>
                            {user.name}
                        </li>
                        <li className="list-group-item">
                            <b>Registration No. :  </b>
                            {user.regno}
                        </li>
                        <li className="list-group-item">
                            <b>Current CGPA :  </b>
                            {user.cgpa}
                        </li>
                    </ul>
                </div>
            </div>

            <Link className='btn btn-primary my-2' to={"/"}>Back To Home</Link>
        </div>
    </div>
  )
}

export default ViewUser
