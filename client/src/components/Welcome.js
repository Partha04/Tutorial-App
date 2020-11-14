import React from 'react'
import {Link} from 'react-router-dom'

export default function Welcome() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid bg-light">
                <div className="container text-center">
                    <h2 className="display-3">Editorial</h2>
                    <p className="lead">Edit and create your own tutorial</p>
                    <hr className="my-2"/>
                    <p className="lead">
                        <Link className="btn btn-primary btn-lg" to="/register" >Register</Link>
                    </p>
                    <p>already have account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    )
}
