import React, {useState} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem }from 'material-ui/List'
import { makeStyles } from '@material-ui/core/styles';


const Confirm = ({ values, nextStep, prevStep, setting, msd_set}) =>{
    switch(values.model){
        case 'svm':
            return(
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title = "Confirm and Submit"/>
                        <br/>
                        <br/>
                        <center>
                        <List >
                            <ListItem
                                 primaryText="Model"
                                 secondaryText = {values.model}
                            />
                            <ListItem
                                 primaryText="Kernel"
                                 secondaryText = {values.kernel}
                            />
                            <ListItem
                                 primaryText="Training Data"
                                 secondaryText = {values.trainingDataName}
                            />
                            <ListItem
                                 primaryText="Testing Data"
                                 secondaryText = {values.testingDataName}
                            />
                        </List>
                        </center>
                        <br/>
                        <br/>
                        <center>
                        <RaisedButton
                             label="Back"
                             primary={true}
                             styles={styles.button}
                             onClick={prevStep}
                         />
                        <RaisedButton
                             label="Confirm & Submit"
                             primary={true}
                             styles={styles.button}
                             onClick= {async() =>{
                                const model = values.model;
                                const kernel = values.kernel;
                                const data = {model,kernel};
                                console.log(data);
                                const response = await fetch('/models',{
                                    method :'POST',
                                    headers: {
                                        'Content-Type':'application/json'
                                    },
                                    body:JSON.stringify(data)
                                    }).then(nextStep)
                                    .then(async() =>{
                                         const resp =await fetch('/get_image', {
                                            method: 'GET',
                                            responseType: 'blob' //Force to receive data in a Blob Format
                                        })
                                        .then(resp => resp.blob())
                                        .then(images => {
                                        // Then create a local URL for that image and print it 
                                        setTimeout(()=>{var outside = URL.createObjectURL(images)
                                            setting(outside)},5000)
                                         }).then(
                                        setTimeout(()=>{msd_set("msd")},9000)
                                         );
                                
                                    })
                                
                            }}
                            
                         />
                         </center>
                    </React.Fragment>
                </MuiThemeProvider>
             );
        case 'knn':
            return(
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title = "Confirm and Submit"/>
                        <br/>
                        <br/>
                        <center>
                        <List >
                            <ListItem
                                 primaryText="Model"
                                 secondaryText = {values.model}
                            />
                            <ListItem
                                 primaryText="K Value"
                                 secondaryText = {values.k}
                            />
                            <ListItem
                                 primaryText="Training Data"
                                 secondaryText = {values.trainingDataName}
                            />
                            <ListItem
                                 primaryText="Testing Data"
                                 secondaryText = {values.testingDataName}
                            />
                        </List>
                        </center>
                        <br/>
                        <br/>
                        <center>
                        <RaisedButton
                             label="Back"
                             primary={true}
                             styles={styles.button}
                             onClick={prevStep}
                         />
                        <RaisedButton
                             label="Confirm & Submit"
                             primary={true}
                             styles={styles.button}
                             onClick={async() =>{
                                const model = values.model;
                                const k = parseInt(values.k);
                                const data = {model,k};
                                console.log(data);
                                const response = await fetch('/models',{
                                    method :'POST',
                                    headers: {
                                        'Content-Type':'application/json'
                                    },
                                    body:JSON.stringify(data)
                                    }).then(nextStep)
                                    .then(async() =>{
                                         const resp =await fetch('/get_image', {
                                            method: 'GET',
                                            responseType: 'blob' //Force to receive data in a Blob Format
                                        })
                                        .then(resp => resp.blob())
                                        .then(images => {
                                        // Then create a local URL for that image and print it 
                                        setTimeout(()=>{var outside = URL.createObjectURL(images)
                                                            setting(outside)},5000)
                                        //console.log(outside)
                                        
                                         }).then(
                                             setTimeout(()=>{msd_set("msd")},9000)
                                         );
                                
                                    })
                            }}
                         />
                         </center>
                    </React.Fragment>
                </MuiThemeProvider>
             );
        case 'logistic_regression':
            return(
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title = "Confirm and Submit"/>
                        <br/>
                        <br/>
                        <center>
                        <List >
                            <ListItem
                                 primaryText="Model"
                                 secondaryText = {values.model}
                            />
                            <ListItem
                                 primaryText="Penalty"
                                 secondaryText = {values.penalty}
                            />
                            <ListItem
                                 primaryText="Training Data"
                                 secondaryText = {values.trainingDataName}
                            />
                            <ListItem
                                 primaryText="Testing Data"
                                 secondaryText = {values.testingDataName}
                            />
                        </List>
                        </center>
                        <br/>
                        <br/>
                        <center>
                        <RaisedButton
                             label="Back"
                             primary={true}
                             styles={styles.button}
                             onClick={prevStep}
                         />
                        <RaisedButton
                             label="Confirm & Submit"
                             primary={true}
                             styles={styles.button}
                             onClick={async() =>{
                                const model = values.model;
                                const penalty = values.penalty;
                                const data = {model,penalty};
                                console.log(data);
                                const response = await fetch('/models',{
                                    method :'POST',
                                    headers: {
                                        'Content-Type':'application/json'
                                    },
                                    body:JSON.stringify(data)
                                    }).then(nextStep)
                                    .then(async() =>{
                                         const resp =await fetch('/get_image', {
                                            method: 'GET',
                                            responseType: 'blob' //Force to receive data in a Blob Format
                                        })
                                        .then(resp => resp.blob())
                                        .then(images => {
                                        // Then create a local URL for that image and print it 
                                        setTimeout(()=>{var outside = URL.createObjectURL(images)
                                            setting(outside)},5000)
                                         }).then(
                                            setTimeout(()=>{msd_set("msd")},9000)
                                        );
                                
                                    })
                                
                            }}
                         />
                         </center>
                    </React.Fragment>
                </MuiThemeProvider>
             );
        case 'linear_regression':
            return(
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title = "Confirm and Submit"/>
                        <br/>
                        <br/>
                        <center>
                        <List >
                            <ListItem
                                 primaryText="Model"
                                 secondaryText = {values.model}
                            />
                            <ListItem
                                 primaryText="Training Data"
                                 secondaryText = {values.trainingDataName}
                            />
                            <ListItem
                                 primaryText="Testing Data"
                                 secondaryText = {values.testingDataName}
                            />
                        </List>
                        </center>
                        <br/>
                        <br/>
                        <center>
                        <RaisedButton
                             label="Back"
                             primary={true}
                             styles={styles.button}
                             onClick={prevStep}
                         />
                        <RaisedButton
                             label="Confirm & Submit"
                             primary={true}
                             styles={styles.button}
                             onClick={async() =>{
                                const model = values.model;
                                const data = {model};
                                console.log(data);
                                const response = await fetch('/models',{
                                    method :'POST',
                                    headers: {
                                        'Content-Type':'application/json'
                                    },
                                    body:JSON.stringify(data)
                                    }).then(nextStep)
                                    .then(async() =>{
                                         const resp =await fetch('/get_image', {
                                            method: 'GET',
                                            responseType: 'blob' //Force to receive data in a Blob Format
                                        })
                                        .then(resp => resp.blob())
                                        .then(images => {
                                        // Then create a local URL for that image and print it 
                                        setTimeout(()=>{var outside = URL.createObjectURL(images)
                                            setting(outside)},5000)
                                         }).then(
                                            setTimeout(()=>{msd_set("msd")},9000)
                                        );
                                
                                    })
                                
                            }}
                         />
                         </center>
                    </React.Fragment>
                </MuiThemeProvider>
             );
        case 'nn':
            return(
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title = "Confirm and Submit"/>
                        <br/>
                        <br/>
                        <center>
                        <List >
                            <ListItem
                                 primaryText="Model"
                                 secondaryText = {values.model}
                            />
                            <ListItem
                                 primaryText="Number of layers"
                                 secondaryText = {values.layers}
                            />
                            <ListItem
                                 primaryText="Number of Neurons per Layer"
                                 secondaryText = {values.layersDims}
                            />
                            <ListItem
                                 primaryText="Activation Function"
                                 secondaryText = {values.layersActivation}
                            />
                            <ListItem
                                 primaryText="Training Data"
                                 secondaryText = {values.trainingDataName}
                            />
                            <ListItem
                                 primaryText="Testing Data"
                                 secondaryText = {values.testingDataName}
                            />
                        </List>
                        </center>
                        <br/>
                        <br/>
                        <center>
                        <RaisedButton
                             label="Back"
                             primary={true}
                             styles={styles.button}
                             onClick={prevStep}
                         />
                        <RaisedButton
                             label="Confirm & Submit"
                             primary={true}
                             styles={styles.button}
                             onClick={async() =>{
                                const model = values.model;
                                const layers = values.layers;
                                const layersDims = values.layersDims;
                                const layersActivation = values.layersActivation
                                var layers_dims=[];
                                var layers_activation=[];
                                var i;
                                for(i=0;i<layers;i++){
                                    layers_dims[i]=parseInt(layersDims);
                                    layers_activation[i] = layersActivation;
                                }
                                const data = {model,layers_dims,layers_activation};
                                console.log(data);
                                const response = await fetch('/models',{
                                    method :'POST',
                                    headers: {
                                        'Content-Type':'application/json'
                                    },
                                    body:JSON.stringify(data)
                                    }).then(nextStep)
                                    .then(
                                        setTimeout(()=>{msd_set("msd")},9000)
                                    );
                                
                            }}
                         />
                         </center>
                    </React.Fragment>
                </MuiThemeProvider>
             );
    }

    
};
const styles = {
    button: {
        margin:15
    }
};


export default Confirm;
