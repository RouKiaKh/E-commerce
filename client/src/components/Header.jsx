import viteLogo from '/vite.svg'
import '/src/App.css'
 function Header() {
    return (
        <header className='header'>
            <img src={viteLogo} width="50px" alt="React logo" className='img'/>
            <nav className='nav'>
                <span>My travel journey</span>
            </nav>
        </header>
    )
  }
  export default Header