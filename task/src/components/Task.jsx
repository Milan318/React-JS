import React, { useState } from 'react'


function Task() {
    
    const [tasks,setTask]=useState([
        {
            id:1,
            name:'HTML & CSS'
        },
        {
            id:2,
            name:'Bootstrap'
        },
        {
            id:3,
            name:'Javascript'
        },
        {
            id:4,
            name:'Node'
        },
        {
            id:5,
            name:'React'
        }
    ]);

    const handleDelete=(id)=>{
        let data = tasks.filter((task,index)=>{
            return task.id!=id;
        })
        setTask(data);
    }

  return (
    <>
      <div className='container'>
        <div className="row mt-4 justify-content-center fw-bold">
            <div className="col-md-6">
                 <h2>Tasks</h2>
                 <table className='table caption-top'>
                    <caption>Tasks Data</caption>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Task Name</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task,index)=>(
                                <tr key={task.id}>
                                    <td>{index+1}</td>
                                    <td>{task.name}</td>
                                    <td>
                                        <button onClick={()=>handleDelete(task.id)} className='btn btn-danger'>Delete</button>
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
  )
}

export default Task
