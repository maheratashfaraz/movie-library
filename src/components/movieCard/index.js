import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignText: 'center'
    },
    image: {
        width: '100%',
        maxWidth: '300px'
    },
    noImageWrapper: {
        width: '100%',
        height: '100%'
    },
    movieTitle: {
        color: 'black',
        fontSize: 14,
        marginTop: 8
    }
}));

export default function Movie({ movie }) {
    const classes = useStyles();
    const { name, assetImage } = movie

    return (
        <Box className={classes.root}>
            {<img className={classes.image} src={assetImage} alt='movie-poster' />}
            <Box component='a' href={`movie/${name}`} className={classes.movieTitle}>{name}</Box>
        </Box>
    );
}

