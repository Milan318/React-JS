import React from 'react'

function Form() {
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-md-6 mx-auto">
                <h2 className='mt-3'>Login</h2>
             <form className='mt-3'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
             </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Form
