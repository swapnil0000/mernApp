import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails"

const Home = () => {
    const [workouts, setWorkouts] = useState([])

    useEffect(()=>{
        const fetchWorkouts=async ()=>{
            try {
                const response = await fetch('/api/workouts');
                const json = await response.json();

                if (response.ok) {
                    setWorkouts(json);
                } else {
                    console.error("Failed to fetch workouts:", json);
                }
            } catch (error) {
                console.error("Fetch error:", error);
            }
        }
        fetchWorkouts();
    },[])
    return (
      <div className="home">
      <div className="workouts">
      {workouts && workouts.map((workout)=>(
        <WorkoutDetails workout={workout} key={workout._id}/>
      ))}
    </div>
      </div>
    )
  }
  
  export default Home