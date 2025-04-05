import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User 1"
});

export default UserContext;