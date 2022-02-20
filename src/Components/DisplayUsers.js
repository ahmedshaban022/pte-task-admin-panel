import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteUser, EditUser } from '../store/actions';
import './style.css';

function DisplayUsers(props) {
  let users=useSelector(state=>state.users);
  let dispatch=useDispatch();

  //for Printing user data
  let [userData,setUserData]=useState({});

  // editing img value
  const [selectedImage, setSelectedImage] = useState(null);

 
    // for editing user 
    let [USER,setUser]=useState({});

    // Deleting User
    const handleDeleteUser=(id)=>{
        dispatch(deleteUser(id));
        toast.success('Deleting User has Successfully');
    }

    //edit user (( pass user data to USER  useState))
    const passingUserToEdit=(editingUser)=>{
        setUser(editingUser);
    }

    //geting edit-form data 
    const handlOnChangeUserEdit=({target})=>{
    setUser({...USER,[target.name]:target.value});
    }

    // dispatch the edited user
    const editUser=  ()=>{
      setUser(( state) =>{return {...USER,img:selectedImage}});
      dispatch(EditUser(USER));
        toast.success('Editing  User has Successfully');
    }

    return (
        <div className='container'>
           {users.length>0?
            <table className="table table-hover mt-5" >
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Title</th>
                <th>Specialty</th>
                <th>Phone Number</th>
                <th>Photo</th>
                <th>Print</th>
                <th>Edit</th>
                <th>Remove</th>
                </tr>
            </thead>
            <tbody>
            {
           users.map((user,index)=>(
            <tr key={index} >
             <td >{index+1}</td>
             <td >{user.name}</td>
             <td >{user.email}</td>
             <td >{user.title}</td>
             <td >{user.specialty}</td>
             <td >{user.phone}</td>
            <td ><img className='rounded-circle table-img'  src={user.img}></img> </td>
            <td >
            <>
  <button
    type="button"
    className="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#printData"
    onClick={()=>setUserData({...user})}
  >
    Print
  </button>
 
  <div
    className="modal fade"
    id="printData"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            User details
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
            <label className='fw-bold text-muted'>Name: </label> <label>{userData.name}</label><br/>
            <label className='fw-bold text-muted'>Title: </label> <label>{userData.title}</label>

        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          
        </div>
      </div>
    </div>
  </div>
</>
  </td>
    <td >
  <button
    type="button"
    className="btn btn-info me-1"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    onClick={()=>passingUserToEdit(user)}>Edit</button>
  <div className="modal fade" id="exampleModal" tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true">

    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
           Edit User
          </h5>
          <button
            type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
        </div>
        <div className="modal-body">

         {USER?<>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" value={USER.name} required className="form-control" onChange={handlOnChangeUserEdit} name='name' id="exampleFormControlInput1" placeholder="Ex: Ahmed Shaban" />
                </div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input type="text" value={USER.title}required className="form-control" onChange={handlOnChangeUserEdit} name='title' id="exampleFormControlInput1" placeholder="Ex: Web Developer" />
                </div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" value={USER.email} required className="form-control" onChange={handlOnChangeUserEdit} name='email' id="exampleFormControlInput1" placeholder="email@example.com" />
                </div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Specialty</label>
                <input type="text"  value={USER.specialty} required className="form-control" onChange={handlOnChangeUserEdit} name='specialty' id="exampleFormControlInput1" placeholder="Ex: MERN Stack" />
                </div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                <input type="tel" value={USER.phone}required className="form-control" onChange={handlOnChangeUserEdit} name='phone' id="exampleFormControlInput1" placeholder="Ex:+01234567891" />
                </div>
                

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Upload User Photo</label> <br/>
               
                <input  type="file"  name="userImg" className='text-danger fw-bold '
                        required
                        onChange={(event) => {
                           setUser(( state) =>{return {...USER,img:URL.createObjectURL(event.target.files[0])}}); 
                        }}
                    />
                {USER && 
                    <div className='container'>
                    {USER.img && <><img alt="not fount" className='rounded-circle mb-2' width={"250px"} height={"250px"} src={USER.img} />
                   </> }</div>
                }
                </div>
                </>
                       : <h3>No User Found To Editing..</h3> }
        </div>
        
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" className="btn btn-primary" onClick={()=>{
            USER.img?
            editUser():toast.warning('upload photo please!')}}>
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
  </td>
  <td>
             <button className='btn btn-danger' onClick={()=>handleDeleteUser(user.id)}>Remove</button></td>
           </tr>
           ))}
            </tbody>
            </table>:
            <>
            <div className='container'>

            <h3 className='m-5 text-danger fs-1'> No users found .. 
            <NavLink to="/add-new-user" className="ms-3" >
                
                <img src="https://img.icons8.com/ios/50/000000/add-administrator.png"/>
                    </NavLink>
            </h3>
           
            </div>
            </>
            }
            

            
           
          
        </div>
    );
}

export default DisplayUsers;