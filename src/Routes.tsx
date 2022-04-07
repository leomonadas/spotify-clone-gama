import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Premium from './pages/Premium';

function Routes() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path='/' element={<Home />} />
            <Route path='/premium' element={<Premium />} /> 
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;