import React from 'react';
import { connect } from 'react-redux';

const Storelist = ({ stores }) => {
  const listOfStores = stores.map((val, index) => {
    const ash = val.opening_time.split(';')[0].split('-')[1];
    return (
      <div key={index}>
        <div className="title">
          <h3>
            <span className="index">{index + 1}.</span>Payzone
          </h3>
          <i className="fas fa-angle-down"></i>
        </div>

        <div className="bottom">
          <div className="addy">{val.location.address_three}</div>
          <div className="details">
            <span className="close">
              <i
                className="fas fa-clock"
                style={{ color: 'blue', marginLeft: '4px' }}
              ></i>
              <p style={{ display: 'inline-block', marginLeft: '4px' }}>
                Open until {ash}
              </p>
            </span>
            <span
              className="distance"
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <i
                className="fas fa-map-marker-alt"
                style={{ color: 'blue' }}
              ></i>
              <p
                style={{
                  display: 'inline-block',
                  marginLeft: '4px',
                  marginRight: '4px',
                }}
              >
                {Math.floor(val.distance)} Miles
              </p>
              <i className="fas fa-walking"></i>
            </span>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div style={{ flexBasis: '30%' }} className="content-wrapper">
      <div className="store-list">
        <h2>Closest Stores</h2>
        <p>To get the closest stores, enter your postcode.</p>
        <div
          className="ui styled fluid accordion"
          style={{ paddingRight: '13px' }}
        >
          {/* <div className="title" style={{ display: "flex" }}>
            <h4 style={{ display: "flex", justifyContent: "space-between" }}>
              1. Wonderland store
              <i className="dropdown icon"></i>
            </h4>
          </div> */}

          {/* <div className="content">
            <p
              className="transition visible"
              style={{ display: 'block !important' }}
            >
              store details
            </p>
          </div> */}
          {listOfStores}
          {/* <div className="title">
            <i className="dropdown icon"></i>
            What kinds of dogs are there?
          </div>
          <div className="content">
            <p>
              There are many breeds of dogs. Each breed varies in size and
              temperament. Owners often select a breed of dog that they find to
              be compatible with their own lifestyle and desires from a
              companion.
            </p>
          </div>
          <div className="title">
            <i className="dropdown icon"></i>
            How do you acquire a dog?
          </div>
          <div className="content">
            <p>
              Three common ways for a prospective owner to acquire a dog is from
              pet shops, private owners, or shelters.
            </p>
            <p>
              A pet shop may be the most convenient way to buy a dog. Buying a
              dog from a private owner allows you to assess the pedigree and
              upbringing of your dog before choosing to take it home. Lastly,
              finding your dog from a shelter, helps give a good home to a dog
              who may not find one so readily.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Storelist);
