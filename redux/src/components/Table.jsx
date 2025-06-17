import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../features/user/userSlice";


function Table() {

    const {users}=useSelector(state=>state.user);
    const dispatch = useDispatch()

    function handleDelete(id){
      dispatch(deleteUser(id))
    }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-5">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                    users.map((value,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{value.email}</td>
                            <td>{value.password}</td>
                            <td>
                                <button className="btn btn-warning" onClick={()=>handleUpdate(index)}>Edit</button>{" "}
                                <button className="btn btn-danger" onClick={()=>handleDelete(index)} >Delete</button>
                            </td>
                        </tr>
                    ))
                  }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
