import React, { useState} from 'react';
import '../styles/Gallery.css';
import { GalleryImage } from './GalleryImage';

const PageName = () => { 
    return (
        <div className="GalleryPagetopic">
            <h1>GALLERY</h1>
        </div>
  );
};

const Images = () => {
    // console.log(GalleryImage)

    const [file, setFile] = useState(null);
    return (

        <div className='gallery-main-container'>
            <div className='gallery-container'>
                {
                    GalleryImage.map((file, index) => (
                        <div className="galleryimage" key={index} onClick={() => setFile(file)}>
                            {file.type === 'image' && (
                                <img src={file.url} alt={`Gallery ${index}`} />
                            )}                      
                        </div>

                    
                    ))
                }
                
            </div>

            <div className='popup-galleryimage' style={{ display: file ? 'block' : 'none'}}>
                <span onClick={() => setFile(null)}>&times;</span>
                {
                    file?.type === 'image' ? (
                        <img src={file?.url} alt="Selected Image" />
                    ) : null
                }
            </div>
        </div>
    );
};
 


const Gallery = () => {
    return (
        <div>
            <PageName />
            <Images />
      </div>  
    );
 };
  
export default Gallery;


