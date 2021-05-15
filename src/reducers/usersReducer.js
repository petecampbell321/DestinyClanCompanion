const initialUsers = [];

const usersReducer = (users = initialUsers, action) => {
  switch(action.type) {
    case 'GET_USERS': {
      return [
        ...users,
        ...action.payload
      ];
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;