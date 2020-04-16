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
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


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
  

const WhichModel = ({ values, handleChange, nextStep}) =>{
    const classes = useStyles();
    const movingon = e =>{
        e.preventDefault();
    };

    return(
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title = "Enter your model"/>
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
                    <Typography className={classes.heading}>SVM</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    In machine learning, support-vector machines are supervised learning 
                    models with associated learning algorithms that analyze data used for classification and regression analysis
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>KNN</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    The k-nearest neighbors (KNN) algorithm is a simple,
                    supervised machine learning algorithm that can be used to solve both classification and regression problems.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>Logistic Regression</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    Logistic regression is a supervised learning classification algorithm used to predict the probability of a target variable.
                    The nature of target or dependent variable is dichotomous, which means there would be only two possible classes.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>Linear Regression</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    Linear Regression is a machine learning algorithm based on supervised learning.
                    It performs a regression task. Regression models a target prediction value based on independent variables.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>Neural Networks</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    Neural networks are a class of machine learning algorithms used to model complex patterns in 
                    datasets using multiple hidden layers and non-linear activation functions.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                
                </Grid>
               
                <br/>
                <Grid item xs={6}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Model</FormLabel>
                    <RadioGroup aria-label="model" name="model1"  defaultValue = {values.model} onChange={handleChange('model')}>
                        <FormControlLabel value="svm" control={<Radio />} label="SVM" />
                        <FormControlLabel value="knn" control={<Radio />} label="KNN" />
                        <FormControlLabel value="logistic_regression" control={<Radio />} label="Logistic Regression" />
                        <FormControlLabel value="linear_regression" control={<Radio />} label="Linear Regression" />
                        <FormControlLabel value="nn" control={<Radio />} label="Neural Network" />
                    
                    </RadioGroup>

                </FormControl>
                <br/>
                <br/>
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


export default WhichModel;