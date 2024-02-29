import { useState } from 'react'


function Form() {
    const [form, setForm] = useState({


        bourbon_name: "",
        geographic_origin: "",
        abv: "",
        tasting_notes: "",
        food_pairings: "",
        description: ""
    })

    // Handle text input
    function handleTextInput(event) {
        const id = event.target.id;
        const value = event.target.value

        setForm((currentState) => {
            return {
                ...currentState,
                [id]: value
            }
        })
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

                // geographic_origin



                // abv
                />
            </label>

        </form>
    )

}

export default Form