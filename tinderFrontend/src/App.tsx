import './App.css'
import { NavBar } from './Nav'
import { useState, useEffect } from 'react'
import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'
import { StepThree } from './StepThree'

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [college, setCollege] = useState("");
  const [grade, setGrade] = useState("");
  const [biography, setBiography] = useState("");
  const [category, setCategory] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const [height, setHeight] = useState("");
  const [religion, setReligion] = useState("");
  const [race, setRace] = useState("");
  const [interests, setInterests] = useState("");
  const [lcStreak, setLCStreak] = useState("");

  useEffect(() => {
    console.log({
      name,
      age,
      gender,
      college,
      grade,
      biography,
      category
    });
  }, [name, age, gender, college, grade, biography, category]);

  const steps = (step: number) => {
    switch (step) {
      case 1:
        return (
          <StepOne
            name={name} setName={setName}
            age={age} setAge={setAge}
            gender={gender} setGender={setGender}
            college={college} setCollege={setCollege}
            grade={grade} setGrade={setGrade}
            biography={biography} setBiography={setBiography}
            setCategory={setCategory}
            setCurrentStep={setCurrentStep}
          />
        );
      case 2:
        return (
          <StepTwo
            height={height} setHeight={setHeight}
            religion={religion} setReligion={setReligion}
            interests={interests} setInterests={setInterests}
            lcStreak={lcStreak} setLcStreak={setLCStreak}
            race={race} setRace={setRace}
            setCurrentStep={setCurrentStep}
          />
        );
      case 3:
        return (
          <StepThree
            name={name}
            age={age}
            gender={gender}
            college={college}
            grade={grade}
            biography={biography}
            height={height}
            race={race}
            religion={religion}
            interests={interests}
            lcStreak={lcStreak}
            setCurrentStep={setCurrentStep}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className='flex flex-col items-center justify-center bg-white h-screen w-full'>
      <NavBar setCurrentStep={setCurrentStep} />
      {steps(currentStep)}
    </div>
  )
}

export default App
