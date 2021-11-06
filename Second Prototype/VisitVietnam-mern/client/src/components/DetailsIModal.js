import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, Image } from "react-bootstrap";

export class DetailsModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Details
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form>
                  <h1>{this.props.Name}</h1>
                  <div>{this.props.Description}</div>
                  <div>{this.props.Overview}</div>
                  <div>{this.props.Details}</div>
                  <div>{this.props.Note}</div>
                  <div>{this.props.StartDate}</div>
                  <div>{this.props.EndDate}</div>
                </Form>
              </Col>
              <Col sm={6}>
                <Image
                  width="500px"
                  height="500px"
                  src={this.props.PicFileName}
                />
              </Col>
            </Row>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
