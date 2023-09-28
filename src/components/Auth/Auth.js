// import {
//     Navigate, useLocation
// } from 'react-router-dom';

// export const setToken = (token) => {
//     localStorage.setItem('idToken', token)
// }

// export const getToken = (token) => {
//     return localStorage.getItem('idToken')
// }

// export function RequireToken({children}) {
//     // let auth = fetchToken();
//     let location = useLocation();

//     if(!auth) {
//         return <Navigate to='/' state={{ from: location }} />

//     }
//     return children;
// }