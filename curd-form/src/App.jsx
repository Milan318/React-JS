import React, { useRef, useState } from 'react'

const App = () => {
    const [user, setUser] = useState({});
    const [list, setList] = useState([]);
    const [editIdx, setEditIdx] = useState(-1)
    const editRef = useRef();
    const focusRef = useRef();
    

    const handleChange = (e)=>{
        const {name,value} = e.target;
        let newUser = {...user,[name]:value}
        setUser(newUser);
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const id = Date.now()

        if(editIdx == -1){
          setList([...list,{...user,id}]);
        }
        else{
          let arr = list.map((val)=>{
              return val.id === editIdx ? {...user} : val
          })
          setList(arr)
          setEditIdx(-1)
          editRef.current.innerText = "Submit";
        }

        setUser({});
        // focusRef.current.focus();
    }

    const handleDelete = (id)=>{
      let data = list.filter((data)=> data.id !== id)
      setList(data)
    }

    const handleEdit = (id)=>{
      let data = list.filter((data,idx)=> data.id == id)[0]
      setUser(data)
      setEditIdx(id)
      editRef.current.innerText = "Update";
       focusRef.current.focus();
    }

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
      <form method='post' onSubmit={handleSubmit}>
        <h2 className='mt-3'>Login Form</h2>
      <div className="mb-3">
        <label htmlFor="Username" className="form-label">Username</label>
        <input type="text" 
        onChange={handleChange} 
        className="form-control" 
        id="username" 
        name='username'
        value={user.username || ""} 
        ref={focusRef}/>
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" 
        onChange={handleChange} 
        className="form-control" 
        id="email" 
        name='email'
        value={user.email || ""}/>
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" 
        onChange={handleChange} 
        className="form-control" 
        id="password" 
        name='password'
        value={user.password || ""} />
      </div>
      <button ref={editRef} type="submit" className="btn btn-primary">Submit</button>
      </form>
        </div>
        <div className="row">
          <div className="col-md-10 mx-auto">
          <table className="table table-bordered mt-5">
    <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((ele,idx)=>{
                return(
                    <tr key={idx}>
                      <td>{idx+1}</td>
                      <td>{ele.username}</td>
                      <td>{ele.email}</td>
                      <td>{ele.password}</td>
                      <td>
                        <button onClick={()=>handleDelete(ele.id)} className='btn btn-danger me-2'>Delete</button>
                        <button onClick={()=>handleEdit(ele.id)} className='btn btn-warning'>Edit</button>
                      </td>
                    </tr>
                )
              })
            }
          </tbody>
        </table> 
          </div>
        </div>   
      </div>
    </div> 
    </>
  )
}

export default App;