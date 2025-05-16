import React, { useState } from 'react'

function App() {
   
     const [employee, setEmployee] = useState({});
     const [empData, setEmpData] = useState([]);

     const handleChange = (e)=>{
      const {name,value}= e.target
      let data = {...employee,[name]:value};
      setEmployee(data);
     }

     const handleSubmit = (e)=>{
      e.preventDefault();
      let data = [...empData,{...employee,id:Date.now()}];
      setEmpData(data);
     }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
          <form method="post" onSubmit={handleSubmit}> 
          <h2 className='text-center'>EMPLOYEE DATA</h2>
                <div className="mb-3">
                  <label htmlFor="ename" className="form-label">Employee Name</label>
                  <input type="text" className="form-control" id="ename" name='ename' onChange={handleChange}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="salary" className="form-label">Salary</label>
                  <input type="text" className="form-control" id="salary" name='salary' onChange={handleChange}/>
                </div>
                <div className="mb-3 form-check-inline">
                  <input type="checkbox" className="form-check-input" id="count" />
                  <label className="form-check-label" htmlFor="count">Frist</label>
                </div>
                <div className="mb-3 form-check-inline">
                  <input type="checkbox" className="form-check-input" id="count" />
                  <label className="form-check-label" htmlFor="count">Second</label>
                </div>
                <div className="mb-3 form-check-inline">
                  <input type="checkbox" className="form-check-input" id="count" />
                  <label className="form-check-label" htmlFor="count">Disabled</label>
                </div><br />
                <button type="submit" className="btn btn-primary">Add Data</button>
              </form>     
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <table className='table caption-top mt-3'>
              <caption>
                <h2 className='text-center'>DATA</h2>
              </caption>
              <thead>
                <tr>
                  <th>SrNo</th>
                  <th>Employee Name</th>
                  <th>Salary</th>
                  <th>Count</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                   {
                    empData.map((value,index)=>{
                      const {ename,salary}= value
                      return(
                        <tr key={index}>
                          <td>{index+1}</td>
                          <td>{ename}</td>
                          <td>{salary}</td>
                          <td></td>
                          <td>
                            <button className='btn btn-danger'>Delete</button>{" "}
                            <button className='btn btn-warning'>Edit</button>
                          </td>
                        </tr>
                      );
                    })
                   }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
