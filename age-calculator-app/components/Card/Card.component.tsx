import { ReactNode } from 'react'
import './style.css'

type props = {
    children: string | JSX.Element | JSX.Element[] | ReactNode | undefined
    className?: string
}

const CardComponent = ({ children, className = '' }: props) => {
    return <div className={`card ${className}`}>{children}</div>
}

export default CardComponent
