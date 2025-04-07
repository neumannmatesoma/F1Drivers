import { route } from "preact-router";
import deleteIcon from "../../assets/icons/delete.svg";
import editIcon from "../../assets/icons/edit.svg";
import "./CardComponentGrid.css"

export default function CardComponentGrid({ pilot, onDelete }) {
    return (
        <div className="col" key={pilot.id}>
            <div className="card h-100">
                <div className="card-img-top" style={{ height: "300px", overflow: "hidden" }}>
                    <img
                        src={"https://placehold.co/100"}
                        alt={pilot.name}
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="card-body" style="padding: 30px">
                    <h3 className="card-title text-truncate">{pilot.name}</h3>
                    <p className="card-text">Driver number: <b>#{pilot.driverNumber}</b></p>
                    <p className="card-text">World Championships won: <b>{pilot.numberOfWDC}</b></p>
                    <p className="card-text">Nationality: <b>{pilot.nationality}</b></p>
                    <p className="card-text">{pilot.description}</p>
                    <div className="d-flex justify-content-between mt-3">
                        <div>
                            <img
                                src={deleteIcon}
                                alt="delete"
                                style={{ cursor: "pointer", width: "24px", height: "24px" }}
                                onClick={() => {
                                    if (window.confirm("Are you sure you want to delete this driver?")) {
                                        onDelete(pilot.id);
                                        route("/drivers");
                                    }
                                }}
                            />
                        </div>
                        <div>
                            <img
                                src={editIcon}
                                alt="edit"
                                style={{ cursor: "pointer", width: "24px", height: "24px" }}
                                onClick={() => route(`/drivers/${pilot.id}/edit`)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}