import "./FormStyles.css"

export default function Modal({ isVisible, erroMessage = null }) {
    if (isVisible) {
        return (
            <div id="modal">
                <div id="modal-content" >
                    <h1
                        style={{ color: erroMessage ? "red" : "green" }}>
                        {erroMessage != null
                            ? erroMessage
                            : "The Form Has Been Submitted Successfully"}
                    </h1>
                </div>
            </div>
        )
    } else {
        return (<></>)
    }
}