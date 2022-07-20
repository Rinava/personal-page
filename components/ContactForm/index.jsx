import styles from './styles.module.scss';
import { useState } from 'react';
const ContactForm = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [form, setForm] = useState('');

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (inputs.name && inputs.email && inputs.message) {
      setForm({ state: 'loading' });
      try {
        const res = await fetch(`api/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        });

        const { error } = await res.json();

        if (error) {
          setForm({
            state: 'error',
            message: error,
          });
          return;
        }

        setForm({
          state: 'success',
          message: 'Your message was sent successfully.',
        });
        setInputs({
          name: '',
          email: '',
          message: '',
        });
      } catch (error) {
        setForm({
          state: 'error',
          message: 'Something went wrong',
        });
      }
    }
  };
  return (
    <form className={styles.form} onSubmit={(e) => onSubmitForm(e)}>
      <div className={styles.form__item}>
        <label className={styles.form__label} htmlFor='name'>
          Name
        </label>
        <input
          className={styles.form__input}
          type='text'
          id='name'
          value={inputs.name}
          onChange={handleChange}
          placeholder='Alejandro Sergi'
        />
      </div>
      <div className={styles.form__item}>
        <label className={styles.form__label} htmlFor='email'>
          Email
        </label>
        <input
          className={styles.form__input}
          type='email'
          id='email'
          value={inputs.email}
          onChange={handleChange}
          required
          placeholder='youremail@gmail.com'
        />
      </div>
      <div className={styles.form__item}>
        <label className={styles.form__label} htmlFor='message'>
          Message
        </label>
        <textarea
          className={styles.form__textarea}
          rows='5'
          value={inputs.message}
          onChange={handleChange}
          id='message'
          required
          placeholder="Hi! I'm contacting you because..."
        />
      </div>
      <button className={styles.form__button} type='submit'>
        Send
      </button>
      {form.state === 'loading' ? (
        <div>Sending....</div>
      ) : form.state === 'error' ? (
        <div>{form.message}</div>
      ) : (
        form.state === 'success' && <div>Sent successfully</div>
      )}
    </form>
  );
};
export default ContactForm;
