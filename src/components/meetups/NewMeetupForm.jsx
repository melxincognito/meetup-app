import React from 'react';
import Card from '../ui/Card'
import classes from './NewMeetupsForm.module.css'


function NewMeetupForm() {
    return( 
    <Card>
        <form className={classes.form}>
            <div className={classes.control}>
                <label htmlFor='title'>Título de Grupo</label>
                <input type='text' required id='title'/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Imágen</label>
                <input type='url' required id='image'/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Direción</label>
                <input type='text' required id='address'/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Resumen de Grupo</label>
                <textarea id='description' required rows='5'> </textarea>
            </div>
            <div className={classes.actions}> 
                <button> Añadir Grupo </button>
            </div>
        </form>
    </Card>
    )
}

export default NewMeetupForm
