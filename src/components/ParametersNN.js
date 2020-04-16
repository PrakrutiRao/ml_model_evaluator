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
      minWidth: 300,
    },
    selectEmpty: {
      marginTop: theme.spacing(4),
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
  

const ParametersNN = ({ values, handleChange, nextStep, prevStep}) =>{
    const classes = useStyles();
    const movingon = e =>{
        e.preventDefault();
    };

    return(
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title = "Enter the parameters"/>
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
                    <Typography className={classes.heading}>ReLU</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    ReLU is an activation function used to retain only the positive results at a neuron. 
                    All the negatives are set to zero.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Sigmoid</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    Sigmoid is an activation function that transforms any result of a neuron to the range 0 - 1.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Tanh</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    Tanh is same as sigmoid but transforms the result to range -1 – 1.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                </Grid>
                <Grid item xs={6}>
                <TextField
                    hintText="Number of layers"
                    floatingLabelText = "Enter the number of Layers"
                    onChange={handleChange('layers')}
                    defaultValue= {values.layers}
                />
                <br/>
                <br/>
                <TextField
                    hintText="number of neurons per layer"
                    floatingLabelText = "Enter the number of neurons per layer"
                    onChange={handleChange('layersDims')}
                    defaultValue= {values.layersDims}
                />
                <br/>
                <br/>
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-filled-label">Activation function</InputLabel>
                    <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    onChange={handleChange('layersActivation')}
                    defaultValue= {values.layersActivation}
                    >
                    <MenuItem value='relu'>ReLU</MenuItem>
                    <MenuItem value='sigmoid'>sigmoid</MenuItem>
                    <MenuItem value='tanh'>tanh</MenuItem>
                    </Select>
                </FormControl>
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


export default ParametersNN;