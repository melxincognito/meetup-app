import React from 'react';
import Card from '../ui/Card'
import classes from './NewMeetupsForm.module.css'
import { useRef } from 'react';

function NewMeetupForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(e) {
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enterdDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle, 
            image: enteredImage,
            address: enteredAddress,
            description: enterdDescription,
        }

        props.onAddMeetup(meetupData)

    }

    return( 
    <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Título de Grupo</label>
                <input type='text' required id='title' ref={titleInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Imágen</label>
                <input type='url' required id='image' ref={imageInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Direción</label>
                <input type='text' required id='address' ref={addressInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Resumen de Grupo</label>
                <textarea id='description' required rows='5' ref={descriptionInputRef} />
            </div>
            <div className={classes.actions}> 
                <button> Añadir Grupo </button>
            </div>
        </form>
    </Card>
    )
}

export default NewMeetupForm
