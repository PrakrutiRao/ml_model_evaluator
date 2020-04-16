import React, {useState} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
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
  

const ParametersLoR = ({ values, handleChange, nextStep, prevStep}) =>{
    const classes = useStyles();
    const movingon = e =>{
        e.preventDefault();
    };

    return(
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title = "Choose the penalty"/>
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
                    <Typography className={classes.heading}>L1</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    L1 is used when we want to perform lasso regularization where the 
                    redundant features are automatically ignored by the model.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>L2</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    L2 us used when we want to perform ridge regularizations where the redundant
                     features are assigned equal weights in the model.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                </Grid>
                <Grid item xs={6}>
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-filled-label">penalty</InputLabel>
                    <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    onChange={handleChange('penalty')}
                    defaultValue = {values.penalty}
                    >
                    <MenuItem value='l1'>L1</MenuItem>
                    <MenuItem value='l2'>L2</MenuItem>
                    </Select>
                </FormControl>
                <br/>
                <br/>
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


export default ParametersLoR;