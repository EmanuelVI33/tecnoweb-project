import React, { useState, useEffect } from 'react';

const FontSettings: React.FC = () => {
    const [fontSize, setFontSize] = useState(localStorage.getItem('fontSize') || '16px');
    const [fontFamily, setFontFamily] = useState(localStorage.getItem('fontFamily') || 'Arial');

    useEffect(() => {
        document.documentElement.style.setProperty('--font-size', fontSize);
        document.documentElement.style.setProperty('--font-family', fontFamily);
    }, [fontSize, fontFamily]);

    const handleFontSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const size = event.target.value;
        setFontSize(size);
        localStorage.setItem('fontSize', size);
    };

    const handleFontFamilyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const family = event.target.value;
        setFontFamily(family);
        localStorage.setItem('fontFamily', family);
    };

    return (
        <div className="font-settings">
            <label>
                Font Size:
                <select value={fontSize} onChange={handleFontSizeChange}>
                    <option value="14px">14px</option>
                    <option value="16px">16px</option>
                    <option value="18px">18px</option>
                    <option value="20px">20px</option>
                </select>
            </label>
            <label>
                Font Family:
                <select value={fontFamily} onChange={handleFontFamilyChange}>
                    <option value="Arial">Arial</option>
                    <option value="Verdana">Verdana</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Courier New">Courier New</option>
                </select>
            </label>
        </div>
    );
};

export default FontSettings;
