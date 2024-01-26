import './style.css'

type props = {
    title: string
    setDate: (e: React.FormEvent<HTMLInputElement>) => {}
    value: string | undefined
    error?: string | undefined
    className?: string
    name?: string
    placeholder?: string
    hasError?: boolean
}

const InputDay = ({
    title,
    setDate,
    value,
    error,
    className = '',
    name,
    placeholder = '',
    hasError = false,
}: props) => {
    return (
        <div className={`container`}>
            <label
                className={`${hasError ? 'text-light-red' : 'text-smokey-grey'} input-label`}
                htmlFor={name}
            >
                {title}
            </label>

            <div className={` ${className}input-container`}>
                <input
                    className={`input-date ${hasError ? 'border-light-red' : 'border-light-grey'}`}
                    type="number"
                    value={value}
                    placeholder={placeholder}
                    onChange={setDate}
                    name={name}
                />
            </div>
            <span className="error error-txt">{error}</span>
        </div>
    )
}
export default InputDay
