import { createMuiTheme } from '@material-ui/core/styles';


const headerColor = "#130040";

export default createMuiTheme({
    palette: {
        common: {
            headerColor : `${headerColor}`,
            siderColor : "#a8a5b0",
            cartBg : "#e6e3e4",
            cartContrast: "#d6d6d6"
        },
        primary: {
            main: `${headerColor}`
        },
    },
    typography: {
        h6: {
            fontFamily: 'Source Sans Pro , sans-serif',
            color: `${headerColor}`,
            fontSize: '16px',
            fontWeight: 800
            
        },
        h5: {
            fontFamily: 'Source Sans Pro , sans-serif',
            color: `${headerColor}`,
            fontSize: '20px',
            fontWeight: 800
        },

        h4 : {
            fontFamily: 'Source Sans Pro, sans-serif',
            color: `${headerColor}`,
            fontWeight: '200'
        },
        subtitle1 : {
            fontFamily: 'Source Sans Pro , sans-serif',
            fontSize: '18px'
        },
        body2: {
            fontFamily: 'Source Sans Pro , sans-serif',
            fontSize: '12px'
        },
        body1: {
            fontFamily: 'Source Sans Pro , sans-serif',
            fontSize: '10px'
        },
        button: {
            textTransform: 'none',
            textSizeAdjust: 'auto',
        },
    },
    
});