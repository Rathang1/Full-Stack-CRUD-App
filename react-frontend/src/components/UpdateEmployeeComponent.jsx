import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';

export default class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: localStorage.getItem('myData'),
            firstName: '',
            lastName: '',
            emailId: ''
            
        }

        // const { id } = useParams();

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        // this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateEmployee1 = this.updateEmployee1.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(localStorage.getItem('myData')).then( (res) =>{
            let employee = res.data;
            this.setState({firstName: employee.firstName,
                lastName : employee.lastName,
                emailId : employee.emailId})
        })
    }

    updateEmployee1 = () => {

        // e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId:this.state.emailId};
        console.log(employee);

        EmployeeService.updateEmloyee(employee,localStorage.getItem('myData'));
        // e.preventDefault();
    }

    cancel(){
        this.props.history.push('/employees');
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({emailId: event.target.value});
    }

  
    render() {
    return (
      <div>
          <h1>
              <div className='container'>
                  <div className='row'>
                      <div className='card col-md-6 offset-md-3'>
                          <h3 className='text-center'>Add Employee</h3>
                          <div className='card-body'>
                              <form>
                                  <div className='form-group'>
                                      <lable>First Name</lable>
                                      <input placeholder='First Name' name='firstName' className='fom-control'
                                      value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                  </div>
                                  <div className='form-group'>
                                      <lable>Last Name</lable>
                                      <input placeholder='Last Name' name='lastName' className='fom-control'
                                      value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                  </div>
                                  <div className='form-group'>
                                      <lable>Email Id</lable>
                                      <input placeholder='Email Address' name='emailId' className='fom-control'
                                      value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                  </div>
                                  {/* <button className='btn btn-success' onClick={this.saveEmployee}>Save</button> */}
                                  
                                  <Link to="/employees">
                                    <button className='btn btn-success' onClick={this.updateEmployee1}>Update</button>
                                  </Link>

                                  <Link to="/">
                                    <button className='btn btn-danger' style={{marginLeft: "10px"}}>Cancel</button>
                                  </Link>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </h1>
      </div>
    )
    }
}
