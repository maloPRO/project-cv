import React from "react";
import ImageUploading from "react-images-uploading";
import '../styles/profilePic.css';

function ProfilePic() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload"
          style={isDragging ? { color: "red" } : null}
          onClick={onImageUpload}
          {...dragProps}
          >
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img className="dp" src={image.data_url} alt="" width="100"  onClick={() => onImageUpdate()}/>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
 export default ProfilePic;