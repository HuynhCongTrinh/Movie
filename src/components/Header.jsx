import PropType from "prop-types"
import { useState } from "react"
function Header({onSearch}) {
  const [textSearch, setTextSearch] = useState('')
  return (
    <>    <div className="p-4 bg-black flex items-center justify-between ">
        <div className="flex items-center space-x-4">
            <h1 className="text-[30px] uppercase text-blod text-red-700">Movie</h1>
            <nav className="flex items-center space-x-4">
                <a href="#" className="text-white">Home</a>
                <a href="#" className="text-white">About</a>
                <a href="#" className="text-white">Contact</a>
            </nav>
        </div>

        <div className="flex items-center space-x-4">
            <input type="text" placeholder="Search" className="text-black p-4" onChange={(e) => setTextSearch(e.target.value)} value={textSearch}/>
            <button className="p-2 bg-red-700 text-white" onClick={() => onSearch(textSearch)}>Search</button>
        </div>
    </div>
    </>
  ) 
}

Header.propTypes = {
  onSearch: PropType.func,
}

export default Header