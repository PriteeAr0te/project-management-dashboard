import React from 'react'

const TextareaComponent = ({ label, name, id, value, onChange }) => {
    return (
        <>
            <label htmlFor={id} className="block text-base font-medium text-gray-900">
                {label}
            </label>
            <div className="mt-1.5">
                <textarea
                    id={id}
                    name={name}
                    value={value}
                    autoComplete={name}
                    onChange={onChange}
                    rows={3}
                    placeholder={label}
                    required={false}
                    className="block w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-500 focus:outline-0 focus:border-primary"
                />
            </div>
        </>
    )
}

export default TextareaComponent