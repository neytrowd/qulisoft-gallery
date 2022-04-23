import React from 'react';
import './assets/styles/index.scss';
import routes from './constants/routes';
import Page from './layouts/page';
import { Route, Routes } from 'react-router-dom';

function App() {
   return (
      <div className="App">
         <Page title="QuliSoft gallery app">
            <Routes>
               {routes.map((route) => (
                  <Route key={route.path} path={route.path} element={route.component} />
               ))}
            </Routes>
         </Page>
      </div>
   );
}

export default App;
