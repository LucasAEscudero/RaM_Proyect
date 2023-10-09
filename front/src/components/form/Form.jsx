//react
import { useState, useEffect } from 'react';

//components
import validate from './validation';

//resources
import name from './resources/name.png';
import wallpaper from './resources/login.jpg';

//styles
import form from './form.module.css';

export default function Form({ props }) {
    //inputs state
    const [input, setInput] = useState({
        email: '',
        password: ''
    });
    //errors state
    const [errors, setErrors] = useState({});
    //dispatch access

    //inputs function
    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    }

    useEffect(() => {
        if(input.email.length !== 0 && input.password.length !== 0) setErrors(validate(input));
    }, [input]);

    //button function
    const handleSubmit = (event) => {
        event.preventDefault();
        props(input);
    }

    return(
        <div className={form.form}>
            <img className={form.wallpaper} src={wallpaper} alt="wallpaper" />
            <form className={form.login}>
                <img className={form.name} src={name} alt="Rick and Morty" />
                <label htmlFor="email">Email: </label>
                <input 
                    type="email" 
                    name="email" 
                    value={input.email} 
                    onChange={handleChange}
                    placeholder='Your email...'
                />
                {errors.email !== '' && <p style={{ color: 'red' }}>{errors.email}</p>}
                <hr style={{ borderStyle: "none"}} />

                <label htmlFor="password">Password: </label>
                <input 
                    type="password" 
                    name="password" 
                    value={input.password} 
                    onChange={handleChange}
                    placeholder='Your password...'
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
        </div>
    );
}