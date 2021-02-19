import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

// Write your Character component here

const Character = (props) => {

    const {people, id} = props;

    const [name, setName] = useState("")
    const [height, setHeight] = useState("")
    const [mass, setMass] = useState("")
    const [hairColor, setHairColor] = useState("")
    const [skinColor, setSkinColor] = useState("")
    const [eyeColor, setEyeColor] = useState("")
    const [birthYear, setBirthYear] = useState("")
    const [gender, setGender] = useState("")
    const [films, setFilms] = useState([])

    useEffect(() => {
        setName(people[id].name);
        setHeight(people[id].height);
        setMass(people[id].mass);
        setHairColor(people[id].hair_color);
        setSkinColor(people[id].skin_color)
        setEyeColor(people[id].eye_color);
        setBirthYear(people[id].birth_year);
        setGender(people[id].gender);
        // setFilms(people[id].films)
    },[id])


    const CharDiv =styled.div`
        display: flex column;
        margin-top: -52%;
        height: 100%;
        justify-content: space-evenly;
    `


    return (
        <CharDiv>
            <h2>{name}</h2>
            <p>{`Birth Year: ${birthYear}`}</p>
            <p>{`Gender: ${gender}`}</p>
            <p>{`Height: ${height} cm`}</p>
            <p>{`Mass: ${mass} kg`}</p>
            <p>{`Hair Color: ${hairColor}`}</p>
            <p>{`Skin Color: ${skinColor}`}</p>
            <p>{`Eye Color: ${eyeColor}`}</p>
        </CharDiv>
    )
}

export default Character;