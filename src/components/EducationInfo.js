import Education from "./Education";

export default function EducationInfo(props) {
    const { education, educations, onHandleChange, onSubmit, onEdit, isEdit, onDelete} = props;
    
    const educationsList = educations.map(ed => {
        return (
                <Education ed={ed} onEdit={onEdit} onDelete={onDelete} />
            );
        });

    return (
        <section className="educations" >
            {educations.length > 0 && <div className="list">
                <h2 className="list-name">Educations:</h2> {educationsList}</div>}
            <form>
                <legend>Enter your education:</legend>
                <fieldset>
                    <label htmlFor="school">School Name:</label>
                    <input
                        id="school"
                            type="text"
                            name="schoolName"
                            value={education.schoolName}
                            onChange={onHandleChange}
                            placeholder="University Of Awesomeness"
                        />
                </fieldset>

                 <fieldset>
                    <label htmlFor="title">Title of Study:</label>
                    <input
                        id="title"
                            type="text"
                            name="titleOfStudy"
                            value={education.titleOfStudy}
                            onChange={onHandleChange}
                            placeholder="Master of Kung Fu"
                        />
                    
                </fieldset>
                 <fieldset>
                    <label htmlFor="date">Date of Graduation:</label>
                    <input
                        id="date"
                            type="text"
                            name="dateOfGraduation"
                            value={education.dateOfGraduation}
                            onChange={onHandleChange}
                            placeholder="Once Upon A Time"
                        />
                </fieldset>
                <button onClick={onSubmit}>{educations.length === 0 ? "Submit" : (isEdit ? "Edit" : "Add more") }</button>
            </form>
        </section>
    )
}