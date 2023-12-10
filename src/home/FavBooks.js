import { Button, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const FavBooks = () => {
  return (
    <div>
      <Row>
        <Col span={12}>Left</Col>
        <Col span={12}>Right <Link to="/shop"><Button>Explore More</Button></Link></Col>
      </Row>
    </div>
  );
};

export default FavBooks;
