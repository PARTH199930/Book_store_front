import { Button, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const PromoBaner = () => {
  return (
    <div>
      <Row>
        <h2>2023 Nation Book Award for fiction ShortList</h2>
        <Link to="/shop">
          <Button>Get Promo</Button>
        </Link>
      </Row>
    </div>
  );
};

export default PromoBaner;
