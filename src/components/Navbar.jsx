import YoutubeLogo from './YoutubeLogo' 
export default function Navbar() {
    return (
        <nav id="navbar">
            <div id='logo'>
             <YoutubeLogo height="1.8rem" width="3rem"/>
             <span>YouTube</span>
            </div>
            <div id='search-container'>
                <input type="text" placeholder='Search' />
            </div>
            <div id='user-icon'>
                <img src="https://api.dicebear.com/8.x/identicon/svg?seed=Alejandra" alt="User" />
            </div>
        </nav>
    )
}