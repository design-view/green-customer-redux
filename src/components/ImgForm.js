import React from 'react';

const ImgForm = (props) => {
    return (
        <div>
            <form enctype="multipart/form-data">
                <input type="file" name="img" /> 
            </form>
        </div>
    );
};

export default ImgForm;