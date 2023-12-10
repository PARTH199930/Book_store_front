import React from "react";
import { Col, Row, row } from "antd";
import Wrapperr from "../home/Wrapperr"
import IntroSection from "../home/FavBooks"
import BestSellerBooks from "../home/BestSellerBooks";
import FavBooks from "../home/FavBooks";


const Banner = () => {
  return (
    <div>
      <Row>
        <Col span={12}>
          <div></div>
          <h2>Buy and sell yor books</h2>
          <p>
            It was a scrape that he hardly noticed. Sure, there was a bit of
            blood but it was minor compared to most of the other cuts and
            bruises he acquired on his adventures. There was no way he could
            know that the rock that produced the cut had alien genetic material
            on it that was now racing through his bloodstream. He felt perfectly
            normal and continued his adventure with no knowledge of what was
            about to happen to him.
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search a book"
            />
            <button>Search</button>
          </div>
        </Col>
        <Col span={12}>
          <Wrapperr />
        </Col>
      </Row>
      
    </div>
  );
};

export default Banner;
