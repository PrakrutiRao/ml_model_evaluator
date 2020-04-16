import React, {useState, useEffect} from 'react';
import {Button} from 'semantic-ui-react';

export const Img =() =>{
    const [res, setRes]=useState("");
    return(
    
        
    <div>
    <Button onClick = {async() =>{
            const response = await fetch('/get_image', {
                method: 'GET',
                responseType: 'blob' //Force to receive data in a Blob Format
            }
            ).then(response => response.blob())
            .then(images => {
                // Then create a local URL for that image and print it 
                var outside = URL.createObjectURL(images)
                console.log(outside)
                setRes(outside);
            });
        }
        }>Submit</Button>
    <img src={res}></img>
    </div>);
}
