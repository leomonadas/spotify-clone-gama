import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';

function Routes() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} /> 
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;