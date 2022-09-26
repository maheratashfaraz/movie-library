import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import logo from '../../assets/logo/Sky_logo.png'
import { Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    item: {
        color: '#808080',
        fontSize: 13,
        textDecoration: 'none',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: '12px 16px 16px',
    },
    desktopWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        [theme.breakpoints.down('lg')]: {
            display: 'none',
        },
    },
    mobileMenuWrapper: {
        display: 'none',
        width: '100%',
        [theme.breakpoints.down('lg')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
    },
    rightMenuWrapper: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('lg')]: {
            justifyContent: 'space-between',
            width: '100%'
        },
    },
    mobileMenuBtn: {
        alignSelf: 'flex-end'
    }
}));

const headerLeftItems = [
    {
        title: 'Watch',
        href: 'https://www.sky.com/tv'
    },
    {
        title: 'Glass',
        href: 'https://www.sky.com/glass'
    },
    {
        title: 'Sky Q',
        href: 'https://www.sky.com/tv/sky-q'
    },
    {
        title: 'Broadband',
        href: 'https://www.sky.com/broadband'
    },
    {
        title: 'Mobile',
        href: 'https://www.sky.com/shop/mobile'
    },
    {
        title: 'Business',
        href: 'https://www.sky.com/business/broadband'
    },
    {
        title: 'Deals',
        href: 'https://www.sky.com/deals/featured'
    }
]

const headerRightItems = [
    {
        title: 'My Sky',
        href: 'https://www.sky.com/mysky'
    },
    {
        title: 'Help',
        href: 'https://www.sky.com/help/home'
    },
    {
        title: 'Sign in',
        href: 'https://www.sky.com/signin'
    }
]

const mobileMenu = [
    {
        title: 'My Sky',
        href: 'https://www.sky.com/mysky'
    },
    {
        title: 'Help',
        href: 'https://www.sky.com/help/home'
    },
    {
        title: 'Sign in',
        href: 'https://www.sky.com/signin'
    },
    {
        title: 'Broadband',
        href: 'https://www.sky.com/broadband'
    },
    {
        title: 'Mobile',
        href: 'https://www.sky.com/shop/mobile'
    },
    {
        title: 'Business',
        href: 'https://www.sky.com/business/broadband'
    },
    {
        title: 'Deals',
        href: 'https://www.sky.com/deals/featured'
    }
]

export default function Header() {
    const classes = useStyles();
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <Paper elevation={24}>
            <Box className={classes.container}>
                <Box className={classes.rightMenuWrapper} >
                    {!showMobileMenu && <Box display='flex'
                        flexDirection='row'
                        justifyContent='center'
                        alignItems='center'
                        mr={10}
                    >
                        <img src={logo}
                            alt='sky logo'
                            width='44px'
                            height='27px' />
                    </Box>}
                    <Box className={classes.mobileMenuWrapper}>
                        <Box className={classes.mobileMenuBtn}>
                            <IconButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                {showMobileMenu ? <CloseIcon /> : <MenuIcon />}
                            </IconButton>
                        </Box>
                        <Box display='flex' flexDirection='column'>
                            {
                                showMobileMenu && mobileMenu.map(item => <Box key={item.title} component='a' href={item.href} p={2} className={classes.item}>{item.title}</Box>)
                            }
                        </Box>
                    </Box>
                    <Box className={classes.desktopWrapper} width={500}>
                        {
                            headerLeftItems.map(item => <Box key={item.title} component='a' href={item.href} className={classes.item}>{item.title}</Box>)
                        }
                    </Box>
                </Box>
                <Box className={classes.desktopWrapper} width={160}>
                    {
                        headerRightItems.map(item => <Box key={item.title} component='a' href={item.href} className={classes.item}>{item.title}</Box>)
                    }
                </Box>
            </Box >
        </Paper >
    );
}

