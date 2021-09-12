import React, { Fragment, useContext } from 'react';
import type { NextPage } from 'next'

import MeetupList from '../components/meetup/MeetupList';
import MeetupContext from '../store/meetup-context';

/* The home page -- contains list of meetup items */
const Home: NextPage = () => {
  const meetupCtx = useContext(MeetupContext);

  return <Fragment>
    <MeetupList meetups={meetupCtx.meetups} />
  </Fragment>
}

export default Home
