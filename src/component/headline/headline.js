import React, { Component } from 'react';

class Headline extends Component {

    constructor(props){
        super(props);
    }
    render(){

        const { header, desc } = this.props;

        if(!header){
            return null;
        }
        return (
            <div data-automation-id="HeadlineComponent">
                <h1 data-automation-id="header">
                    {header}</h1>
                <p data-automation-id="desc">
                    {desc}</p>
            </div>
        )
    }
}

export default Headline;