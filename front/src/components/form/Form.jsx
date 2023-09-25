import { useState } from 'react';
import validate from './validation';

export default function Form({ props }) {
    const [input, setInput] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });

        setErrors(validate(input));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props(input);
    }

    return(
        <form>
            <label htmlFor="email">Email: </label>
            <input 
                type="email" 
                name="email" 
                value={input.email} 
                onChange={handleChange}
            />
            {errors.email !== '' && <p style={{ color: 'red' }}>{errors.email}</p>}
            <hr style={{ borderStyle: "none"}} />

            <label htmlFor="password">Password: </label>
            <input 
                type="password" 
                name="password" 
                value={input.password} 
                onChange={handleChange}
            />
            {errors.password !== '' && <p style={{ color: 'red' }}>{errors.password}</p>}
            <hr style={{ borderStyle: "none"}} />

            <button 
                type='submit' 
                disabled={!input.password || !input.email || errors.password || errors.email}
                onClick={handleSubmit}
            >
                Submit
            </button>
        </form>
    );
}