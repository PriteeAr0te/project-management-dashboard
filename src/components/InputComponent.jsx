const InputComponent = ({
  id,
  name,
  value,
  label,
  type = "text",
  placeholder = "",
  required = false,
  onChange,
}) => {


  return (
    <div>
      <label
        htmlFor={id}
        className={`block text-base font-medium text-gray-700`}
      >
        {label}
      </label>
      <div className="mt-1.5 relative">
        <input
          name={name}
          onChange={onChange}
          type={type}
          value={value}
          required={required}
          placeholder={placeholder}
          className={`block w-full border border-[#D0D5DD] rounded-lg px-3 py-2.5 text-base text-gray-800  placeholder:text-gray-500 focus:outline-0 focus:border-primary`}
        />
      </div>
    </div>
  );
};

export default InputComponent;
