import React, { useState, useEffect, useContext } from "react";
import Button from "../ui/Button";
import useInput from "../../hooks/use-input";
import MeetupContext from "../../store/meetup-context";
import { useRouter } from 'next/router'

import styles from "./NewMeetupForm.module.css";

const NewMeetupForm: React.FC = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const meetupCtx = useContext(MeetupContext);
  const router = useRouter();

  // Defining Input variables for Handlers and Validation from custom input hook
  const {
    value: titleValue,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
  } = useInput((input: string) => {return input.length > 0});
  
  const {
    value: imageValue,
    hasError: imageHasError,
    valueChangeHandler: imageChangeHandler,
    inputBlurHandler: imageBlurHandler,
  } = useInput((input: string) => {return true});
  
  const {
    value: addressValue,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
  } = useInput((input: string) => {return input.length > 0});
  
  const {
    value: descriptionValue,
    hasError: descriptionHasError,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
  } = useInput((input: string) => {return input.length > 0});
  
  // Update validity of form
  useEffect(() => {
    setIsFormValid(!titleHasError && !addressHasError && !imageHasError && !descriptionHasError)
  }, [titleHasError, addressHasError, imageHasError, descriptionHasError]);

  // Handlers
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    meetupCtx.addMeetup({
      id: 'meetup' + (new Date().getTime()) + (Math.random().toString(4).slice(2)),
      title: titleValue,
      address: addressValue,
      description: descriptionValue,
      image: imageValue !== '' ? imageValue : "https://wpguynews.com/wp-content/uploads/2021/01/how-to-host-a-meetup-featured-image.jpg"
    });

    setTimeout(() => {
      router.push({ pathname: '/' })
    }, 1000)
  }

  // Component
  return (
    <div className={styles.row}>
      <form className={styles.meetupForm} onSubmit={submitHandler}>
        <div className={`${styles.formInput} ${titleHasError ? styles.invalid : ''}`}>
          <label>Meetup Title</label>
          <input value={titleValue} onChange={(event) => titleChangeHandler(event.target.value)} onBlur={titleBlurHandler}/>
        </div>
        <div className={`${styles.formInput} ${addressHasError ? styles.invalid : ''}`}>
          <label>Address</label>
          <input value={addressValue} onChange={(event) => addressChangeHandler(event.target.value)} onBlur={addressBlurHandler}/>
        </div>
        <div className={`${styles.formInput} ${descriptionHasError ? styles.invalid : ''}`}>
          <label>Description</label>
          <textarea value={descriptionValue} onChange={(event) => descriptionChangeHandler(event.target.value)} onBlur={descriptionBlurHandler}/>
        </div>
        <div className={`${styles.formInput} ${imageHasError ? styles.invalid : ''}`}>
          <label>Meetup Image URL (Optional)</label>
          <input value={imageValue} onChange={(event) => imageChangeHandler(event.target.value)} onBlur={imageBlurHandler}/>
        </div>

        <Button
          type="submit"
          disabled={!isFormValid}
          className={styles.formBtn}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default NewMeetupForm