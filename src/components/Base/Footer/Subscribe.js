import { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { useSubscribeMutation } from '@services/subscribeApi';
import * as Yup from 'yup';
import InputField from '@components/Base/InputField/InputField';

function Subscribe() {
  const [subscribe, { isLoading, isSuccess }] = useSubscribeMutation();
  useEffect(() => {
    if (isSuccess) {
      console.log('Success subscribe');
    }
  }, [isLoading]);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Required')
      .matches(/@[^.]*\./, 'Not valid!'),
  });
  const onSubmitHandler = async (values, { resetForm }) => {
    const result = await subscribe(values);
    values.type = 'newsletter';
    if (result.data) {
      console.log('subscribe values', result);
      resetForm({ values: { email: '' } });
      window.addEventListener('DOMContentLoaded', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      return result;
    }
    return null;
  };
  return (
    <div className="subscribe__container container">
      <h3 className="subscribe__title">
        Get the latest news and promotions. No spam, just a few emails per year.
      </h3>
      <Formik
        initialValues={{ type: 'newsletter', email: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmitHandler}
      >
        {() => (
          <Form className="subscribe__input-container">
            <InputField
              className="subscribe"
              type="email"
              name="email"
              placeholder="Your e-mail"
            />
            <button className="subscribe__btn" type="submit">
              Subscribe
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Subscribe;
