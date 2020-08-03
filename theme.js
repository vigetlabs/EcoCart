import './fonts.css';
import { createMuiTheme } from '@material-ui/core/styles';

// See https://material-ui.com/customization/globals/

const theme = createMuiTheme({

  typography: {
    h1: {
      fontFamily: 'Karla',
      fontSize: 50,
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Karla',
      fontSize: 50,
    },
    h3: {
      fontFamily: 'Karla',
      fontSize: 40,
    },
    h4: {
      fontFamily: 'Karla',
    },
    h5: {
      fontFamily: 'Rubik',
    },
    h6: {
      fontFamily: 'Rubik',
    },
    subtitle1: {
      fontFamily: 'Rubik',
      fontSize: 25,
    },
    subtitle2: {
      fontFamily: 'Rubik',
      fontSize: 25,
    },
    body1: {
      fontFamily: 'Rubik',
      fontSize: 20,
    },
    body2: {
      fontFamily: 'Rubik',
    },
    button: {
      fontFamily: 'Rubik',
    },
    fontFamily: '"Rubik", "Arial", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },

  palette: {
    background: {
      default: '#F6F9FC',
      paper: '#FFFFFF',
    },
    error: {
      main: '#FF000B',
    },
    divider: 'rgb(0,0,0)',
    primary: {
      // main: '#0076D2',
      main: '#16B545',
      contrastText: 'white',
    },
    secondary: {
      // main: '#D68A1A',
      main: '#B00020',
    },
    text: {
      disabled: '#848495',
      hint: '#848495',
      icon: '#45455C',
      primary: '#32325D',
      secondary: '#545470',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        // This just needs to be above half the button's height
        borderRadius: 0,
        fontWeight: 400,
      },
    },
  },
});

export default theme;
