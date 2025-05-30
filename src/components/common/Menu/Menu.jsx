import { Link } from "react-router-dom";

import './Menu.css'

export function Menu() {
return (
    <>
    <nav class="navbar navbar-expand-lg menu navbar-dark">
        <div class="container-fluid">
        <Link class="navbar-brand" to='/Laura Mosquera'>
            Laura Mosquera Gomez
        </Link>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/Inicio' >
                Inicio
                </Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to='/Laura Mosquera'>
            Sobre mi
            </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/Proyectos'>
            Mis proyectos
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" aria-disabled="true" to='/Experiencia'>
            Mi experiencia
                </Link>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    </>
);
}
