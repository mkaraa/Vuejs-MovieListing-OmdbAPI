import Home from './components/Home';
import Movies from './components/Movies';
import Detail from './components/Detail';

const routes = [{
        path: '/',
        component: Home
    }, {
        path: '/movies/:title',
        component: Movies
    },
    {
        path: '/detail/:id',
        component: Detail
    }
];

export default routes;