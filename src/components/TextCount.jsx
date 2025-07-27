import React, { useEffect, useState } from 'react';
import '../styles/TextCount.css'; 

function TextCount() {
    const [text, setText] = useState("");

    // Load saved text from localStorage once when component mounts
    useEffect(() => {
        const savedText = localStorage.getItem("savedText");
        if (savedText) {
            setText(savedText);
        }
    }, []);

    // Handle textarea typing
    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    // Save manually to localStorage
    const handleSave = () => {
        localStorage.setItem("savedText", text);
        alert("💾 Đã lưu nội dung vào trình duyệt!");
    };

    // Reset textarea and clear localStorage
    const handleReset = () => {
        setText("");
        localStorage.removeItem("savedText");
    };

    // Count words and characters
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

            <div className="textcount-buttons">
                <button className="btn save" onClick={handleSave}>💾 Lưu</button>
                <button className="btn reset" onClick={handleReset}>🔄 Reset</button>
            </div>

            <div className="textcount-counter">
                <p>Số ký tự: {charCount}</p>
                <p>Số từ: {wordCount}</p>
            </div>
        </div>
    );
}

export default TextCount;
