import React, { useState } from 'react';
import '../styles/TextCount.css'; 

function TextCount() {
    const [text, setText] = useState("");

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    // Calculate word and character count
    // Trim the text to avoid counting leading/trailing spaces
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    const charCount = text.length;

    return (
        <div className="textcount-container">
            <h1 className="title">📝 Bộ đếm ký tự</h1>
            <textarea
                className="textcount-input"
                value={text}
                onChange={handleTextChange}
                placeholder="Nhập đoạn văn bản của bạn vào đây..."
            />
            <div className="textcount-counter">
                <p>Số ký tự: {charCount}</p>
                <p>Số từ: {wordCount}</p>
            </div>
        </div>
    );
}

export default TextCount;
