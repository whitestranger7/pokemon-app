import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { registerUser } from './../../store/actions/auth';

function Copyright() {
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='/#'>
                Покемон
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh'
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'dark'
                ? theme.palette.grey[900]
                : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    paper: {
        margin: theme.spacing(8, 4),
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

const signUp = function SignUp(props) {
    const classes = useStyles();

    const [userData, setUserData] = useState({
        firstName: {
            value: ''
        },
        lastName: {
            value: ''
        },
        email: {
            value: ''
        },
        password: {
            value: ''
        }
    });

    const [firstName, lastName, email, password] = [
        userData.firstName.value,
        userData.lastName.value,
        userData.email.value,
        userData.password.value
    ];

    const userFirstNameHandler = e => {
        let newUserState = { ...userData };
        newUserState.firstName.value = e.target.value;
        setUserData(newUserState);
    };

    const userLastNameHandler = e => {
        let newUserState = { ...userData };
        newUserState.lastName.value = e.target.value;
        setUserData(newUserState);
    };

    const userEmailHandler = e => {
        let newUserState = { ...userData };
        newUserState.email.value = e.target.value;
        setUserData(newUserState);
    };

    const userPasswordHandler = e => {
        let newUserState = { ...userData };
        newUserState.password.value = e.target.value;
        setUserData(newUserState);
    };

    const submitHandler = async e => {
        e.preventDefault();
        await props.registerUser(firstName, lastName, email, password);
    };

    console.log(userData);

    return (
        <Grid container component='main' className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
            >
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Sign Up
                    </Typography>
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={e => submitHandler(e)}
                    >
                        <TextField
                            autoComplete='fname'
                            name='firstName'
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='firstName'
                            label='First Name'
                            autoFocus
                            onChange={userFirstNameHandler}
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='lastName'
                            label='Last Name'
                            name='lastName'
                            autoComplete='lname'
                            onChange={userLastNameHandler}
                        />
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
                        <FormControlLabel
                            control={
                                <Checkbox value='remember' color='primary' />
                            }
                            label='Remember me'
                        />
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                            className={classes.submit}
                        >
                            Sign Up
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
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
};

signUp.propTypes = {
    registerUser: PropTypes.func.isRequired
};

export default connect(null, { registerUser })(signUp);
