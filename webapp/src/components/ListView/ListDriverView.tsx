import { route } from "preact-router";
import detailedIcon from "../../assets/icons/detailed_view.svg";
import listIcon from "../../assets/icons/list_view.svg";
import "./ListDriverView.css";
import Buttons from "../Buttons/Buttons";


export default function ListDriverView({ pilots }) {
    return (
        <div>
            <Buttons/>
            <div>
                {pilots.map((item) => (
                    <a href={`/drivers/${item.id}`}>
                        <div className="card m-4">
                            <div className="card-body" style="background-color:#ECECEC;">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-4">
                                            <h4 className="card-title"><b>{item.name}</b></h4>
                                        </div>
                                        <div class="col-4 justify-content-center">
                                            <h4 className="card-text">Driver number: #{item.driverNumber}</h4>
                                        </div>
                                        <div class="col-4 justify-content-center">
                                            <h4 className="card-text">Nationality: {item.nationality}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))
                }
            </div>
        </div>
    );
}