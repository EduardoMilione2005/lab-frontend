import { getInitials } from './utils.js'

export default function Gallery({ people }) {
    return (
        <>
            <h2>People in Science</h2>
            <ListOfPeople people={people} />
        </>
    )
}

function ListOfPeople({ people }) {
    return (
        <ul>
            {people.map((person) => (
                <li key={person.id}>
                    <Profile person={person} />
                </li>
            ))}
        </ul>
    )
}

function Profile({ person }) {
    let style = {}
    if (person.profession === 'chemist') style = { backgroundColor: 'gray' }
    return (
        <div style={style}>
            <h3 className="my-style-class">{person.name}</h3>
            <p>
                <strong>Profession:</strong> {person.profession}
            </p>
            <p>
                <strong>Accomplishment:</strong> {person.accomplishment}
            </p>
            <img
                src={`https://i.imgur.com/${person.imageId}s.jpg`}
                alt={person.name}
            />
            <p>
                <strong>Initials:</strong> {getInitials(person.name)}
            </p>
        </div>
    )
}
