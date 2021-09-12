import React from "react";

const MeetupContext = React.createContext<any>({
  // Value here will be implied a type by typescript
  meetups: [],
  totalMeetups: 0,
  addMeetup: ({}) => {},
  deleteMeetup: ({}) => {},
  clearMeetup: ({}) => {}
})

export default MeetupContext