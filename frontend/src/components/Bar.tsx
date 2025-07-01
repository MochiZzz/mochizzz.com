import Typewriter from "./Typewriter"

function Bar() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Typewriter text="MochiZzz" delay={100} />
        </div>
        <ul className="nav-links">
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Bar