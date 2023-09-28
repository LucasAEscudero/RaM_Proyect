import advertence from './resources/advertence.png';

export default function Error() {
    return(
        <div>
            <img src={advertence} alt="Advertence" />
            <h1>Ups... Error 404</h1>
        </div>
    );
}