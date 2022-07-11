import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';
// import { useNavigate } from 'react-router-dom';

export default class CreateEmployeeComponent extends Component {
  
    constructor(props){
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
            
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        // this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e) => {

        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId:this.state.emailId};

        EmployeeService.createEmployee(employee);
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
                                  
                                  <Link to="/">
                                    <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
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
