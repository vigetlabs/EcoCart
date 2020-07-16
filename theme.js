import { createMuiTheme } from '@material-ui/core/styles';

// See https://material-ui.com/customization/globals/

export default createMuiTheme({
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
      main: '#0076D2',
    },
    secondary: {
      main: '#D68A1A',
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
