const getUsers = (users) => {
    return {
        type: 'GET_USERS',
        payload: users
    };
};

export default getUsers;