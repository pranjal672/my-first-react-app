import Cards from "./ui/setcards";
import { useRef } from "react";

export default function Form(props) {
    const textName = useRef();
    const textAge = useRef();
    function submitForm(e) {
        e.preventDefault();
        const dataName = textName.current.value;
        const dataAge = textAge.current.value;
        const dataForm = {
            name: dataName,
            age: dataAge,
        }
        props.onMeetup(dataForm)
    }

    return (
        <Cards>
            <h3>Enter Details</h3>
            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" required id="name" ref={textName} />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="text" required id="age" ref={textAge} />
                </div>
                <button>Add Meetup</button>
            </form>
        </Cards>
    )
}