import React from "react";
import { Link } from 'react-router-dom';
import './MenuBtn.css';
export function MenuBtn() {
    return (
        <div>
            <Link to="/about">
                <button type="button" className="btn btn-dark btn-lg">Our AI Assistant</button>
            </Link>
        </div>
    )
}