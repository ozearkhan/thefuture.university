
import '../CSS/Checkbox.css';

function Checkbox({label, value, onCheckChange}) {
    return (
        <label className="checkbox-label">
            {label}
            <input type="checkbox" checked={value} onChange={onCheckChange}/>
            <span className="checkbox-mark"></span>
        </label>
    );
}

export default Checkbox;
