import React, {Component} from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom'
import Nav from './Nav.js';
import * as Pages from './Pages.js';

class Main extends Component{
    render(){
        return(
            <React.Fragment>
                <Switch>
                    <div className="container-fluid">
                        <Nav />
                        <div className="pages">
                            <Route path="/laskateco/home" component={Pages.Home} />
                            <Route path="/laskateco/news" component={Pages.News}/>
                            <Route path="/laskateco/about" component={Pages.About} />
                            <Route path="/laskateco/products" component={Pages.Products} />
                            <Route path="/laskateco/resources" component={Pages.Resources} />
                            <Route path="/laskateco/shop" component={Pages.Shop} />
                            <Route path="/laskateco/contact" component={Pages.Contact} />
                        </div>
                    </div>
                </Switch>
            </React.Fragment>
        );
    }
}

export default Main;