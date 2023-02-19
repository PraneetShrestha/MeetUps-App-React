import React from 'react'
import { MeetupList } from '../components/meetups/MeetupList'
import { useState } from 'react'
import { useEffect } from 'react'

export const AllMeetupsPage = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() =>{
    setIsLoading(true);
    fetch(
      'https://third-react-app-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
      return response.json();
    }).then(data => {
      const meetups=[];
      for (const key in data){
        const meetup={
          id:key,
          ...data[key]
        }
        meetups.push(meetup)
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  },[]);
  

  if (isLoading) {
    return <div>Loading Data</div>
  }
  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  )
}
