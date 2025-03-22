
import "../styles/Button.css"
function Button({ text, type }) {
    return (
        <Button className={`btn btn-${type}`}>
            {text}
        </Button>
    )
}

export default Button