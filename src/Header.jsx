function Header()
{

    return(
        <header>
            <div className="logo">
                <h1>RaadRemon</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Serivce</a></li>
                </ul>
            </nav>
            <div className="button">
                <button id="btn">Contact</button>
            </div>
        </header>
    );
}

export default Header