import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const ImgBoard = (props) => {//이미지 경로 상태관리 추가 
    const navigate = useNavigate();
    const [ imageUrl, setImageUrl ] = useState(null);
    const onChangeImage = (info)=>{
        
        //파일이 업로드 중일때
        if(info.file.status === "uploading"){
            return;
        }
        //파일이 업로드 완료되었을때
        if(info.file.status === "done"){
            const response = info.file.response;
            const imageUrl = response.imageUrl;
            //받은 이미지경로를 imageUrl에 넣어줌
            setImageUrl(imageUrl);
            navigate('/imgimg')
        }
        console.log(info.file);
    }
    return (
        
        <table>
            <tr>
                <td><label>file</label></td>
                <td><input type="file" name="img" enctype="multipart/form-data" action="http://localhost:3001/upload"
        onChange={onChangeImage}/>{/* 업로드 이미지가 있으면 이미지를 나타내고 업로드 이미지가 없으면
                    회색배경에 업로드 아이콘이 나타나도록... */}
                    { imageUrl ? <img src={imageUrl} 
                    alt="" width="200px" height="200px" /> :
                        (<div id="upload-img-placeholder">
                        <img src="images/icons/camera.png" alt=""/>
                        <span>이미지를 업로드 해주세요.</span>
                    </div>)
                    }</td>
            </tr>
        </table>
        
    
    );
};

export default ImgBoard;