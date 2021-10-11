import React, { useState } from "react";
import "./index.css";
import hands from "./hands.png";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";

export default function Sukses() {
    const [show, setShow] = useState(false);
    const [click, setClick] = useState("Copy");
    const [random, setRandom] = useState(0);
    let myInput = null;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const copyToClipboard = () => {
        myInput.select();
        document.execCommand("copy");
        setClick("Copied!");
    };

    const handleRandom = () => {
        let min = 1;
        let max = 1000;
        var rand = Math.floor(Math.random() * (max - min + 1) + min);
        setRandom(rand);
        handleShow();
    };
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header
                    style={{ backgroundColor: "#E9FBEF", borderStyle: "none" }}
                >
                    <Modal.Title>ID Chat</Modal.Title>
                </Modal.Header>
                <Modal.Body
                    style={{ backgroundColor: "#E9FBEF", borderStyle: "none" }}
                >
                    <InputGroup className="mb-3">
                        <FormControl
                            readOnly
                            value={random}
                            aria-describedby="basic-addon2"
                            ref={(ref) => (myInput = ref)}
                        />
                        <Button
                            variant="outline-secondary"
                            className="text-light"
                            id="button-addon2"
                            onClick={copyToClipboard}
                            style={{ backgroundColor: "#18191F" }}
                        >
                            {click}
                        </Button>
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer
                    style={{ backgroundColor: "#E9FBEF", borderStyle: "none" }}
                >
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        <a
                            href="https://frontend-message.vercel.app/"
                            className="text-light"
                            style={{ textDecoration: "none" }}
                        >
                            Go Chat!
                        </a>
                    </Button>
                </Modal.Footer>
            </Modal>

            <body>
                <p className="tittle-sukses">SmartGen</p>
                <div className="succes-pay">
                    <img src={hands} alt="gambar" />
                </div>
                <p className="text-sukses">Payment Success</p>

                <div>
                    <a href>
                        <button
                            type="button"
                            className="button-start"
                            onClick={handleRandom}
                        >
                            Start
                        </button>
                    </a>
                </div>

                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
                    crossorigin="anonymous"
                ></script>
            </body>
        </div>
    );
}
