import React, { useState } from 'react'
import ViewToggle from '../components/ToggleView';

const Dashboard = () => {
  const [value, setValue] = useState("table");

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <div className='my-6 max-w-7xl mx-auto mx-2'>
      <div className='flex justify-end'>
        <ViewToggle value={value} onChange={handleChange} />
      </div>
    </div>
  )
}

export default Dashboard