//react
import { Link } from "react-router-dom";

//styles
import styles from './nav.module.css';

//resources
import logo from './resources/name.png';

export default function Nav({ logOut }) {
    const totalChar = 826;
    return(
        <>
            <div className={styles.nav}>
                <div className={styles.navD}>
                    <div className={styles.links}>
                        <img className={styles.logo} src={logo} alt="logo" />
                        <Link to='/about'><button className={styles.firstBorder}>About</button></Link>
                        <Link to='/home'><button>Home</button></Link>
                        <Link to='/favorites'><button>Favorites</button></Link>
                        <Link to='/catalogue'><button>Catalogue</button></Link>
                        <Link to='/music'><button>Music</button></Link>
                    </div>

                    <div className={styles.search}>
                        <button className={styles.logout} onClick={logOut}>Log Out</button>
                    </div>
                </div>
            </div>
        </>
    );
}