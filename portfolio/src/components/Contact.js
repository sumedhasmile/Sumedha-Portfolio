import React from 'react'

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const Contact = () => {
    return (
        <div id="contact" style={{fontFamily:" 'Newsreader' , serif"}} >
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            
                <Row>
                <Col className="d-flex justify-content-center ">
                    <div className="m-2">
                    <a href="mailto:sumedhasmile7@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-danger" title="sumedhasmile7@gmail.com">
                        <i className="fas fa-envelope-square"></i> Email Me
                        </Button>
                    </a>
                    </div>
                    <div className="m-2">
                    <a href="https://www.linkedin.com/in/sumedha-agasimani-5811b7192/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-primary" title="Visit my LinkenIn">
                        <i className="fab fa-linkedin"></i> LinkedIn
                        </Button>
                    </a>
                    </div>
                    
                    <div className="m-2">
                    <a href="https://github.com/sumedhasmile" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-dark" title="My other projects">
                        <i className="fab fa-github-square" ></i> GitHub
                        </Button>
                    </a>
                    </div>
                </Col>
                </Row>
            
    </div>
    
    )
}

export default Contact
