import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Features() {
    return (
        <>
            <ReactBootStrap.CardDeck className="m-5">
                <ReactBootStrap.Card className="pt-5">
                    <center><svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#dc3545"}} width="150" height="150" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                    </svg></center>
                    <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>Genuine Information</ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
            </ReactBootStrap.Card.Text>
                    </ReactBootStrap.Card.Body>

                </ReactBootStrap.Card>
                <ReactBootStrap.Card className="pt-5">
                    <center><svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#dc3545"}} width="150" height="150" fill="currentColor" class="bi bi-megaphone-fill" viewBox="0 0 16 16">
                        <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z" />
                    </svg></center>
                    <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>Awareness</ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                            This card has supporting text below as a natural lead-in to
              additional content.{" "}
                        </ReactBootStrap.Card.Text>
                    </ReactBootStrap.Card.Body>

                </ReactBootStrap.Card>
                <ReactBootStrap.Card className="pt-5">
                    <center><svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#dc3545"}} width="150" height="150" fill="currentColor" class="bi bi-handbag-fill" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                    </svg></center>
                    <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>Resources</ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This card has even longer content
                            than the first to show that equal height action.
            </ReactBootStrap.Card.Text>
                    </ReactBootStrap.Card.Body>

                </ReactBootStrap.Card>
            </ReactBootStrap.CardDeck>
        </>
    );
}

export default Features;
