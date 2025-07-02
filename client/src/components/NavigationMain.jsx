import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white p-4 flex items-center justify-between">
      <div className="text-xl font-bold">Mon Portfolio</div>

      {/* Bouton burger pour mobile */}
      <button 
        className="md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? '✖' : '☰'}
      </button>

      {/* Menu */}
      <ul className={`flex flex-col md:flex-row md:gap-6 absolute md:static top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-transform transform md:transform-none
        ${open ? 'translate-y-0' : '-translate-y-full'} md:translate-y-0`}>
          <li className="p-2 hover:bg-gray-700 md:hover:bg-transparent">
          <a href="#projets">Présentation</a>
        </li>
        <li className="p-2 hover:bg-gray-700 md:hover:bg-transparent">
          <a href="#projets">Projets</a>
        </li>
        <li className="p-2 hover:bg-gray-700 md:hover:bg-transparent">
          <a href="#contact">Contact</a>
        </li>
        <li className="p-2 hover:bg-gray-700 md:hover:bg-transparent">
          <a href="#about">Le petit +</a>
        </li>
      </ul>
    </nav>
  )
}
