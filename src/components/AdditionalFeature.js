import React from 'react';
import {connect} from 'react-redux';
import {addFeature} from '../actions/actions';

const AdditionalFeature = props => {
  const handleBuyItem = (feature) => {
   
    let hasFeature = false;
    if (props.car.features.length === 0) {
      props.addFeature(feature);
      hasFeature= true;
    }
    props.car.features.map(f => {
      if (f.id === feature.id) {
        hasFeature = true;
      }
    });
    if (!hasFeature) {
      props.addFeature(feature);
    }
  };
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={()=>
          handleBuyItem(props.feature)
      }
      className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
  };
};

const mapDispatchToProps = {addFeature}

export default connect(mapStateToProps, mapDispatchToProps) (AdditionalFeature);
