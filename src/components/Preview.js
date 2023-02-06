import Education from "./Education";
import Experience from "./Experience";

export default function Preview(props) {

    const { generalInfo, educations, experiences } = props;

    const educationsList = educations.map(ed => {
        return (
            <Education ed={ed} isPreview={true} />
            );
    });
    
    const experiencesList = experiences.map(ex => {
        return (
            <Experience ex={ex} isPreview={true} />
        );
    });


    return (
        <div className="main-preview">
            <section>
                <h1>{generalInfo.name}</h1>
                <h2>{generalInfo.email}</h2>
                <div>{generalInfo.phone}</div>
            </section>

            <section>
                <h2>Education</h2>
                { educationsList}
            </section>

            <section>
                <h2>Experience</h2>
                {experiencesList}
            </section>
        </div>
    );
}