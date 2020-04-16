import React, {useState} from 'react';
import WhichModel from './WhichModel';
import ParametersSVM from './ParametersSVM.js';
import ParametersKNN from './ParametersKNN.js';
import ParametersLoR from './ParametersLoR.js';
import ParametersNN from './ParametersNN.js';
import Dataset from './Dataset.js';
import Submit from './Submit.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FileUpload from './FileUpload';
import Confirm from './Confirm';

const FormOuter = () =>{
    const [step , setStep]=useState(1);
    const [model, setModel]=useState('');
    const [kernel, setKernel] = useState('');
    const [k, setK] = useState(0);
    const [penalty, setPenalty] = useState('');
    const [layers, setLayers] = useState([]);
    const [layersDims, setLayersDims] = useState([]);
    const [layersActivation, setLayersActivation] = useState([]);
    const [trainingDataName, setTrainingDataName] = useState('');
    const [trainingData, setTrainingData] = useState('');
    const [testingDataName, setTestingDataName] = useState('');
    const [testingData, setTestingData] = useState('');
    const [isrc, setIsrc] = useState("");
    const [msd, setMsd] = useState("");

    const nextStep = () =>{
        setStep(step+1);
        return;
    };
    const prevStep = () =>{
        setStep(step-1);
        return;
    };
    const handleChange = (input) => (e) => {
        console.log("in handleChange");
        console.log(input);
        if (input =='step'){
            setStep(e.target.value);
        }else if (input=='model'){
            setModel(e.target.value);
            console.log("model set");
        }else if (input=='kernel'){
            setKernel(e.target.value);
        }else if (input=='k'){
            setK(e.target.value);
        }else if (input=='penalty'){
            setPenalty(e.target.value);
        }else if (input=='layers'){
            setLayers(e.target.value)
        }else if (input=='layersDims'){
            setLayersDims(e.target.value);
        }else if (input=='layersActivation'){
            setLayersActivation(e.target.value);
        }else if (input=='training'){
            setTrainingData(e.target.files[0]);  
            setTrainingDataName(e.target.files[0].name);
            console.log(trainingData);
            console.log(trainingDataName);
        }else if (input=='testing'){
            setTestingData(e.target.files[0]);
            setTestingDataName(e.target.files[0].name);
            console.log(testingData);
            console.log(testingDataName);
        }
        return;

    };
    const setting = (input) =>{
        setIsrc(input);
        return;
    };
    const msd_set = (input) =>{
        setMsd(input);
        return;
    };
    const values = {model, kernel, k, penalty, layers, layersDims, layersActivation, trainingDataName, trainingData, testingDataName, testingData, isrc, msd};
    switch(step) {
        case 1:
            return(
                <WhichModel 
                    nextStep= {nextStep}
                    handleChange = {handleChange}
                    values = {values}
                />
            );
        case 2:
            if(model == 'svm'){
                return(
                    <ParametersSVM 
                        prevStep = {prevStep}
    
                        nextStep= {nextStep}
                        handleChange = {handleChange}
                        values = {values}
                    />
                );
            }else if(model == 'knn'){
                return(
                    <ParametersKNN
                        prevStep = {prevStep}
                        nextStep= {nextStep}
                        handleChange = {handleChange}
                        values = {values}
                    />
                );
            }else if(model == 'logistic_regression'){
                return(
                    <ParametersLoR
                        prevStep = {prevStep}
                        nextStep= {nextStep}
                        handleChange = {handleChange}
                        values = {values}
                    />
                );
            }else if(model == 'linear_regression'){
                setStep(step+1);
            }else if(model == 'nn'){
                return(
                    <ParametersNN 
                        prevStep = {prevStep}
                        nextStep= {nextStep}
                        handleChange = {handleChange}
                        values = {values}
                    />
                );
            }
        case 3:
            return(
                <Dataset
                    prevStep = {prevStep}
                    nextStep = {nextStep}
                    handleChange = {handleChange}
                    values = {values}
                />
    
            );
        case 4:
            return(
                <Confirm
                    prevStep = {prevStep}
                    nextStep= {nextStep}
                    values = {values}
                    setting = {setting}
                    msd_set = {msd_set}
                />
            );
        case 5:
            return(
                <Submit
                    prevStep = {prevStep}
                    nextStep= {nextStep}
                    handleChange = {handleChange}
                    values = {values}
                />
            );
    }
};

export default FormOuter;