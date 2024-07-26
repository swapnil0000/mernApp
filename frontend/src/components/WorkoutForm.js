import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createWorkouts } from '../workoutSlice/workoutSlice';

const WorkoutForm = () => {
    const dispatch=useDispatch();
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [error, setError] = useState(null)
    const [reps, setReps] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = { title, load, reps };

        try{
            const resultAction=await dispatch(createWorkouts(workout));
            if (createWorkouts.fulfilled.match(resultAction)) {
                setTitle('');
                setLoad('');
                setReps('');
                setError(null);
            } else {
                setError(resultAction.error.message);
            }
        }catch (err) {
            setError(err.message);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a Workout</h2>
           
                <div className='inputBox'>
                    <label>Add a Title:</label>
                    <input required={true} value={title} onChange={(e) => setTitle(e.target.value)} type='text' className='input' placeholder='add a title' />
                </div>
                <div className='inputBox'>
                    <label>Load(KG):</label>
                    <input required={true} value={load} onChange={(e) => setLoad(e.target.value)} type='number' className='input' placeholder='add a load in KG' />
                </div>
                <div className='inputBox'>
                    <label>Number of reps:</label>
                    <input required={true} value={reps} onChange={(e) => setReps(e.target.value)} type='number' className='input' placeholder='add a no of reps' />
                </div>
                <button>Add Workout</button>
                {error && <div className="error">{error}</div>}
            </form>
    )
}

export default WorkoutForm