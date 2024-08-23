import { useEffect, useState } from "react";
import { useNavigate , useLocation} from "react-router-dom";
import Loading from "../Loading/Loading";




export default function LoadingToRedirect({path ="/"}){
    //state
    const [count, setCount] =  useState(10);
    //hooks
    const navigate = useNavigate();
    const location  = useLocation();
   


    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
        }, 1000);
    
        // redirect once count is equal to 0
        count === 0 && navigate(`${path}`, {
            state: location.pathname,
        });
    
        //cleanup
        return () => clearInterval(interval);
    
    }, [count, navigate, location.pathname, path]);  

    return <Loading/>
}