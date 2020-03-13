import React from 'react';
import './Request.css'

const Request = (props) => {
    const request = props.request;
    const totalIncome = request.reduce((total,income)=> total+income.income,0);
    
    return (
        <div>
            <h3 className="title">Your Request Summary :</h3>
            <h4>Total Request: <span>{request.length}</span></h4>
            <h4>Users Total Yearly Income: <span>$ {totalIncome} </span></h4>
            <div className="addUser-list">
                <h3 className="title">Users List: </h3>
                {
                    request.map(user => <ol> <img className="user-list-img" src={user.img} alt=""/> <span  className='user-name'>{user.name}</span>  </ol> )
                }
            </div>
        </div>
    );
};

export default Request;