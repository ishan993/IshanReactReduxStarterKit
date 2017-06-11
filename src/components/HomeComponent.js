import  React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import { toggleBackground } from '../actions';

const Button = glamorous.button({
    borderRadius: 0,
    padding: 10,
    fontSize: 18,
    color: 'white',
    background: '#00BFFF',
    border: '1px solid lightgrey',
    outline: 'none',
    fontWeight: 100
});

const BodyWrapper = glamorous.div({
    width: '60%',
    margin: 'auto'
});

const TextWrapper = glamorous.div({
    textAlign: 'justify'
});

const ALink = glamorous.a({
    padding: '0 8px',
    display: 'inline-block'
});

class HomeComponent extends Component {

    render(){
        return (
            <BodyWrapper>
                <TextWrapper>
                    <h4>
                        A React and Redux Starter kit built from
                        FacebookIncubator's simple  
                         <ALink href={'https://github.com/facebookincubator/create-react-app'} target={'_blank'}>
                            React Starter kit 
                         </ALink>
                        so I don't have to start from scratch everytime.               
                    </h4>
                    <h4>
                        It includes the following libraries on top of React starter kit:
                    </h4>
                    <ul>
                        <li> Redux (duh!) </li>
                        <li> React-Redux </li>
                        <li> Glamourous (for component styling) </li>
                        <li> React-Router (latest: v4 at the time of writing this) </li>
                    </ul>
                </TextWrapper>
                <p>
                    Click button to change the background color
                </p>
                <Button onClick={this.props.toggleBackground}>
                    Click Me!
                </Button>
            </BodyWrapper>
        );
    }
}



HomeComponent.propTypes = {
    toggleBackground: PropTypes.func.isRequired
};

export default connect( null, { toggleBackground })(HomeComponent);