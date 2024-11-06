function Header() {
    return (
        <header className="chokokutai-regular">
            <nav className="navgation">
                <ul className="catg">
                    <li><a href="#watch">watch</a></li>
                    <li><a href="#phone">phone</a></li>
                    <li><a href='#lap'>lap</a></li>
                    <li><a href='#tv'>tv</a></li>
                </ul>
            </nav>
            <div className="info-container">
                <h1>Smart Store</h1>

                <p>You can find your watch, phone, lap and tv here</p>
            </div>
        </header>
    )
}

export default Header;