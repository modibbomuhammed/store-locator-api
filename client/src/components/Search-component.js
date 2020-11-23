import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sendStores } from '../action/actionCreators';
import axios from 'axios';

const SearchComponent = ({ sendStores }) => {
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3000/api/store/closest?post_code=de232qh')
  //     .then(res => console.log(res.data));
  // }, []);
  const [postCode, setPostCode] = useState('');
  const findStores = async () => {
    // const string =
    //   process.env.NODE_ENV === 'development'
    //     ? `http://localhost:3000/api/store/closest?post_code=${postCode}`
    //     : `https://fast-reaches-17883.herokuapp.com/api/store/closest?post_code=${postCode}`;

    const string = `https://fast-reaches-17883.herokuapp.com/api/store/closest?post_code=${postCode}`;

    const result = await axios.get(string);
    sendStores(result.data);
    setPostCode('');
  };
  return (
    <div className="search-wrapper ui action input">
      <input
        id="search"
        type="text"
        value={postCode}
        placeholder="Enter your postcode"
        autoFocus
        style={{ padding: '12px' }}
        onChange={e => setPostCode(e.target.value)}
      />
      <button
        className="ui button"
        style={{ backgroundColor: '#58B2B5', color: 'white' }}
        onClick={() => findStores()}
      >
        Search for store
      </button>
    </div>
  );
};

export default connect(null, { sendStores })(SearchComponent);
