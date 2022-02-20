import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addUser } from '../store/actions';

function AddUsers(props) {
    let dispatch=useDispatch();
    let [user,setUser]=useState();
    // getting Form data 
    const handlOnChange=({target})=>{
        setUser({...user,[target.name]:target.value,id:Date.now()});
    }
    


    // add user
    const handlAddingUser=(e)=>{
        e.preventDefault();
         setUser(state=>({...user,id:Date.now()}));
       dispatch(addUser(user));
       toast.success('User added successfuly');
       
       e.target.reset();
    }



    return (
        <div className='container'>
            <form onSubmit={handlAddingUser}>
                <div className='row'>
                    <div className='col-md-7'>

                    <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" required className="form-control" onChange={handlOnChange} name='name' id="exampleFormControlInput1" placeholder="Ex: Ahmed Shaban" />
                </div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input type="text" required className="form-control" onChange={handlOnChange} name='title' id="exampleFormControlInput1" placeholder="Ex: Web Developer" />
                </div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" required className="form-control" onChange={handlOnChange} name='email' id="exampleFormControlInput1" placeholder="email@example.com" />
                </div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Specialty</label>
                <input type="text"  required className="form-control" onChange={handlOnChange} name='specialty' id="exampleFormControlInput1" placeholder="Ex: MERN Stack" />
                </div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                <input type="tel" required className="form-control" onChange={handlOnChange} name='phone' id="exampleFormControlInput1" placeholder="Ex:+01234567891" />
                </div>
                <div className="mb-3">
               

                    </div>
                        </div>
        

                    <div className='col-md-5 p-5'>
                <label htmlFor="" className="form-label fw-bold text-muted">Upload User Photo</label> <br/>

                <input  type="file"  name="userImg" className='text-danger fw-bold '
                        required
                        onChange={(event) => {
                        setUser(state=>({...user,img:URL.createObjectURL(event.target.files[0])}));
                        }}
                    />
                {/* <input type="url" required className="form-control" onChange={handlOnChange} name='img' id="exampleFormControlInput1" placeholder="url for img" /> */}
                {user && 
                    <div className='container'>
                    {user.img && <img alt="not fount" className='rounded-circle mb-2' width={"250px"} height={"250px"} src={user.img} />
                    }</div>
                }

                    </div>
            
                </div>
        <input type='submit' className='btn btn-success my-2' value='add User'/>


       
            </form>
        </div>
    );
}

export default AddUsers;