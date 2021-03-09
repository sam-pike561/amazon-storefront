import React from 'react';
import Product from './Product';
import './Home.css';
import Moose from './Moose.jpg';

function Home() {
    return (
        <div className="home">
          <img
            className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZmVhMDM4ZmYt/ZmVhMDM4ZmYt-YzU3ZDcwZDQt-w3000._CB662298603_.jpg\" alt=""/>

            <div className="home__row">
            <Product
            id="12345"
            title="Musical Instruments"
            price={89.96}
            rating={5}
            image="https://live.staticflickr.com/1706/26091850122_8eda3e48b0_b.jpg"
          />
          <Product
            id="12345"
            title="Artwork and Photograhy"
            price={112.98}
            rating={4}
            image="https://live.staticflickr.com/1509/25985097144_998df5c88b_b.jpg"

          />
        </div>

          <div className="home__row">
            <Product
              id="12345"
              title="Antique Roadsters"
              price={13.38}
              rating={4}
              image="https://live.staticflickr.com/65535/51006644121_31d636b570_b.jpg"
            />
            <Product
              id="12345"
              title="Moose"
              price=" 302.00"
              rating={5}
              image={Moose}
            />
            <Product
              id="12345"
              title="Processing Chips"
              price={15.86}
              rating={5}
              image="https://live.staticflickr.com/65535/51006738762_8ed270cb92_b.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="12345"
              title="Baking Ingredients"
              price={11.96}
              rating={4}
              image="https://live.staticflickr.com/65535/51005847528_a59329e5e5_b.jpg"
            />
            <Product
              id="12345"
              title="Vintage Vinyl and Accessories"
              price={124.96}
              rating={5}
              image="https://live.staticflickr.com/7627/16239586093_95391f6c82_b.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="12345"
              title="Formal Wear"
              price={159.99}
              rating={5}
              image="https://live.staticflickr.com/3500/3316358126_ae1449838e_m.jpg"
            />
          </div>
        </div>
    )
}

export default Home;


// https://images-na.ssl-images-amazon.com/images/G/01/omaha/images/merch/2021/WFM/Monthly/03-March/AMZ/F3VX-3251-WFM_pickup_EVERGREEN_gw_hero_3000x1200_2x._CB660547110_.jpg
