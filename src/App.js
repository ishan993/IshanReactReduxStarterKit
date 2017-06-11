import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ContentRouter from './components/ContentRouter';
import glamorous from 'glamorous';

const AppWrapper = glamorous.div({
    height: '100vh',
    textAlign: 'center'
  }, (props) =>({
    background: props.isBackgroundBlue ? 'aliceblue' : 'papayawhip'
  })
);

class App extends Component {
  render() {
    return (
      <AppWrapper isBackgroundBlue={this.props.isBackgroundBlue}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React + Redux starter kit</h1>
        </div>
        <BrowserRouter>
          <ContentRouter />
        </BrowserRouter>
      </AppWrapper>
    );
  }
}

App.propTypes = {
    isBackgroundBlue: PropTypes.bool.isRequired
};

function mapStateToProps(state){
    return ({
        isBackgroundBlue: state.displayProps.isBackgroundBlue
    });
}

export default connect(mapStateToProps)(App);
