// route map 
import React from 'react';
// import { Route } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UserListPage'

// export default () => {
//     return (
//         <div>
//             <Route exact path="/" component={Home}/>
//             <Route path="/users" component={UsersList}/>
//         </div>
//     )
// }

export default [
    {
        ...App,  // no path means the component will be shown in every page
        routes: [
            {
                ...HomePage,
                path: '/',
                exact:true
            },
            {
                ...UsersListPage,
                path: '/users'
            }
        ]
    }
];
