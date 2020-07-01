import React from 'react';
import './styles/scss/index.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { ROUTE } from './utils/routes';
import { EmailConfirmation } from './pages/EmailConfirmation';
import { WrapperPages } from './components/templates/WrapperPages';
import { Header } from './components/organisms/Header';
import { Footer } from './components/organisms/Footer';
import { LoginRegister } from './pages/LoginRegister';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <WrapperPages>
          <Header/>
          <Switch>
            <Route exact path={ROUTE.home} component={Home}/>
            <Route exact path={ROUTE.loginRegister} component={LoginRegister}/>
            <Route path={ROUTE.email.confirmation} component={EmailConfirmation}/>
          </Switch>
          <Footer/>
        </WrapperPages>
      </div>
    </Router>
  );
};

export default App;
