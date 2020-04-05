import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppNav from './navigation/AppNav';
import * as colors from './data/colors';
import './App.css';

const theme = createMuiTheme({
  palette: {
      primary: {
        main: colors.darkBlue
      },
      secondary: {
        main: colors.darkRed
      },
      error: {
        main: colors.darkRed
      },
      info: {
        main: colors.darkGreen
      },
      success: {
        main: colors.lightGreen
      }
  }
});

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <AppNav />
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;