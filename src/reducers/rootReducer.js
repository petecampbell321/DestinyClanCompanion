import usersReducer from "./usersReducer";

const rootReducer = (state = {}, action) => {
    return {
        users: usersReducer(state.users, action)
    };
}

export default rootReducer;