import React from 'react';
import {connect} from 'react-redux';
import User from './User';
import axios from "axios";
import {store} from "../app/store";
import getUsers from "../actions/userActions/getUsers";

function getBungieTest() {
    axios.get('http://localhost:3000/bungietest')
        .catch(function (error) {
            console.log('Error status code: ' + error.response.status);
            console.log(error.message);
            console.log(error.response.headers)
            console.log(error.response.data.Message);
        })
        .then(response => {
            console.log(response.data);
            store.dispatch(getUsers(response.data.Response));
        });
}

const UserList = (props) => {
    return (
        <div>
            {props.users && props.users.map((user) => <User key={user.membershipId} {...user} />)}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps)(UserList);