import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ClientFeedback.css';

import { FaPerson } from 'react-icons/fa6';
import { GoNumber } from 'react-icons/go';
import { MdOutlineEmail } from 'react-icons/md';
import { PiNotebook } from 'react-icons/pi';




const ClientFeedback = () => 
    
{
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[q1, setQ1] = useState("");
    const[q2, setQ2] = useState("");
    const[q3, setQ3] = useState("");
    const[q4, setQ4] = useState("");

    const navigate = useNavigate(); //for going back to home screen on submit

    const feedbackSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch('http://localhost:5000/feedback', {
            method: "post",
            body: JSON.stringify({name, email, q1, q2, q3, q4}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Feedback submitted brev fanum tax skibiddi toilet rizz gyatt shordie shordle")
            setName("");
            setEmail("");
            setQ1("");
            setQ2("");
            setQ3("");
            setQ4("");
            navigate('/', { state: { showPopup: true } }); //home screen navigation, passes pop up state true
        }
    }

    return (
        <div class = 'container'>
        <button 
            onClick={() => navigate('/')} // Navigates back to home
            style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                padding: '10px 15px',
                backgroundColor: "#deb887",
                color: '#fff', 
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}
        >
            Home
        </button>
        <div class = 'container'>
            <div class = 'header'>
                <div class = 'text'>
                    Feedback Form
                </div>
                <div class = "underline">
                    <form action="">
                        <div class = "inputs">
                            
                            <div class = "input">
                                <FaPerson/>
                                <input type = "name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>

                            <div class = "input">
                                <MdOutlineEmail/>
                                <input type = "email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>

                            <div class = "input">
                                <PiNotebook/>
                                <input type = "q1" placeholder='How Satisfied Were You?' value={q1} onChange={(e) => setQ1(e.target.value)}/>
                            </div>

                            <div class = "input">
                                <PiNotebook/>
                                <input type = "q2" placeholder='Did The Product/Service Meet Expecations?' value={q2} onChange={(e) => setQ2(e.target.value)}/>
                            </div>

                            <div class = "input">
                                <PiNotebook/>
                                <input type = "q3" placeholder='Would You Recommend The Product/Service?' value={q3} onChange={(e) => setQ3(e.target.value)}/>
                            </div>

                            <div class = "input">
                                <PiNotebook/>
                                <input type = "q4" placeholder='Was The Experience/Service Satisfactory?' value={q4} onChange={(e) => setQ4(e.target.value)}/>
                            </div>
                        </div>

                        <div class = "submit-container">
                            <button className="submit" onClick={feedbackSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ClientFeedback 