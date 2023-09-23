import "../Styles/Result.css";
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Result() {
    let { state } = useLocation();
    const [records, setRecords] = useState("");


    return (
        <div>
            {
                (state.choice === "Time Out") ?
            <Modal 
                show={true} 
                backdrop={true}
                keyboard={false}
                dialogClassName="modal-container"
            >
            <Modal.Body>
                <div className="modal-body">
                    You ran out of time. Please try again.
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Link to="/game" style={{textDecoration: "none"}}>
                    <div className="result-button">
                        Next question
                    </div>
                </Link>
            </Modal.Footer>
            </Modal>
            :
            <Modal 
                show={true} 
                backdrop={true}
                keyboard={false}
                dialogClassName="modal-container"
            >
            <Modal.Body>
                <div className="modal-body">
                    Your guess was...
                    <div className="modal-square" style={{background: `${state.choice}`}}/>
                    { state.choice === state.answer  ? "Correct Good Job!" : "Incorrect. Try again." }
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Link to="/game" style={{textDecoration: "none"}}>
                    <div className="result-button">
                        Next question
                    </div>
                </Link>
            </Modal.Footer>
            </Modal>
            }
        </div>
    )
}
