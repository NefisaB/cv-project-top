import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";

export default function Experience(props) {
    const { ex, onEdit, onDelete, isPreview=false} = props;
    return (
            <div key={ex.id}>
                <div>Company: {ex.companyName}</div>
                <div>Position: {ex.positionTitle}</div>
                <div>Tasks: {ex.tasks}</div>
                <div>From: {ex.dateFrom}</div>
                <div>To: {ex.dateTo}</div>
            {!isPreview && <button
                className="edit-btn"
                onClick={() => onEdit(ex.id)}><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></button>}
            {!isPreview && <button
                className="delete-btn"
                onClick={() => onDelete(ex.id)}><FontAwesomeIcon icon="fa-solid fa-trash-can" /></button>}
            </div>
    );
}