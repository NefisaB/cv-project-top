import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";

export default function Education(props) {
    const { ed, onEdit, onDelete, isPreview=false } = props;

    return (
        <div className="education" key={ed.id}>
            <div>School Name: {ed.schoolName}</div>
            <div>Title of Study: {ed.titleOfStudy}</div>
            <div>Date Of Graduation: {ed.dateOfGraduation}</div>
            {!isPreview && <button
                className="edit-btn"
                onClick={() => onEdit(ed.id)}>
                <FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></button>}
            {!isPreview && <button
                className="delete-btn"
                onClick={() => onDelete(ed.id)}>
                <FontAwesomeIcon icon="fa-solid fa-trash-can" /></button>}
        </div>
    );
}