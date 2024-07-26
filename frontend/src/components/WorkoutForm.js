import React, { useState } from 'react'

const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [error, setError] = useState(null)
    const [reps, setReps] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(title, load, reps);
        const workout = { title, load, reps };

        const response = await fetch('/api/workouts/', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();
        console.log("JSON",json)
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            setTitle('')
            setLoad('')
            setReps('')
            console.log('new workout added:', json)
        }


    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a Workout</h2>
           
                <div className='inputBox'>
                    <label>Add a Title:</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' className='input' placeholder='add a title' />
                </div>
                <div className='inputBox'>
                    <label>Load(KG):</label>
                    <input value={load} onChange={(e) => setLoad(e.target.value)} type='number' className='input' placeholder='add a load in KG' />
                </div>
                <div className='inputBox'>
                    <label>Number of reps:</label>
                    <input value={reps} onChange={(e) => setReps(e.target.value)} type='number' className='input' placeholder='add a no of reps' />
                </div>
                <button>Add Workout</button>
                {error && <div className="error">{error}</div>}
            </form>
    )
}

export default WorkoutForm