import "./Modal.css";
export default function Modal({ show, onClose }) {
    if (!show) return null;

    return (
        <div className='modal-bg'>
            <div className="modal">
                <h2>Modal</h2>
                <p>Modal Content</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}
