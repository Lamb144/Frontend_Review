import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home.jsx'
import NewBourbon from '../../pages/NewBourbon.jsx'
import Edit from '../../pages/Edit.jsx'
import Show from "../../pages/Show.jsx"
import Error from "../../pages/Error.jsx"
import Bourbons from "../../pages/Bourbons.jsx"
import About from "../../pages/About.jsx"

import { Navigate } from 'react-router-dom'

function RouteComponent() {
    return (

        <Routes>

            <Route path="/" element={<Home />} />

            <Route path='/about' element={<About />} />

            <Route path='/bourbons' element={<Bourbons />} />

            <Route path='/NewBourbon' element={<NewBourbon />} />

            <Route path='bourbons/:id' element={<Show />} />

            <Route path='/bourbons/:id/edit' element={<Edit />} />

            <Route path='/not-found' element={<Error />} />

            <Route path='*' element={<Navigate to="/not-found" />} />

        </Routes>

    )
}

export default RouteComponent;