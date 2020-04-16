import React , {Fragment, useState} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

function saveAsFile(text) {
    // Step 1: Create the blob object with the text you received
    const type = 'application/text'; // modify or get it from response
    const blob = new Blob([text], {type});
  
    // Step 2: Create Blob Object URL for that blob
    const url = URL.createObjectURL(blob);
  
    // Step 3: Trigger downloading the object using that URL
    const a = document.createElement('a');
    a.href = url;
    a.download = 'result.csv';
    a.click(); // triggering it manually
  }

  const onClick =async(e)=>{
    fetch('/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
    }).then((response) => {
        var a = response.body.getReader();
        a.read().then(({ done, value }) => {
        // console.log(new TextDecoder("utf-8").decode(value));
        saveAsFile(new TextDecoder("utf-8").decode(value), 'filename');
        }
        );
    });
      
  };

const FileDownload = () =>{

    return(
      <RaisedButton
      label="Download Results"
      primary={true}
      styles={styles.button}
      onClick={onClick}
      />
    );
};
const styles = {
  button: {
      margin:15
  }
};


export default FileDownload;