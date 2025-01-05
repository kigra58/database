
interface IAuth{
    isLogin:boolean,
    first_name:string;
    last_name:string;
    email:string;
    database:any[]
}


export const initialState:IAuth={
    isLogin:false,
    first_name:"",
    last_name:"",
    email:"",
    database:[]
}

export const authReducer=(state=initialState,{type,payload}:{payload:IAuth,type:"AUTH"})=>{
    if(type==="AUTH"){
         return payload;
    }
    return state
};