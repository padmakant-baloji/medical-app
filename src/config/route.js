import Home from '../Container/Home';
import Login from '../Container/Login/Login';

const route = [
    {
        path: '/home',
        comp: Home,
        exact: true
    },
    {
        path: '/',
        comp: Login,
        exact: true
    }
];

export default route;