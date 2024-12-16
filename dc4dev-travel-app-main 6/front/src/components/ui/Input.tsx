type InputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    name: string
    placeholder?: string
    type: "text" | "number" | "email" | "password"
    required: boolean
}

const Input = ({ onChange, name, placeholder, type = "text", required = false } : InputProps) => {
    return ( 
        <input 
            type={type} 
            placeholder={placeholder} 
            onChange={onChange} 
            name={name} 
            className="border-2 border-gray-300 rounded-md px-4 py-2"
            required={required}
        />
     );
}
 
export default Input;