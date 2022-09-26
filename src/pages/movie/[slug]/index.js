import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from '../../../api'
import Chart from '../../../components/chart'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import { makeStyles } from '@mui/styles';
import { Box, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
    },
    subSectionWrapper: {
        flexGrow: 1
    },
    movieWrapper: {
        flexGrow: 1,
        margin: '40px',
    },
    image: {
        [theme.breakpoints.up('xs')]: {
            width: 300,
        },
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        display: 'inline-block'
    },
    description: {
        fontSize: 14,
        paddingLeft: 4,
        display: 'inline-block'
    },
}));

export default function MovieDetailsModal() {
    const classes = useStyles();
    const [movie, setMovie] = useState(null)
    const [error, setError] = useState(null)
    let { slug } = useParams()

    useEffect(() => {
        getMovies().then(data => {
            let temp = data.filter(movie => movie.name === slug)
            setMovie(temp[0])
        }).catch(err => {
            setError(err)
        })
    }, [slug])

    if (error) {
        <Box>
            {error}
        </Box>
    }
    else if (movie) {
        return (
            <Box className={classes.wrapper}>
                <Header />
                <Box className={classes.movieWrapper}>
                    <Box component='a' href='/'>Back</Box>
                    <Box mt={2} className={classes.subSectionWrapper}>
                        <Box>
                            {<img className={classes.image} src={movie.assetImage} alt='movie-poster' />}
                        </Box>
                        <Box>
                            <Box className={classes.title}>Title:</Box>
                            <Box className={classes.description}>
                                {movie.name}
                            </Box>
                        </Box>
                        <Box>
                            <Box className={classes.title}>provider:</Box>
                            <Box className={classes.description}>
                                {movie.provider}
                            </Box>
                        </Box>
                        <Box>
                            <Box className={classes.title}>Description:</Box>
                            <Box className={classes.description}>
                                {movie.description}
                            </Box>
                        </Box>
                        <Box>
                            <Box className={classes.title}>Genre</Box>
                            <Box>
                                {movie.genre.map(g => <Box key={g} className={classes.description}>{g}</Box>)}
                            </Box>
                        </Box>
                        <Divider />
                    </Box>
                    <Box mt={2}>
                        <Box mt={2}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Box className={classes.title}>Current Views</Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box>
                                        <Box className={classes.title}>Total:</Box>
                                        <Box className={classes.description}>{movie.totalViews["total"]}</Box>
                                    </Box>
                                    <Divider />
                                    <Box>
                                        <Box className={classes.title}>Sky Go:</Box>
                                        <Box className={classes.description}>{movie.totalViews["sky-go"]}</Box>
                                    </Box>
                                    <Divider />
                                    <Box>
                                        <Box className={classes.title}>Now TV:</Box>
                                        <Box className={classes.description}>{movie.totalViews["now-tv"]}</Box>
                                    </Box>
                                    <Divider />
                                    <Box>
                                        <Box className={classes.title}> Peacock:</Box>
                                        <Box className={classes.description}>{movie.totalViews["now-tv"]}</Box>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                        <Box mt={2}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Box className={classes.title}>Previous Views</Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box>
                                        <Box className={classes.title}>Total:</Box>
                                        <Box className={classes.description}>{movie.prevTotalViews["total"]}</Box>
                                    </Box>
                                    <Divider />
                                    <Box>
                                        <Box className={classes.title}>Sky Go:</Box>
                                        <Box className={classes.description}>{movie.prevTotalViews["sky-go"]}</Box>
                                    </Box>
                                    <Divider />
                                    <Box>
                                        <Box className={classes.title}>Now TV:</Box>
                                        <Box className={classes.description}>{movie.prevTotalViews["now-tv"]}</Box>
                                    </Box>
                                    <Divider />
                                    <Box>
                                        <Box className={classes.title}> Peacock:</Box>
                                        <Box className={classes.description}>{movie.prevTotalViews["now-tv"]}</Box>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Box>
                    <Box mt={4}>
                        <Box mb={2} className={classes.title}>Views over the time</Box>
                        <Chart />
                    </Box>
                </Box>
                <Footer />
            </Box>
        );
    }
}

