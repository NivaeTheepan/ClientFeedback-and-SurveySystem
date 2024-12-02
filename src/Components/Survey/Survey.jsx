import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Survey.css';

import { FaPerson} from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { PiNotebook } from 'react-icons/pi';


const Survey = () => 
    
{
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[q1, setQ1] = useState("");
    const[q2, setQ2] = useState("");
    const[q3, setQ3] = useState("");
    const[q4, setQ4] = useState("");
    const[q5, setQ5] = useState("");
    const[q6, setQ6] = useState("");
    const[q7, setQ7] = useState("");
    const[q8, setQ8] = useState("");
    const[q9, setQ9] = useState("");

    const navigate = useNavigate(); //for going back to home screen on submit

    const surveySubmit = async (e) => {
        e.preventDefault();
        let result = await fetch('http://localhost:5001/survey', {
            method: "post",
            body: JSON.stringify({name, email, q1, q2, q3, q4, q5, q6, q7, q8, q9}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Survey submitted brev fanum tax skibiddi toilet rizz gyatt shordie shordle")
            setName("");
            setEmail("");
            setQ1("");
            setQ2("");
            setQ3("");
            setQ4("");
            navigate('/', { state: { showPopup: true } }); //home screen navigation, passes pop up state true
        }
    };

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
            <div class="header">
                <div class="text">
                    Survey
                </div>
                <div class="underline">
                    <form action="">
                        <div class="inputs">
                            <div class="input">
                                <FaPerson/>
                                <input type = "name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div class="input">
                                <MdOutlineEmail/>
                                <input type = "email" placeholder = 'Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div class="input">
                                <PiNotebook/>
                                <input type = "q1" placeholder = 'How Was Your Overall Experience With Our WebPage?' value={q1} onChange={(e) => setQ1(e.target.value)}/>
                            </div>
                            <div class="input">
                                <PiNotebook/>
                                <input type = "q2" placeholder = 'Would You Recommend Our WebPage?' value={q2} onChange={(e) => setQ2(e.target.value)}/>
                            </div>
                            <div class="input">
                                <PiNotebook/>
                                <input type = "q3" placeholder = 'How Satisfied Were You With Our Products?' value={q3} onChange={(e) => setQ3(e.target.value)}/>
                            </div>
                            <div class="input">
                                <PiNotebook/>
                                <input type = "q4" placeholder = 'How Easy Was It To Complete Your Purchase?' value={q4} onChange={(e) => setQ4(e.target.value)}/>
                            </div>
                            <div class="input">
                                <PiNotebook/>
                                <input type = "q5" placeholder = 'Did You Encounter Any Issues?' value={q5} onChange={(e) => setQ5(e.target.value)}/>
                            </div>
                            <div class="input">
                                <PiNotebook/>
                                <input type = "q6" placeholder = 'Did You Contact Customer Support?' value={q6} onChange={(e) => setQ6(e.target.value)}/>
                            </div>
                            <div class="input">
                                <PiNotebook/>
                                <input type = "q7" placeholder = 'What Do You Enjoy About Our WebPage?' value={q7} onChange={(e) => setQ7(e.target.value)}/>
                            </div>
                            <div class="input">
                                <PiNotebook/>
                                <input type = "q8" placeholder = 'How Often Do You Shop Online?' value={q8} onChange={(e) => setQ8(e.target.value)}/>
                            </div>
                            <div class="input">
                                <PiNotebook/>
                                <input type = "q9" placeholder = 'How Did You Hear About Our WebPage?' value={q9} onChange={(e) => setQ9(e.target.value)}/>
                            </div>
                        </div>
                        <div class = 'submit-container'>
                            <button class="submit" onClick={surveySubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Survey
