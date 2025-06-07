import {Navigate} from 'react-router-dom'

const Protected_Routes = ({isAuthenticated, children}) =>{
    return isAuthenticated ? children : <Navigate to="login"/>
}


export default Protected_Routes