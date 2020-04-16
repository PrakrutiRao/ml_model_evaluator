import React , {Fragment, useState} from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';

var FormData = require('form-data');

/*

            const response = await fetch('/upload',{
            method :'POST',
            headers: {'Content-Type': 'multipart/form-data' },
            body: formData
            }).then(response =>response.json().then(res =>{
                console.log(res);
            })
        );
*/

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
const FileUpload = ({choice, values, handleChange}) =>{
    /*
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    
    const onChange = e =>{
        setFile(e.target.files[0]);
        //const fileField = document.querySelector('input[type="file"]');
        setFilename(e.target.files[0].name);
        //setFile(fileField.files[0]) ;
    };
    */
   const classes = useStyles();
   
    

    const onSubmit = async (e) =>{

        e.preventDefault();

        var formData = new FormData();
        if(choice == 'training'){
            formData.append('file', values.trainingData);
        }else{
            formData.append('file', values.testingData);
        }
        //formData.append('file', values.file);
        formData.append('choice',choice);
        console.log(formData)
        
        axios({
            method: 'post',
            url: '/upload',
            data: formData,
            headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
        
    }

    return(
        <MuiThemeProvider>
            <FormControl variant="filled" className={classes.formControl}>
            <form onSubmit={onSubmit} method="POST" enctype="multipart/form-data">
            <div >
                <input type='file' onChange = {handleChange(choice)} className='custom-file-input' id='customFile' name='please_work'></input>
                <label className='custom-file-label' htmlFor='customFile'>{values.filename}</label>
            </div>
    
            <br/>
            <br/>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<CloudUploadIcon />}
            >
                <input type="submit" value="Upload" />
            </Button>
            </form>
            </FormControl>
        </MuiThemeProvider>
    );
};

export default FileUpload;