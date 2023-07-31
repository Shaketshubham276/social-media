import {createContext,useReducer} from "react";
import AuthReducer from "./AuthReducer"
const INITIAL_STATE={
    user:{
        _id:"64550e69c72ef829eca18a28",
        username:"Shaket",
        email:"shaketshubham276@gmail.com",
        profilePicture:"person/1.jpg",
        coverPicture:"",
        followers:[],
        followings:[],
        isAdmin:false
    },
    isFetching:false,
    error:false
};
export const AuthContext=createContext(INITIAL_STATE)

export const AuthContextProvider=({children})=>{
    const [state,dispatch]=useReducer(AuthReducer,INITIAL_STATE)
    return (
        <AuthContext.Provider value={{user:state.user,isFetching:state.isFetching,
        error:state.error,
        dispatch,
        }}>
            {children}
        </AuthContext.Provider>

    )
}