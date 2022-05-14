import "./button.scss"

const Button = ({children, className, href}) => {
    return (
        <a href={href} className={`button ${className}`}>
            {children}
        </a>
    )
}

export {Button};