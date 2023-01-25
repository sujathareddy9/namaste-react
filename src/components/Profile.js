import { useEffect, useState } from "react"

const Profile = (pros) =>{
    const [count,setCount] = useState(0)

    useEffect(()=>{
        // API Call
        // console.log('useEfect')
        const timer = setInterval(()=>{console.log('react op')},1000)

        return ()=>{
            clearInterval(timer)
            console.log('useEffect return')
        }
    },[]);

    return (
        <div>
           <h1> Profile Functional Component</h1>
           <h2> {pros.name} {pros.lastName} {count}</h2>
           <button onClick={()=>setCount(1)}> Count</button>
        </div>
    )
}

export default Profile;