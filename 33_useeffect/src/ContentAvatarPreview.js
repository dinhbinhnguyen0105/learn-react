
import { useState, useEffect } from 'react';

// function ContentAvatarPreview() {
//     const [inputFile, setInputFile] = useState();
//     const [avatarUrl, setAvatarUrl] = useState();
    
//     useEffect(() => {
//         const fileReader = new FileReader();
//         fileReader.onload = () => {
//             setAvatarUrl(fileReader.result)
//         }
//         fileReader.onerror = () => {}
//         if(inputFile  instanceof File) fileReader.readAsDataURL(inputFile)

//     }, [inputFile]);

//     return (
//         <div className='content-container'>
//             <input type='file' onChange={e => setInputFile(e.target.files[0])}/>
//             <div className='content-thmbnail'>
//                 {
//                     avatarUrl && <img
//                         src={avatarUrl}
//                         style={{
//                             margin: 20,
//                             width: 300,
//                             borderRadius: 20,
//                         }}
//                         alt='Img'
//                     />
//                 }
//             </div>
//         </div>
//     );
// }

function ContentAvatarPreview() {
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        return () => URL.revokeObjectURL(avatar);
    }, [avatar])

    const handleInputOnChange = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file.preview);
    }

    return (
        <div className='content-container'>
            <input type='file' onChange={handleInputOnChange}/>
            <div className='content-thmbnail'>
                {
                    avatar && <img
                        src={avatar}
                        style={{
                            margin: 20,
                            width: 300,
                            borderRadius: 20,
                        }}
                        alt='Img'
                    />
                }
            </div>
        </div>
    );
}

export default ContentAvatarPreview;