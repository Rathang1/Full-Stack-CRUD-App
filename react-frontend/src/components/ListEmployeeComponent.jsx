import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link, useParams } from 'react-router-dom'


// const { id } = useParams()


export default class ListEmployeeComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            employees: []
        }
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        localStorage.setItem('myData', id);
        EmployeeService.deleteEmployee(localStorage.getItem('myData'));

    }

    editEmployee(id){
        localStorage.setItem('myData', id);

    }

    componentDidMount(){
        EmployeeService.getEmployee().then((res) => {
            this.setState({employees: res.data});
        });
    }


    render() {
        return (
        <div>
            <h2 className='text-center'>Employees List</h2>
            <div className='row'>
                <Link to="/add-employee">
                <button className='btn btn-primary'>Add Employee</button>
                </Link>
            </div>
            
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                <tr key = {employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                        {/* <Link to="/update-employee" params={{ id: employee.id }}> */}
                                        {/* <Link to={`/update-employee/${employee.id}`}> */}
                                        {/* <Link to={{pathname:"/update-employee", state: { id: employee.id}}}> */}
                                        <Link to={"/update-employees" } >
                                            
                                            <button onClick={()=>this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                        </Link>

                                        <Link to={"/" } >
                                            
                                            <button style ={{marginLeft: "10px"}} onClick={()=>this.deleteEmployee(employee.id)} className="btn btn-danger  ">Delete</button>
                                        </Link>
                                        {/* <a href={'/employee/'+employee.id}><button className="btn btn-info">Update</button></a> */}
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}
