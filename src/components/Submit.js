import React, {useState, useEffect} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import LinearDeterminate from './Progressbar';
import FileDownload from './FileDownload';

const Submit = ({ values, handleChange, nextStep, prevStep}) =>{
          return(
            
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Model Results"/>
                    <br/>
                    <LinearDeterminate/>

                    <center>
                    
                    <img src={values.isrc}/>
                    </center>
                    <br/>
                    <br/>
                    
                    {values.isrc && <LinearDeterminate/>}
                    <br/>
                    <br/>
                    <center>
                    { values.msd && <FileDownload/> }
                    </center>
                    <br/>
                    <br/>
                    <br/>
                    
                    
                    
                </React.Fragment>
            </MuiThemeProvider>
          );
};
const styles = {
    button: {
        margin:15
    }
};


export default Submit;