import './Nav.css';
import { route } from "preact-router";


export function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid d-flex flex-column align-items-center">
                    <div className="navbar-nav justify-content-center">
                    <a className="nav-link" onClick={() => route('/drivers')}>Drivers</a>
                    <a className="nav-link" onClick={() => route('/drivers/new-driver')}>New driver</a>
                </div>
            </div>
        </nav>
    );
}

