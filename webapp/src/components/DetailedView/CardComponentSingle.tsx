import { route } from "preact-router";
import deleteIcon from "../../assets/icons/delete.svg";
import editIcon from "../../assets/icons/edit.svg";

export default function CardComponentSingle({ pilot, onDelete }) {
    return (
        <div className="container-fluid px-4 py-3" style="margin-top: 20px;">
            <div className="row row-cols-1">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-img-top" style={{ height: "200px", overflow: "hidden" }}>
                            <img
                                src={"https://placehold.co/400"}
                                alt={pilot.name}
                                className="w-100 h-100"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-truncate">{pilot.name}</h5>
                            <p className="card-text">Driver number: #{pilot.driverNumber}</p>
                            <p className="card-text">World Championships won: {pilot.numberOfWDC}</p>
                            <p className="card-text">Nationality: {pilot.nationality}</p>
                            <p className="card-text">{pilot.description}</p>
                            <div className="d-flex justify-content-between mt-3">
                                <div>
                                    <img
                                        src={deleteIcon}
                                        alt="delete"
                                        style={{ cursor: "pointer", width: "24px", height: "24px" }}
                                        onClick={() => {
                                            onDelete(pilot.id);
                                            route("/drivers");
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
            </div>
        </div>
    );
}