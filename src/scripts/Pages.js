import React, {Component} from 'react';
import heroImage from '../images/laskatecobuilding.jpg';
import decksImage from '../images/decks.jpg';
import skatesImage from '../images/skates.jpg';

export class Home extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <img src={heroImage} className="heroImage" alt="L.A Skate Company" />
                </div>
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <h2>The oldest skateshop in Los Angeles and the largest selection of skateboards in the world.</h2>
                    </div>
                </div>
                <div className="row bg-light py-5 text-center">
                    <div className="col-md-6">
                        <img src={decksImage} className="img-fluid w-75" alt="Decks"/>
                        <p className="h5 mt-2">Select from thousands of 7-ply Hard Rock Maple name brand skateboards starting at $39.99.
                        </p>
                        <button className="btn btn-primary">Learn more</button>
                    </div>
                    <div className="col-md-6">
                        <img src={skatesImage} className="img-fluid w-75" alt="Skates" />
                        <p className="h5 mt-2">L.A. Skate primarily carriers sure grip rollerskates as the manfacturer is a 3rd generation family owned L.A business.
                        </p>
                        <button className="btn btn-primary">Learn more</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export class News extends Component{
    render(){
        return(
            <React.Fragment>
                <h1>News</h1>
            </React.Fragment>
        );
    }
}

export class About extends Component{
    render(){
        return(
            <React.Fragment>
                <h1>About</h1>
            </React.Fragment>
        );
    }
}

export class Products extends Component{
    render(){
        return(
            <React.Fragment>
                <h1>Products</h1>
            </React.Fragment>
        );
    }
}

export class Resources extends Component{
    render(){
        return(
            <React.Fragment>
                <h1>Resources</h1>
            </React.Fragment>
        );
    }
}

export class Shop extends Component{
    render(){
        return(
            <React.Fragment>
                <h1>Shop</h1>
            </React.Fragment>
        );
    }
}

export class Contact extends Component{
    render(){
        return(
            <React.Fragment>
                <h1>Contact</h1>
            </React.Fragment>
        );
    }
}

