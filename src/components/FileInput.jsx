import React from 'react';
import {Button} from 'react-bootstrap';

const hiddenInputStyles = {
    position: "absolute",
    display: "block",
    overflow: "hidden",
    width: "0",
    height: "0",
    border: "0",
    padding: "0"
}

function FileInput(props) {
    let fileInputElement;

    function handleFileInput() {
        const path = fileInputElement.value, files = fileInputElement.files;
        props.onChange({
            path, files
        });
    }

    function handleClick() {
        fileInputElement.click();
    }

    return(
        <div className="FileInput">
            <input
                type="file"
                name="hidden-input"
                id="hidden-input"
                style={hiddenInputStyles}
                onChange={handleFileInput}
                ref={input => {fileInputElement = input}}
            />
            <Button
                onClick={handleClick}
            >
                Choose file
            </Button>
        </div>
    )
}

export default FileInput;