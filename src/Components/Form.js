import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeypress}) => (
    <div className="form">
        <input value={value} onChange={onChange} onKeyPress={onKeypress}/>
        <div className="create-button" onClick={onCreate}>
            추가
        </div>
    </div>
);

export default Form;