import React, { useState,useEffect } from 'react';
import { Switch, Route, Redirect , BrowserRouter} from 'react-router-dom';
import Template from './dumb/Template';
import LanguageProvider from '../LanguageProvider';
import English from '../lang/en.json';
import German from '../lang/ger.json';
import { getLanguage } from './utils';

import Home from '../components/Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Showroom from './Pages/Showroom';
import PaBundles from './Pages/PaBundles';
import MonitoringBundle from './Pages/MonitoringBundle';
import Powerack from './Pages/Powerack';
import Laser from './Pages/Laser';
import Event from './Pages/Event';
import Impressum from './Pages/Impressum';

const App = () => {
  const [lang, setLang] = useState(getLanguage());
  const [openToast, setOpenToast] = useState({ open: false, severity: '', message: '' });
  const messages = {
    de: German,
    en: English,
  };
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <LanguageProvider locale={lang} messages={messages[lang]}>
      <BrowserRouter>
        <Switch>
          <Route path="/impressum" component={Impressum} />
          <Template setLang={setLang} lang={lang} openToast={openToast} setOpenToast={setOpenToast}>
            <Route exact path="/services" render={() => <Services setOpenToast={setOpenToast} lang={lang} />} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/showroom" component={Showroom} />
            <Route exact path="/paBundles" render={() => <PaBundles setOpenToast={setOpenToast} lang={lang} />} />
            <Route
              exact
              path="/monitoringBundle"
              render={() => <MonitoringBundle setOpenToast={setOpenToast} lang={lang} />}
            />
            <Route exact path="/powerack" render={() => <Powerack setOpenToast={setOpenToast} lang={lang} />} />
            <Route exact path="/laser" render={() => <Laser setOpenToast={setOpenToast} lang={lang} />} />
            <Route exact path="/event" component={Event} />
            <Route exact path="/" component={Home} />
            <Route render={() => <Redirect to={{ pathname: '/' }} />} />
          </Template>
        </Switch>
        </BrowserRouter>
      </LanguageProvider>
    </>
  );
};

export default App;
