import './App.css';
import * as React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { flatten } from 'flat';

import { HeaderComponent } from './components/header/headerComponent';
import { ContactPage } from './components/content/pages/contactPage';
import { HomePage } from './components/content/pages/homePage';
import { AmenitiesPage } from './components/content/pages/amenitiesPage';
import { FooterComponent } from './components/content/footer/footerComponent';
import { messagesEnglish } from './lib/intl/en-US';


const App = () => (
  <IntlProvider locale="en-US" messages={flatten(messagesEnglish)}>
    <div className="App">
      <div className="body-main">
        <BrowserRouter>
            <div className="body-header">
                <HeaderComponent />
            </div>
            <div className="body-meat">
                <div className="page-body">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path='/amenities' element={<AmenitiesPage />} />
                    <Route path='/contact' element={<ContactPage />} />
                  </Routes>
                </div>
                <div className="page-footer">
                    <FooterComponent />
                </div>
            </div>
            </BrowserRouter>
        </div>
    </div>
  </IntlProvider>
);

export default App;
