import { SearchIcon } from 'lucide-react'
import React from 'react'

const Search = ({ value, onChange }) => {
  return (
    <div className='border border-[#D0D5DD] px-4 py-1.5 text-gray-700 rounded-lg focus:outline-none focus-within:border-primary max-w-[300px] flex gap-2 items-center transition-all duration-300'>
      <SearchIcon size={18} />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder='Search Products'
        className='border-0 outline-0 ring-0 focus:border-0 focus:ring-0 focus:outline-0 placeholder:text-gray-600 w-full transition-all duration-300'
      />
    </div>
  )
}

export default Search