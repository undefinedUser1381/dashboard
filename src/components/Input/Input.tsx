interface Input {
    placeholder : string
    name : string
}
function Input({ placeholder , name } : Input) {
  return (
    <input placeholder={placeholder} type="text" name={name} className="w-full border-gray-300 p-2 font-medium transition-all outline-none dark:border-gray-600 border-2 bg-transparent text-white sm:w-[48%] xl:w-[49%]" />
  )
}

export default Input