import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
    }
}));

function ErrorPage() {
    const classes = useStyles();

    return <Box className={classes.wrapper}>
        <Header />
        <Box>
            ERROR! PAGE NOT FOUND
        </Box>
        <Footer />
    </Box >
}

export default ErrorPage
