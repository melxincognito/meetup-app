import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetup() {
    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-getting-started-de625-default-rtdb.firebaseio.com/meetups.json', 
            {
                method: 'POST', 
                body: JSON.stringify(meetupData), 
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/')
        });
    }

    return( 
        <section> 
            <h1> Añadir Nuevo Grupo de Geek en España </h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
        
    )
}

export default NewMeetup;