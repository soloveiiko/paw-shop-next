import { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import Icon from '@components/Base/Icon';

function AddImageField({ images, setImages, imageURLs, setImageURLs }) {
  // const [images, setImages] = useState([]);
  // const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    const newImageUrls = images.map((image) => URL.createObjectURL(image));
    setImageURLs(newImageUrls);
    return () => {
      newImageUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [images]);

  const handleChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages([...images, ...selectedImages]);
  };
  const cancelImage = (index, e) => {
    e.preventDefault();
    const newImages = images.filter((_, image) => image !== index);
    setImages(newImages);
  };

  return (
    <div className="images-field">
      {imageURLs.length > 0 && (
        <div className="images-field__list">
          {imageURLs.map((image, index) => (
            <div key={index} className="images-field__item">
              <div className="images-field__img-container">
                <Image src={image} alt="Upload file" />
              </div>
              <AiOutlineClose onClick={(e) => cancelImage(index, e)} />
            </div>
          ))}
        </div>
      )}
      <label className="images-field__label">
        <span className="images-field__icon">
          <Icon name="add-image" />
        </span>
        <span className="images-field__text">Choose images</span>
        <input
          className="images-field__input"
          type="file"
          multiple
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default AddImageField;
