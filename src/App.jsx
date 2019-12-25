import React from 'react';
import 'normalize.css';
import 'antd/dist/antd.css';
import './styles/styles.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login';
import SignUp from './components/SignUp';

const mapStateToProps = state => {
  return {
    myState: state.ku,
  };
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </BrowserRouter>
    </div>
  );
}
// export default App;
export default connect(mapStateToProps)(App);
