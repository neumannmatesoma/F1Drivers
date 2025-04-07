import { useEffect, useState } from 'preact/hooks';
import "./AddDriver.css"
import { route } from 'preact-router';

export default function AddDriver({ onSave, drivers }) {
    const [name, setName] = useState('');
    const [driverNumber, setDriverNumber] = useState('');
    const [numberOfWDC, setNumberOfWDC] = useState('');
    const [nationality, setNationality] = useState('');
    const [description, setDescription] = useState('');

    const id = window.location.pathname.split('/')[2]
    const driverForEditing = id ? drivers.find(driver => driver.id == id) : null;

    if (driverForEditing) {
        useEffect(() => {
            setName(driverForEditing.name);
            setDriverNumber(driverForEditing.driverNumber);
            setNumberOfWDC(driverForEditing.numberOfWDC);
            setNationality(driverForEditing.nationality);
            setDescription(driverForEditing.description);
        }, [driverForEditing])
    }


    const handleSubmit = (e: Event) => {
        e.preventDefault();

        const newItem = {
            name,
            driverNumber: Number(driverNumber),
            numberOfWDC: Number(numberOfWDC),
            nationality,
            description,
            ...(driverForEditing&&{id:driverForEditing.id})
        };


        setName('');
        setDriverNumber('');
        setNumberOfWDC('');
        setNationality('');
        setDescription('');

        onSave(newItem);

        route("/drivers");
    };

    const handleCancel = () => {
        if (window.confirm("Are you sure you want to cancel? The data will be lost!")) {
            setName('');
            setDriverNumber('');
            setNumberOfWDC('');
            setNationality('');
            setDescription('');
            console.log("Űrlap törölve.");
            route("/drivers");
        }
    };

    return (
        <div className="formContainer justify-content-center">
            <h2>Adding a new driver</h2>
            <form onSubmit={handleSubmit}>
                <div class="container-fluid">
                    {/* row 1 */}
                    <div class="row">
                        <div className="col-8 mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e: Event) => setName((e.target as HTMLInputElement).value)}
                                required
                            />
                        </div>
                        <div className="col-4 mb-3">
                            <label className="form-label">Driver number</label>
                            <input
                                type="number"
                                className="form-control"
                                value={driverNumber}
                                onChange={(e: Event) => setDriverNumber((e.target as HTMLInputElement).value)}
                                required
                            />
                        </div>
                    </div>
                    {/* row 2 */}
                    <div class="row">
                        <div className="col-6 mb-3">
                            <label className="form-label">Championships won</label>
                            <input
                                type="number"
                                className="form-control"
                                value={numberOfWDC}
                                onChange={(e: Event) => setNumberOfWDC((e.target as HTMLInputElement).value)}
                                required
                            />
                        </div>
                        <div className="col-6 mb-3">
                            <label className="form-label">Nationality</label>
                            <input
                                type="text"
                                className="form-control"
                                value={nationality}
                                onChange={(e: Event) => setNationality((e.target as HTMLTextAreaElement).value)}
                                required
                            />
                        </div>
                    </div>
                    {/* row 3 */}
                    <div class="row">
                        <div className="col-12 mb-3" style="height:20vh">
                            <label className="form-label">Description</label>
                            <textarea
                                className="form-control h-75"
                                value={description}
                                onChange={(e: Event) => setDescription((e.target as HTMLTextAreaElement).value)}
                                required
                            />
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-success" style="margin-left:10px">Save</button>
                <button type="button" className="btn btn-danger" onClick={handleCancel} style="margin-left:15px">Cancel</button>
            </form>
        </div>
    );
}