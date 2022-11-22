
import React, { useState } from "react";


export const Accordion = ({ title, content }: { title: string; content: string }) => {

    const [isOpen, setOpen] = useState(false);
    return (
        <div className="accordion-main">
            <div className="container-styles">
                <div className="accordion-header" onClick={() => setOpen(!isOpen)}>
                    <div>{title}</div>
                    <div>{isOpen ? '-' : '+'}</div>
                </div>
                {isOpen && <div className="accordion-content">{content}</div>}
            </div>
        </div>
    );
};