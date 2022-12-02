
import React,{useState} from 'react';
import axios from "axios";
import { height, width } from '@mui/system';
const Mypage = () => {

    const [content, setContent] = useState("");
    const [uploadedImg, setUploadedImg] = useState("");
    
    const fileAdd = () => {
      let file = document.getElementById('fileAdd');
      file.click();
    }
    
    const onChange = (e) => {
        
        setContent(e.target.files[0]);
        onSubmit()
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("img", content);
        axios
            .post("http://localhost:3001/upload", formData)
            .then(res => {
                const { imageUrl } = res.data;
                console.log(res.data.imageUrl);
                setUploadedImg( imageUrl );
                alert("The file is successfully uploaded");
            })
            .catch(err => {
                console.error(err);
            });
    };
    return (
    <>
    <form onSubmit={onSubmit} enctype="multipart/form-data">
    	<div onClick={fileAdd} id="uploadDiv" style={{ background:'#ccc', height:200, width:200}}> 
          <input
          id="fileAdd"
          style={{ display: 'none' }}
          type="file"
          onChange={onChange}
          />
          <p><img src={`http://localhost:3001/upload/${uploadedImg}`} alt=""/></p>
        </div>
        
   </form>
   </>
    )
}

export default Mypage;