import React, { useContext } from 'react';
import './styles/scss/index.scss';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from './view/pages/Home/Home';
import { ROUTE } from './http/routes';
import { EmailConfirmation } from './view/pages/EmailConfirmation';
import { WrapperPages } from './view/components/templates/WrapperPages';
import { Header } from './view/components/organisms/Header';
import { Footer } from './view/components/organisms/Footer';
import { LoginRegister } from './view/pages/User/LoginRegister';
import { ConvocatoryDetails } from './view/pages/Convocations/ConvocatoryDetails';
import { ConvocatoryList } from './view/pages/Convocations/ConvocatoryList';
import { ConvocatoryRegister } from './view/pages/Convocations/ConvocatoryRegister';
import { Context } from './Context';
import { FrequentlyAskedQuestions } from './view/pages/FrequentlyAskedQuestions';
import { Esal } from './view/pages/Esal';
import { CookiesPolicy } from './view/pages/CookiesPolicy'
import { LegalAdvice } from './view/pages/LegalAdvice';

const App: React.FC = () => {
  const { isAuth } = useContext(Context);

  return (
    <Router>
      <div className="App">
        <WrapperPages>
          <Header />
          <Switch>
            <Route path={ROUTE.convocatories.list} component={ConvocatoryList} />
            <Route path={ROUTE.convocatories.details} component={ConvocatoryDetails} />
            <Route path={ROUTE.convocatories.register} component={ConvocatoryRegister} />
            <Route exact path={ROUTE.home} component={Home} />
            <Route exact path={ROUTE.loginRegister} component={LoginRegister} />
            <Route exact path={ROUTE.faq} component={FrequentlyAskedQuestions} />
            <Route exact path={ROUTE.organizations.register} component={Esal} />
            <Route path={ROUTE.cookiesPolicy} component={CookiesPolicy} />
            <Route path={ROUTE.legalAdvice} component={LegalAdvice} />
            <Route path={ROUTE.email.confirmation} component={EmailConfirmation} />
            {!isAuth && <Redirect from={ROUTE.home} to={ROUTE.loginRegister} />}
            {isAuth && <Redirect from={ROUTE.loginRegister} to={ROUTE.home} />}
          </Switch>
          <Footer />
        </WrapperPages>
      </div>
    </Router>
  );
};

export default App;
