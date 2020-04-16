import React, {useState} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FileUpload from './FileUpload';
import RaisedButton from 'material-ui/RaisedButton';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '80%',
      flexGrow: 1,
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  }));
  


const Dataset = ({ values, handleChange, nextStep, prevStep}) =>{
    const classes = useStyles();
    return(
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title = "Upload Training and Testing Data"/>
                <br/>
                <br/>
                <br/>
                <br/>
                <center>
                <div className={classes.root}>
                <Grid container spacing={5}>
                <Grid item xs={6}>
                <p>Upload training Data</p>
                <FileUpload choice = 'training' handleChange = {handleChange} values = {values}/>
                <br/>
                </Grid>
                <Grid item xs={6}>
                <p>Upload testing Data</p>
                <FileUpload choice = 'testing' handleChange = {handleChange} values = {values}/>
                </Grid>
                <br/>
                <Grid item xs={12}>
                <RaisedButton
                    label="Back"
                    primary={true}
                    styles={styles.button}
                    onClick={prevStep}
                />
                <RaisedButton
                    label="Continue"
                    primary={true}
                    styles={styles.button}
                    onClick={nextStep}
                />
                </Grid>
                </Grid>
                </div>
                </center>
            </React.Fragment>
        </MuiThemeProvider>
        
    );

};
const styles = {
    button: {
        margin:100
    }
};


export default Dataset;