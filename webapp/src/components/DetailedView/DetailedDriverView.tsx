import { href } from "react-router-dom";
import { route } from "preact-router";
import { useEffect } from "preact/hooks";
import CardComponentGrid from "./CardComponentGrid";
import CardComponentSingle from "./CardComponentSingle";

export default function DetailedDriverView({ pilots, onDelete }) {
    let id = Number(window.location.pathname.split('/')[2]);
    if (!isNaN(id)) {
        let pilot = pilots.find(x => x.id == id);

        useEffect(() => {
            if (!pilot) {
                route("/drivers");
            }
        }, []);

        if (pilot !== undefined) {
            return (
                <div className="container-fluid px-4 py-3">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <CardComponentSingle
                            pilot={pilot}
                            onDelete={onDelete}
                        />
                    </div>
                </div>
            );
        }

    }



    return (
        <div className="container-fluid px-4 py-3">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {pilots.map(pilot => (
                    <CardComponentGrid
                        pilot={pilot}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
}