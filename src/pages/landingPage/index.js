import { useEffect, useState } from 'react';
import { getMovies } from '../../api'
import MovieCard from '../../components/movieCard'
import SearchBar from '../../components/searchBar';
import Header from '../../components/header'
import Footer from '../../components/footer'
import { makeStyles } from '@mui/styles';
import { Grid, Box, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
    },
    section: {
        flexGrow: 1,
        margin: '40px',
    },
    moviesWrapper: {
        padding: '18px'
    }
}));

function LandingPage() {
    const classes = useStyles();
    const [movies, setMovies] = useState([])
    const [searchResult, setSearchResult] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        getMovies().then(data => {
            setMovies(data)
        }).catch(error => {
            setError(error)
        })
    }, [])
    if (error) {
        <Box>{error}</Box>
    }
    return (
        <Box className={classes.wrapper}>
            <Header />
            <Box className={classes.section}>
                <Box mt={2} mb={6}>
                    <Typography variant='body1'>
                        Lights, camera, action
                    </Typography>
                    <ul>
                        <li>Buy or rent the latest movies straight from the cinema.</li>
                        <li>Sky Store is for everyone. No Sky TV needed, no monthly subscription.</li>
                        <li>It’s all at the touch of a button – you don’t even need to leave your sofa.</li>
                    </ul>

                </Box>
                <Box mt={2} mb={2}>
                    <Typography variant='h4'>
                        Latest Movies & TV
                    </Typography>
                </Box>
                <SearchBar setSearchResult={setSearchResult} movies={movies} />
                {
                    searchResult ?
                        <Grid className={classes.moviesWrapper} container spacing={3}>
                            {searchResult.map((movie) => {
                                return (<Grid key={movie.name} item xs={6} sm={3}>
                                    <MovieCard
                                        movie={movie} />
                                </Grid>)
                            })}
                        </Grid>
                        :
                        <Grid className={classes.moviesWrapper} container spacing={3}>
                            {movies?.map((movie) => {
                                return (<Grid key={movie.name} item xs={6} sm={3}>
                                    <MovieCard
                                        movie={movie} />
                                </Grid>)
                            })}
                        </Grid>
                }
            </Box>
            <Footer />
        </Box>
    );
}

export default LandingPage;
