import React from 'react';
import './Person.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Person = (props) => {
    // console.log(props.person);
    const {name,email,phone,img,income,address} = props.person
    return (
        <div>
            <div className='single-user-info'>
            <div className="user-img">
                <img src={img} alt=""/>
        </div>
            <div className="user-info">
                <h4>Name: <span>{name}</span>  </h4>
                <h4>Email: <span>{email}</span>  </h4>
                <h4>Phone: <span>{phone}</span>  </h4>
                <h4> Yearly Income: <span> $ {income}</span> </h4>
                <h4>Address: <span> {address.city}</span> </h4>
                <button onClick={()=> props.addUser(props.person) }> <FontAwesomeIcon icon={faUserPlus}/> Add User </button>
            </div>
            </div>
        </div>
    );
};

export default Person;