import React from 'react';
import Button from '../ui/Button';
import Image from 'next/image'
import { useRouter } from 'next/router';

import styles from './MeetupItem.module.css'
import { Meetup } from '../interfaces';

interface MeetupItemProps {
  meetupInfo: Meetup
}

const MeetupItem: React.FC<MeetupItemProps> = (props) => {
  const router = useRouter();

  const showDetailPageHandler = () => {
    // Redirect to the corresponding detail page
    router.push({ pathname: `/${props.meetupInfo.id}` });
  }

  return <div className={styles.meetup}>
    <img src={props.meetupInfo.image} alt='Meetup Picture' className={styles.img}/>
    <h2>{props.meetupInfo.title}</h2>
    <p>{props.meetupInfo.description}</p>
    <Button onClick={showDetailPageHandler}>Show Details</Button>
  </div>
}

export default MeetupItem