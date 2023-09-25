export default function validate(input) {
    let errors = {};

    //email validation
    if(!/\S+@\S+\.\S+/.test(input.email)) errors.email = '*El email es invalido';
    if(input.email.length > 35) errors.email = '*No puede contener mas de 35 caracteres';
    if(/^\s*$/.test(input.email)) errors.email = '*Campo Obligatorio'

    //password validation
    if(!/(?=.*?[0-9])/.test(input.password)) errors.password = '*Debe contener al menos un numero'; //no lo toma
    if(!(input.password.length >= 6 && input.password.length <= 10)) errors.password = '*Debe tener entre 6 y 10 caracteres';

    return errors;
}