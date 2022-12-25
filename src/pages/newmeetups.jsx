import Form from "../components/meetform";
import classes from "../components/meetform.module.css"
import { useNavigate } from "react-router-dom"

function NewMeetupsPage() {
    const navigate = useNavigate();

    function addMeetup(dataForm) {
        fetch('https://react-starting-new-default-rtdb.firebaseio.com/meetup.json',
            {
                method: 'POST',
                body: JSON.stringify(dataForm),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                navigate("/", { replace: true })
            })

    }

    return (
        <>
            <h1 className={classes.h1}>Add New Meetups</h1>
            <section className={classes.section}>
                <Form onMeetup={addMeetup} />
            </section>
        </>
    )
}

export default NewMeetupsPage;