import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Form.css'

const API = import.meta.env.VITE_APP_API_URL


function Form() {
    const [form, setForm] = useState({
        bourbon_name: "",
        geographic_origin: "",
        abv: "",
        tasting_notes: "",
        food_pairings: "",
        description: ""
    });

    const navigate = useNavigate()

    // edit form
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            axios.get(`${API}/bourbons/${id}`)
                .then(res => setForm(res.data))
                .catch(err => console.log(err))
        }
    },)


    // Handle text input
    function handleTextInput(event) {
        const id = event.target.id;
        const value = event.target.value

        setForm((currentState) => {
            return {
                ...currentState,
                [id]: value
            };
        });
    }

    // post submit form
    function submitNewBourbon(event) {
        event.preventDefault()

        axios.post(`${API}/bourbons`, form)
            .then(res => navigate(`/bourbons/${res.id}`))
            .catch(error => console.log(error))
    }

    // on submit edit
    function submitEditForm(event) {
        event.preventDefault()

        axios.put(`${API}bourbons/${id}`, form)
            .then(res => navigate(`/bourbons/${res.id}`))
            .catch(error => console.log(error))
    }

    return (
        <form className="form">

            {/* bourbon_name */}
            <label htmlFor=' bourbon_name'>
                <span>Bourbon Name:</span>
                <input
                    id='bourbon_name'
                    type='text'
                    value={form.bourbon_name}
                    required
                    onChange={(e) => { handleTextInput(e) }}
                />
            </label>

            {/*geographic_origin */}
            <label htmlFor=' geographic_origin'>
                <span>Geographical Origin:</span>
                <input
                    id='geographic_origin'
                    type='text'
                    value={form.geographic_origin}
                    required
                    onChange={(e) => { handleTextInput(e) }}
                />
            </label>
            {/* abv */}
            <label htmlFor='abv'>
                <span>ABV %:</span>
                <input
                    id='abv'
                    type='text'
                    value={form.abv}
                    required
                    onChange={(e) => { handleTextInput(e) }}
                />
            </label>
            {/* tasting_notes */}
            <label htmlFor=' tasting_notes'>
                <span>Tasting Notes:</span>
                <input
                    id='tasting_notes'
                    type='text'
                    value={form.tasting_notes}
                    required
                    onChange={(e) => { handleTextInput(e) }}
                />
            </label>
            {/* food_pairing */}
            <label htmlFor=' food_pairings'>
                <span>Food Pairings:</span>
                <input
                    id='food_pairings'
                    type='text'
                    value={form.food_pairings}
                    required
                    onChange={(e) => { handleTextInput(e) }}
                />
            </label>
            {/* description */}
            <label htmlFor='description'>
                <span>Description:</span>
                <input
                    id='geographic_origin'
                    type='text'
                    value={form.geographic_origin}
                    required
                    onChange={(e) => { handleTextInput(e) }}
                />
            </label>

        </form>
    )

}

export default Form