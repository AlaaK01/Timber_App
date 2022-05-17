import './header.css'

const Header = () => {
  return (
    <header>
        <nav className="navbar">
            <h1>Timber <span>Bolag</span></h1>
            <div className="links">
                <a href="/" className="active">Hem</a>
                <a href="/">Hem</a>
                <a href="/">Hem</a>
                <a href="/">Hem</a>
            </div>
        </nav>
    </header>
  );
};

export default Header;