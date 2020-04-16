import React, {useState} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
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

const ParametersKNN = ({ values, handleChange, nextStep, prevStep}) =>{
    const classes = useStyles();
    const movingon = e =>{
        e.preventDefault();
    };

    return(
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title = "Choose a kernel"/>
                <br/>
                <br/>
                <br/>
                <br/>
                <center>
                <div className={classes.root}>
                <Grid container spacing={5}>
                <Grid item xs={6}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>K Value</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    ‘k’ in KNN is a parameter that refers to the number of nearest neighbours being considered by the algorithm.
                    It should not be more than the number of rows in your dataset. The optimum value of k depends on your dataset.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                </Grid>
                <Grid item xs={6}>
                <TextField
                    hintText="Enter the value of k"
                    floatingLabelText = "k value"
                    onChange={handleChange('k')}
                    defaultValue= {values.k}
                />
                <br/>
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
        margin:15
    }
};


export default ParametersKNN;