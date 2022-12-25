import MeetupItem from "./meetupitems"

export default function MeetupList(props) {
    return (

        <ul>
            {props.data.map(meetup => <MeetupItem
                key={meetup.id}
                id={meetup.id}
                name={meetup.name}
                age={meetup.age} />
            )}
        </ul>

    )
}