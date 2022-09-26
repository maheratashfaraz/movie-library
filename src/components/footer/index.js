import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Box, Paper, Typography } from '@mui/material';
import logo from '../../assets/logo/Sky_logo.png'

const useStyles = makeStyles((theme) => ({
    item: {
        color: '#808080',
        fontSize: 13,
        textDecoration: 'none',
    },
    container: {
        padding: '12px 16px 16px',
    },
    moviesWrapperMobile: {
        [theme.breakpoints.up('xs')]: {
            display: 'none'
        },
    },
    moviesWrapperDesktop: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    }
}));

const footerItems = [
    {
        title: 'Privacy policy',
        href: 'https://www.sky.com/help/articles/sky-privacy-and-cookies-notice'
    },
    {
        title: 'Accessibility',
        href: 'https://www.skyaccessibility.sky'
    },
    {
        title: 'Site map',
        href: 'https://www.sky.com/sitemap'
    },
    {
        title: 'Contact us',
        href: 'https://www.sky.com/help/articles/contacting-sky'
    },
    {
        title: 'Complaints',
        href: 'https://www.sky.com/help/articles/sky-customer-complaints-code-of-practice/'
    },
    {
        title: 'Sky Group',
        href: 'https://www.skygroup.sky/'
    },
    {
        title: 'Store locator',
        href: 'https://www.sky.com/shop/store-locator'
    }
]

export default function Footer() {
    const classes = useStyles();

    return (
        <Paper elevation={24}>
            <Box display='flex' flexDirection='row' className={classes.container}>
                <Box display='flex'
                    flexDirection='row'
                    justifyContent='center'
                    alignItems='center'
                >
                    <img src={logo} alt='sky logo'
                        width='44px'
                        height='27px' />
                </Box>
                <Box ml={3} mr={9}
                    display='flex'
                    flexDirection='row'
                    justifyContent='center'
                    alignItems='center'>
                    <Typography variant='caption' noWrap>© 2022 Sky UK</Typography>
                </Box>
                <Grid container={true} spacing={1} maxWidth={1200}>
                    {
                        footerItems.map(item => <Grid key={item.title} item xs={6} sm={3} lg={1}> <Box component='a' href={item.href} className={classes.item}>{item.title}</Box></Grid>)
                    }
                </Grid>
            </Box >
        </Paper >
    );
}

