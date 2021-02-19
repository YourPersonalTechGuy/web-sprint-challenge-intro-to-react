import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import './App.css';
import './components/Character'
import axios from 'axios';
import Character from './components/Character';
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const baseURL = "https://swapi.dev/api/"
  const [total, setTotal] = useState(0)
  const [people, setPeople] = useState([])
  const [id, setID] = useState(0)
  


useEffect(() => {
   return total <= 82 ? creatingPeople(total+1) : console.log(people)
},[total])

const creatingPeople = (personIndex) => {
 axios.get(`${baseURL}people/${personIndex}/`)
 .then((res) => {
  let persons = people;
  console.log(res.data)
  persons.push(res.data)
  setPeople(persons)
   
 })
 .catch((err) => {
   console.log(err)
   setTotal(total+1)
  })
 .then(() => {
  setTotal(total+1)
 })
}
  const StA = styled.a`
    font-weight: bold;
    display: block;
    padding: 5%;
    width: 100%;
    height: 100%;
    background-color:  rgb(0 ,238 ,255 ,.5);
  &:hover{
    cursor: pointer;
    background-color: rgb(36, 226, 36,.5);
  }
  `
  const StLi = styled.li`
    list-style: none;
    text-align: left;
    margin:0%;
    text-align: center;
  `
  const LiDiv = styled.div`
    display: inline;
    width: fit-content;
    height: 80.25%;
    padding: 0%;
  `

const creatingList = people.map((person,index)=>{
  return (
  <StLi>
      <StA index={index} onClick={() => {setID(index)}}>{person.name}</StA>
  </StLi>)
})


  
  return (
    <div className="App">
      <h1 className="Header">Characters viewer</h1>
        {people.length < 82 && <span>{`loading page ${total}/82`}</span>}
        <LiDiv>
          {people.length < 82 ? null : <ul>{creatingList}</ul>}
        </LiDiv>
        {people.length < 82 ? null : <Character people={people} id={id} />} 
    </div>
  );
}




export default App;
