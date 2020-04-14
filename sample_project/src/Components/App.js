import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Layout/Header';
import Roles from './Contents/Roles';
import Activities from './Contents/Activites';
import Search from './Contents/Search'
import Footer from './Layout/Footer';

export default function _() {

  return (
    <React.Fragment>
      <CssBaseline />

      <Header />

      <main>
        <Roles /> 

        <Activities /> 

        <Search />
      </main>

      <Footer />

    </React.Fragment>
  );
}