import React, {useState} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { makeStyles } from '@material-ui/core/styles';
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
  

const ParametersSVM = ({ values, handleChange, nextStep, prevStep}) =>{
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
                    <Typography className={classes.heading}>linear</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    Linear kernel is used when the data is linearly separable.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>polynomial</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    When the data is not linearly separable, you may want to use the polynomial kernel.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>rbf</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    When no prior information is known about the data, you can choose the rbf kernel because it generalizes well.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>sigmoid</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    The sigmoid kernel was quite popular for support vector machines due to its origin from neural networks. 
                    However, as the kernel matrix may not be positive semidefinite (PSD), it is not widely used and the behavior is unknown.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                </Grid>
                <Grid item xs={6}>
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-filled-label">kernel</InputLabel>
                    <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    onChange={handleChange('kernel')}
                    defaultValue={values.kernel}
                    >
                    <MenuItem value='linear'>linear</MenuItem>
                    <MenuItem value='poly'>polynomial</MenuItem>
                    <MenuItem value='rbf'>rbf</MenuItem>
                    <MenuItem value='sigmoid'>sigmoid</MenuItem>
                    </Select>
                </FormControl>
                <br/>
                <br/>
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


export default ParametersSVM;