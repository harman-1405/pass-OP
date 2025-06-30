import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-purple-200 sticky top-0 z-50">
        <div className="mycontainer flex justify-between items-center px-4 py-5 h-14 ">

        <div className="logo font-bold text-purple-950 text-2xl">
            <span className='text-purple-400'>&lt;</span>
            Pass
            <span className='text-purple-400'>OP/&gt;</span>
           

        </div>
        {/* <ul>
            <li className="flex gap-8">
                <a className="hover:font-bold" href="/">Home</a>
                <a className="hover:font-bold" href="/">About</a>
                <a className="hover:font-bold" href="/">Contact</a>
            </li>
        </ul> */}
        <a href="https://github.com/harman-1405/pass-OP">
        <button className='text-white my-5 px-9 rounded-full flex justify-between items-center'>
            <img className='p-5 w-16 ' src="icons/github.svg" alt="Github" />
        </button>
        </a>
        </div>
    </nav>
  )
}

export default Navbar