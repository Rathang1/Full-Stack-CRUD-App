import React, { Component } from 'react'

export default class HeaderComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
        <div>
            <header>
                <nav className='navbar navbar-expand.md navbar-dark bg-dark'>
                    <div><a href="https://github.com/Rathang1/Full-Stack-CRUD-App" className='navbar-brand'>Employee Management App</a></div>
                    <div><a href="https://rathang.tech" className='navbar-brand'>My Portfolio</a></div>
                </nav>
            </header>
        </div>
        )
    }
}
