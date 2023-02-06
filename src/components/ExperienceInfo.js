import Experience from "./Experience";


export default function ExperienceInfo(props) {

    const { experience, experiences, onHandleChange, onSubmit, onEdit, isEdit, onDelete } = props;

    const experiencesList = experiences.map(ex => {
        return (
            <Experience ex={ex} onEdit={onEdit} onDelete={onDelete} />
        );
    });

    return (
        <section className="experiences">
            {experiences.length > 0 && <div className="list">
                <h2 className="list-name">Previous experiences:</h2>  {experiencesList}</div>}
            <form >
                <legend>Enter your experience: </legend>
                <fieldset>
                    <label htmlFor="companyName">Company name:</label>
                    <input
                        id="companyName"
                        type="text"
                        name="companyName"
                        value={experience.companyName}
                        onChange={onHandleChange}
                        placeholder="Master Shifu's Warriors"
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="position">Position Title:</label>
                    <input
                        id="position"
                        type="text"
                        name="positionTitle"
                        value={experience.positionTitle}
                        onChange={onHandleChange}                      
                        placeholder="Dragon Warrior"
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="tasks">What were your main tasks?</label>
                    <textarea
                        id="tasks"
                        name="tasks"
                        value={experience.tasks}
                        onChange={onHandleChange}
                        placeholder="Protecting the Valley of Peace"
                        cols="40"
                        rows="5"
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="start">Start date:</label>
                    <input
                        id="start"
                        type="text"
                        name="dateFrom"
                        value={experience.dateFrom}
                        onChange={onHandleChange}
                        placeholder="Summer of 2008"
                        />
                         </fieldset>
                    <fieldset>
                        <label htmlFor="end">End Date:</label>
                        <input
                        id="end"
                        type="text"
                        name="dateTo"
                        value={experience.dateTo}
                        onChange={onHandleChange}
                        placeholder="Current"
                        />
                    </fieldset>
                <button onClick={onSubmit} >{ experiences.length === 0 ? "Submit" :  (isEdit ? "Edit" : "Add more")}</button>
            </form>
        </section>
    );

}