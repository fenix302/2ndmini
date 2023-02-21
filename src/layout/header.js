import './header.css'

const Header = () => {
    return(
        <header>

            <div className="contents">

                <nav className="navbar navbar-expand-lg navbar-light container justify-content-between" id="navbar-example2">
                    <ul class="navbar-brand">
                        <li><a href="#"><img src="img/logo.png" alt="logo" /></a></li>
                    </ul>

                </nav>

                <div className="first">                    
                    <p className="h1">구로 문화센터</p>
                </div>
            </div>
        </header>
    )
}

export default Header