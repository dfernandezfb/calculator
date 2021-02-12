import logo from './../../logo.svg';
import './Header.css';

const Header = () => {
    return (
        <header className="App-header">
            <div className='logo'>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Calculator</p>
            </div>
            <p className='contact'>Diego Fernández</p>
        </header>
    )
}

export default Header
