import './Toast.css';

function Toast({ message }) {
  return (
    <div className="toast-container" aria-live="polite">
      {message && <div className="toast">{message}</div>}
    </div>
  );
}

export default Toast;
