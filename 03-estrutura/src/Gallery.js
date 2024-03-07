export default function Gallery() {
    return (
        <>
            <h2>People in Science</h2>
            <ListOfPeople />
        </>
    )
}

function ListOfPeople() {
    const scientists = [
        { name: 'Marie Curie', born: 1867, died: 1934 },
        { name: 'Albert Einstein', born: 1879, died: 1955 },
        { name: 'Niels Bohr', born: 1885, died: 1962 },
    ]
    return (
        <ul>
            {scientists.map((person, index) => (
                <li key={index}>{person.name}</li>
            ))}
        </ul>
    )
}
