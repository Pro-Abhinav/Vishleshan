import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

import { sendVideoData } from '../../actions/pitchAnalysis'
import { Typography, TextField, Button, Grid, Paper, CircularProgress, Fab } from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

import useStyles from './styles';

import { ThemeProvider } from '@material-ui/core/styles';
import headlineTheme from '../fonts/FontThemes';


const PitchAnalysis = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const [formData, setFormData] = useState({ videoTitle: "", file: null })
    const [isSubmit, setIsSubmit] = useState(false)
    const [selectedFileName, setSelectedFileName] = useState("");

    const [isResponse, setIsResponse] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append('file', formData.file);
        dispatch(sendVideoData(data, history))
        setIsSubmit(true)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, videoTitle: e.target.value })
    }
    const handleUploadClick = (event) => {
        console.log(event.target.files[0]);
        setFormData({ file: event.target.files[0] });
        setSelectedFileName(event.target.files[0].name);
        console.log(formData, 'aaa');

    };

    const spinner = <div style={{ alignContent: 'center', textAlign: 'center', justifyContent: 'center', marginTop: '8rem' }}>
        <CircularProgress />
        <Typography variant="body1" style={{ display: 'block', textAlign: 'center', marginTop: '2rem' }}>Analyzing Video!</Typography>
    </div>
    return (
        <>
            <Grid container component="main" className={classes.root}>
                <Grid item xs={4} className={classes.leftGrid}>
                    {isSubmit ? spinner :
                        <div className={classes.paper}>
                            <form onSubmit={handleSubmit} className={classes.form}>
                                <TextField className={classes.input} name='videoTitle' value={formData.videoTitle} onChange={handleChange} variant="outlined" required fullWidth label='Video Title' />
                                {/* <TextField className={classes.input} name='url'value={formData.url} onChange={handleChange} variant="outlined" required fullWidth label='URL' /> */}
                                <>
                                    <input
                                        type="file"
                                        accept="video/*"
                                        style={{ display: 'none' }}
                                        id="contained-button-file"
                                        onChange={handleUploadClick}

                                    />
                                    <label htmlFor="contained-button-file" className={classes.input}>
                                        <Button variant="contained" color="primary" component="span">
                                            Upload
                                        </Button>

                                    </label>
                                    <Typography component="span" className={classes.input}>{selectedFileName}</Typography>
                                </>
                                <Button style={{ marginLeft: '0.5rem' }} variant='contained' color='primary' size='large' type='submit' className={classes.submit} fullWidth>Submit</Button>
                            </form>
                        </div>
                    }
                </Grid>
                <Grid item xs={8} className={classes.rightGrid}>
                    <ThemeProvider theme={headlineTheme}>
                        <Typography component="h1" variant="h5" style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            Pitch Analysis
                        </Typography>
                    </ThemeProvider>
                    <div className={classes.text}>
                        <Typography variant="h6">
                            Hello, In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default PitchAnalysis;