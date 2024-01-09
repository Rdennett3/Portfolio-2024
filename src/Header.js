import bobd from './Images/bobd-2.png';

const Header = () => {
    return <header className="App-header">
        <div className="header-section">
            <img src={bobd} className="App-logo" alt="logo" />
        </div>
        <div className="header-section">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>

    </header>;
}

export default Header;