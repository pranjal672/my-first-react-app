import MeetupList from "../components/meetuplist";
import { useState } from "react"
import { useEffect } from "react"


function AllMeetupsPage() {
    const [isLoaded, setisLoaded] = useState(true)
    const [loadMeetup, setloadMeetup] = useState([])

    useEffect(() => {
        setisLoaded(true)
        fetch('https://react-starting-new-default-rtdb.firebaseio.com/meetup.json'
        ).then((response) => {
            return response.json();
        }).then((data) => {
            const meetups = []
            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                }
                meetups.push(meetup)
            }
            setisLoaded(false)
            setloadMeetup(meetups)
        })
    }, [])
    if (isLoaded) {
        return <section>
            <p>Loading...</p>
        </section>
    }
    return (
        <>
            <h1>All Meetups</h1>
            <section>
                <MeetupList data={loadMeetup} />
            </section>
        </>
    )

}

export default AllMeetupsPage;