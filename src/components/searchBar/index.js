import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Paper } from '@mui/material';
import { InputBase } from '@mui/material';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        width: '100%',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    searchBar: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    }
}));

export default function SearchBar({ setSearchResult, movies }) {
    const classes = useStyles();
    const [input, setInput] = useState()

    const handleClick = (e) => {
        e.preventDefault()
        if (input === '') {
            setSearchResult(null)
        } else {
            setSearchResult(movies.filter(movie => (movie.name.toLowerCase()).includes(input)))
        }
    }

    return (
        <div className={classes.root}>
            <Paper component="form" type="submit" className={classes.searchBar}>
                <InputBase
                    className={classes.input}
                    placeholder="Movie name..."
                    value={input}
                    onInput={e => setInput(e.target.value)}
                />
                <IconButton className={classes.iconButton} aria-label="search" onClick={handleClick}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    );
}
