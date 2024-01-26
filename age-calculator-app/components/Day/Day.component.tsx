import './style.css'
type props = {
    date: string
    text: string
    className?: string
}
const DayComponent = ({ date, text, className = '' }: props) => {
    return (
        <div className={`${className} day-container`}>
            <h1 className="day-title day-span">{date}</h1>
            <h1 className="day-title">{text}</h1>
        </div>
    )
}

export default DayComponent
