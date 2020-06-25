import React, {Component, Fragment} from 'react';
import Menu from "./components/Menu";
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './routes/AppRoute';

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                <AppRoute/>

                </BrowserRouter>
            </Fragment>
    )
        ;
    }
}

export default App;
