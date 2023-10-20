import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { Rating } from 'react-simple-star-rating';
import * as Yup from 'yup';
import AddImageField from '@components/Product/AddReview/AddImageField/AddImageField';

function AddReview({ product }) {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };
  const validationSchema = Yup.object().shape({
    body: Yup.string().required('Required'),
  });

  const onSubmitHandler = async () => {
    console.log('review added');
  };
  return (
    <div className="add-review">
      <div className="container add-review__container">
        <h2 className="add-review__title">Your review</h2>
        <Formik
          initialValues={{ body: '' }}
          validationSchema={validationSchema}
          onSubmit={onSubmitHandler}
        >
          {() => (
            <Form className="add-review__form">
              <div className="add-review__range">
                <Rating
                  className="stars-rating"
                  ratingValue={rating}
                  size={50}
                  label
                  transition
                  fillColor="orange"
                  emptyColor="gray"
                  onClick={handleRating}
                  onMouseLeave={() => {
                    setRating((currentRating) => currentRating);
                  }}
                />
              </div>
              <div className="add-review__form-wrapper">
                <Field
                  className="add-review__message"
                  as="textarea"
                  placeholder="Your message"
                  name="body"
                />
                <AddImageField
                  images={images}
                  setImages={setImages}
                  imageURLs={imageURLs}
                  setImageURLs={setImageURLs}
                />
              </div>
              <button className="add-review__submit-btn" type="submit">
                Add review
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default AddReview;
