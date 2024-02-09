import { createContext } from "react";

const UserContext = createContext({
    userData : {
        "name" : "initial name",
        "email" : "initial email"
    }
})

export default UserContext;