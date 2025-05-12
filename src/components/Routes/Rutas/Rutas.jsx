import {Routes, Route} from 'react-router-dom'


import { Home } from '../../pages/Home/Home'
import { Historia } from '../../pages/Historia/Historia'
import { Introduccion } from '../../pages/Introduccion/Introduccion'
import { Experiencia } from '../../pages/Experiencia/Experiencia'


export function Rutas (){
    return(
        <>
        
        <Routes>
            <Route path='/Inicio' element={<Home/>}></Route>
            <Route path='/Proyectos' element={<Historia/>}></Route>
            <Route path='/Laura Mosquera' element={<Introduccion/>}></Route>
            <Route path='/Experiencia' element={<Experiencia/>}></Route>
        </Routes>
        
        
        
        
        
        </>
    )
}


