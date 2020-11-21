import React from "react";
import { connect } from "react-redux";

const Storelist = ({ stores }) => {
  const listOfStores = stores.map((val, index) => {
    return (
      <div key={index}>
        <div className="title">
          <i className="dropdown icon"></i>
          {val.location.address_three}
        </div>

        <div className="content">
          <p>{val.opening_time}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="content-wrapper">
      <div className="store-list">
        <h2>Closest Stores</h2>
        <p>To get the closest stores, enter your postcode.</p>
        <div className="ui styled fluid accordion">
          <div className="title" style={{ display: "flex" }}>
            <h4 style={{ display: "flex", justifyContent: "space-between" }}>
              1. Wonderland store
              <i className="dropdown icon"></i>
            </h4>
          </div>
          <div className="content">
            <p
              className="transition visible"
              style={{ display: "block !important" }}
            >
              store details
            </p>
          </div>
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
