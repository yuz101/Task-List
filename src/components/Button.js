const Button = ({text, onClick}) => {
    return (
        <div>
            <button className = 'btn' onClick = {onClick}>{text}</button>
        </div>
    )
}

export default Button