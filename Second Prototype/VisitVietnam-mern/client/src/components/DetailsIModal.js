import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, Image } from "react-bootstrap";
import Moment from "moment";

export class DetailsModal extends Component {
  render() {
    return (
      <div className="container">
        <Modal
          // {...this.props}
          show={this.props.show}
          onHide={this.props.onHide}
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
                  {this.props.Name !== undefined && <h1>{this.props.Name}</h1>}
                  {this.props.Description !== undefined && (
                    <div>{this.props.Description}</div>
                  )}
                  {this.props.Overview !== undefined && (
                    <div>{this.props.Overview}</div>
                  )}
                  {this.props.Details !== undefined && (
                    <div>{this.props.Details}</div>
                  )}
                  {this.props.Note !== undefined && (
                    <div>{this.props.Note}</div>
                  )}
                  {this.props.StartDate !== undefined && (
                    <div>{Moment(this.props.StartDate).format("D/MM/yy")}</div>
                  )}
                  {this.props.EndDate !== undefined && (
                    <div>{Moment(this.props.EndDate).format("D/MM/yy")}</div>
                  )}
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
