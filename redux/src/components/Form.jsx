import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/user/userSlice";

function Form() {

    const [obj, setObj] = useState({});
    const dispatch = useDispatch();
    

    const handleChange = (e)=>{
        let { name,value} = e.target;
        let data = {...obj,[name]:value};
        setObj(data);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch (createUser(obj))
        setObj({});
    }


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form method="post" onSubmit={handleSubmit}>
                <h2 className="mt-5">Sign-Up</h2>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  onChange={handleChange}
                  name="email"
                  value={obj.email || ""}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  onChange={handleChange}
                  name="password"
                  value={obj.password || ""}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
