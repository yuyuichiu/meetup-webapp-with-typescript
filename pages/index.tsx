import React, { Fragment, useContext } from 'react';
import type { NextPage } from 'next'

import MeetupList from '../components/meetup/MeetupList';
import MeetupContext from '../store/meetup-context';
import TestWidget from '../components/ui/TestWIdget';

/* The home page -- contains list of meetup items */
const Home: NextPage = () => {
  const meetupCtx = useContext(MeetupContext);

  return <Fragment>
    <TestWidget className='d-flex align-item-center justify-content-center'/>
    <MeetupList meetups={meetupCtx.meetups} />
  </Fragment>
}

export default Home
