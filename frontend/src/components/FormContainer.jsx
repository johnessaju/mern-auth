import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <div className="p-4 border rounded">{children}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
