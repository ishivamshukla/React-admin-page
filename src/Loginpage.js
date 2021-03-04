import React from 'react';
import { Login, LoginForm } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';

const styles = ({
    main: { background: '#333' },
    avatar: {
        background: 'url(//cdn.example.com/background.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: 80,
    },
    icon: { display: 'none' },
});

const CustomLoginForm = withStyles({
    button: { background: '#F15922' },
})(LoginForm);

const CustomLoginPage = props => (
    <Login
        loginForm={<CustomLoginForm />}
        {...props}
    />
);

export default withStyles(styles)(CustomLoginPage);