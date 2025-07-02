import Typewriter from "./Typewriter"

function Bar() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="/">
          <div className="logo">
            <Typewriter text="MochiZzz" delay={100}/>
          </div>
        </a>
        <ul className="nav-links">
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Bar