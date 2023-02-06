import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import uniqid from "uniqid";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import "./style.css";
import Preview from "./components/Preview";

function App() {

  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  function onHandleGeneralInfoChange(event) {
    const { name, value } = event.target;
    setGeneralInfo(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    });
  }

  function onSumbitGeneralInfo(event) {
    event.preventDefault();
    console.log(generalInfo)
    
  }

  const [education, setEducation] = useState({
    id: uniqid(),
    schoolName: '',
    titleOfStudy: '',
    dateOfGraduation: ''
  });

  function onHandleChangeEducation(event) {
    const { name, value } = event.target;
    setEducation(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    });
  }


  const [educationsArray, setEducationsArray] = useState([]);

  const [isEditEducation, setIsEditEducation] = useState(false);

  function onEditEducationInfo(id) {
    setIsEditEducation(prevState => !prevState);
    const educationIndex = educationsArray.findIndex(el => el.id === id);
    setEducation(educationsArray[educationIndex]);
  }

  function onDeleteEducationInfo(id) {
    setEducationsArray(prevState => {
      return prevState.filter(el => el.id !== id);
    });
  }

  function onSubmitEducation(event) {
    event.preventDefault();
    if (isEditEducation) {
      setEducationsArray(prevState => {
        return prevState.map(el => {
          if (el.id === education.id) {
            return el = education;
          } else return el;
        });
      });
      setIsEditEducation(prevState => !prevState);
    } else {
      setEducationsArray(prevState => [...prevState, education]);
    }
    setEducation({
      id: uniqid(),
      schoolName: '',
      titleOfStudy: '',
      dateOfGraduation: ''
    });
  }


  const [experience, setExperience] = useState({
    id: uniqid(),
    companyName: '',
    positionTitle: '',
    tasks: '',
    dateFrom: '',
    dateTo: ''
  });

  function onHandleChangeExperience(event) {
    const { name, value } = event.target;
    setExperience(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    });
    
  }

  const [experiencesArray, setExperiencesArray] = useState([]);

  const [isEditExperience, setIsEditExperience] = useState(false);

  function onEditExperienceInfo(id) {
    setIsEditExperience(prevState => !prevState);
    const experienceIndex = experiencesArray.findIndex(el => el.id === id);
    setExperience(experiencesArray[experienceIndex]);
  }

  function onDeleteExperienceInfo(id) {
    setExperiencesArray(prevState => {
      return prevState.filter(el => el.id !== id);
    });
  }

  function onSubmitExperience(event) {
    event.preventDefault();
    if (isEditExperience) {
      setExperiencesArray(prevState => {
        return prevState.map(el => el.id === experience.id ? experience : el);
      });
      setIsEditExperience(prevState => !prevState);
    } else {
      setExperiencesArray(prevState => [...prevState, experience]);
    }  
    setExperience({
      id: uniqid(),
      companyName: '',
      positionTitle: '',
      tasks: '',
      dateFrom: '',
      dateTo: ''
    });
  }

  const [isPreview, setIsPreview] = useState(false);

  function handlePreview() {
    setIsPreview(prevState => !prevState);
  }


  return (
    <div className="App">
      {!isPreview && <div className="main-edit">
        <GeneralInfo
        generalInfo={generalInfo}
        onHandleChange={onHandleGeneralInfoChange}
        onSubmit={onSumbitGeneralInfo} />
      <EducationInfo
        education={education}
        educations={educationsArray}
        onHandleChange={onHandleChangeEducation}
        onSubmit={onSubmitEducation}
        onEdit={onEditEducationInfo}
        isEdit={isEditEducation}
        onDelete={onDeleteEducationInfo} />
      <ExperienceInfo
        experience={experience}
        experiences={experiencesArray}
        onHandleChange={onHandleChangeExperience}
        onSubmit={onSubmitExperience}
        onEdit={onEditExperienceInfo}
        isEdit={isEditExperience}
      onDelete={onDeleteExperienceInfo}
      />
      </div>}
      {isPreview &&
        <Preview generalInfo={generalInfo} educations={educationsArray} experiences={experiencesArray} />}
      <button onClick={handlePreview}>{isPreview ? "Edit" : "Preview"}</button>
      
    </div>
  );
}

export default App;
