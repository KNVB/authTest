import AdminPlatform from './AdminPlatForm';
import Cookies from 'js-cookie';
import { Redirect } from "react-router-dom";
function SecuredRoute(props){
    console.log(document.cookie);    
    console.log(Cookies.get('isAdmin'));
    console.log("Secured Route");
    console.log(props.location);
    if (Cookies.get('isAdmin')===undefined){
        return  <Redirect to='/' /> 
    } else {
        return  <Redirect to={props.pathName}/> 
    }
}
export default SecuredRoute