import React from 'react';
import 'normalize.css';
import 'antd/dist/antd.css';
import './styles/styles.scss';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { Button } from 'antd';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/login">
          <Button type="primary">Login</Button>
        </NavLink>
        <NavLink to="/signup">
          <Button type="danger">Registration</Button>
        </NavLink>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </BrowserRouter>
    </div>
  );
}
// export default App;
export default App;
