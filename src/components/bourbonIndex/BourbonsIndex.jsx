
import { useEffect, useState } from "react"
import axios from "axios"

const API = import.meta.env.VITE_APP_API_URL

function BourbonsIndex() {
    const [allBourbons, setAllBourbons] = useState([])

    function getAllBourbons() {
        axios.get(`${API}/bourbons`).then(res => {
            setAllBourbons(res.data)
        })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getAllBourbons()
    }, [])

    return (
        <>
            <div className="TBD">
                <h2>Browse Bourbons</h2>
                {
                    allBourbons.map(bourbonObj => bourbonObj.title)
                }
            </div>
        </>
    )
}

export default BourbonsIndex