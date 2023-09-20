import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Result() {
    let { state } = useLocation();
    const [records, setRecords] = useState("");


    return (
        <div>
            <Modal 
                show={true} 
                backdrop={true}
                keyboard={false}
            >
            <Modal.Header>
                { state.choice === state.answer  ? "Correct" : "Incorrect" }
            </Modal.Header>
            <Modal.Body>
                <div className="guess-body">
                    <div className="guess-square" style={{background: `${state.choice}`}}/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Link to="/game">
                    <Button variant="secondary">
                        Next question
                    </Button>
                </Link>
            </Modal.Footer>
            </Modal>
        </div>
    )
}
