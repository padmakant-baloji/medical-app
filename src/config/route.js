import Home from '../Container/Home';
import Login from '../Container/Login/Login';

const route = [
    {
        path: '/',
        comp: Home,
        exact: true
    },
    {
        path: '/login',
        comp: Login,
        exact: true
    }
];

export default route;