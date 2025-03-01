import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import isEmail from 'validator/lib/isEmail';
// import isPassword from './../../utils/passwordValidation';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
// import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { loginUser } from '../../store/actions/auth';

function Copyright() {
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='https://material-ui.com/'>
                Покемон
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const login = function Login(props) {
    const classes = useStyles();
    const [userData, setUserData] = useState({
        email: {
            value: '',
            validation: false
        },
        password: {
            value: ''
        }
    });
    const [email, password] = [userData.email.value, userData.password.value];

    console.log({ email, password });

    const userEmailHandler = e => {
        let newUserState = { ...userData };
        newUserState.email.value = e.target.value;
        newUserState.email.validation = isEmail(e.target.value);
        setUserData({ ...userData });
    };

    const userPasswordHandler = e => {
        let newUserState = { ...userData };
        newUserState.password.value = e.target.value;
        setUserData(newUserState);
    };

    const submitHandler = async e => {
        e.preventDefault();
        await props.loginUser(email, password);
    };

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Log In
                </Typography>
                <form
                    className={classes.form}
                    noValidate
                    onSubmit={e => submitHandler(e)}
                >
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='Email Address'
                        name='email'
                        autoComplete='email'
                        autoFocus
                        onChange={userEmailHandler}
                    />
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                        onChange={userPasswordHandler}
                    />
                    {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    /> */}
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                    >
                        Log In
                    </Button>
                    {/* <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid> */}
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
};

login.propTypes = {
    loginUser: PropTypes.func.isRequired
};

export default connect(null, { loginUser })(login);
