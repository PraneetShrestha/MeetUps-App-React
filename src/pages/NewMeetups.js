import React from 'react'
import { NewMeetupForm } from '../components/meetups/NewMeetupForm'
import { useHistory } from 'react-router';

export const NewMeetupsPage = () => {
    const history = useHistory();
    function addMeetupHandle (meetupData){
        fetch('https://third-react-app-default-rtdb.firebaseio.com/meetups.json',
        {
            method:'POST',
            body: JSON.stringify(meetupData),
            headers:{
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            history.replace('/');
        });
    }
    return (
        <div>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandle} />
        </div>
    )
}
