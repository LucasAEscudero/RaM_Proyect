//react
import { useState, useEffect } from 'react';

//components
import validate from './validation';

//resources
import name from './resources/name.png';
import wallpaper from './resources/login.jpg';

//styles
import form from './form.module.css';

export default function Form({ inputUser, registerUser }) {
    //inputs state
    const [input, setInput] = useState({
        email: '',
        password: ''
    });
    //errors state
    const [errors, setErrors] = useState({});
    const [register, setRegister] = useState(false);

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
        inputUser(input);
    }

    const handleRegister = () => {
        setRegister(true);

        setInput({
            email: '',
            password: ''
        });
        setErrors({});
    }   

    const handleDB = (event) => {
        //conexion con back - carga de user
        event.preventDefault();

        registerUser(input);

        setRegister(false);

        setInput({
            email: '',
            password: ''
        });
        setErrors({});
    }

    
    return(
        <div className={form.form}>
            <img className={form.wallpaper} src={wallpaper} alt="wallpaper" />
            <form className={form.login} onSubmit={handleDB}>
                <img className={form.name} src={name} alt="Rick and Morty" />
                <label htmlFor="email">Email: </label>
                <input 
                    type="email" 
                    name="email" 
                    value={input.email} 
                    onChange={handleChange}
                    placeholder='Your email...'
                />
                {errors.email !== '' && <p className={form.error}>{errors.email}</p>}
                <hr style={{ borderStyle: "none"}} />

                <label htmlFor="password">Password: </label>
                <input 
                    type="password" 
                    name="password" 
                    value={input.password} 
                    onChange={handleChange}
                    placeholder='Your password...'
                />
                {errors.password !== '' && <p className={form.error}>{errors.password}</p>}
                <hr style={{ borderStyle: "none"}} />

                { register &&
                    <button 
                    type='submit' 
                    disabled={!input.password || !input.email || errors.password || errors.email}
                    onClick={handleDB}
                    >
                        Register
                    </button>
                }
                
                { !register &&
                    <button 
                    type='submit' 
                    disabled={!input.password || !input.email || errors.password || errors.email}
                    onClick={handleSubmit}
                    >
                        Submit
                    </button>
                }
                {  !register &&
                    <div className={form.register}>
                        <p>First time?</p>
                        <button onClick={handleRegister}>Register here.</button>
                    </div>
                }

            </form>
        </div>
    );
}