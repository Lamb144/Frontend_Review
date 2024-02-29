import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const API = import.meta.env.VITE_APP_API_URL


function BourbonsShow() {
    const [bourbonDetails, setBourbonDetails] = useState({})

    const { id } = useParams

    useEffect(() => {
        axios.get(`${API}/bourbons/${id}`)
            .then(res => setBourbonDetails(res.data))
            .catch(error => console.log(error))
    }, [id])


    return (
        <div className="bourbonsShow">
            <h2>{bourbonDetails.bourbon_name}</h2>
            <span>{bourbonDetails.geographic_origin}</span>
            <span>{bourbonDetails.abv}</span>
        </div>
    )
}
export default BourbonsShow