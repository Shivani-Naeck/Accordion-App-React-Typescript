import React from "react";
import './Container.css';

export interface ContainerProps {
    title: string;
    content: string;
}




export const Component1: React.FC<ContainerProps> = (Props) => {
    return (
        <div className="container-styles">
            <h3>{Props.title}</h3>
            <p>{Props.content}</p>
        </div>


    )
}