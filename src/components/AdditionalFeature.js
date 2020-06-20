import React from 'react';
// import {connect} from 'react-redux';
import {addFeature} from '../actions/actions';
import {useSelector, useDispatch} from 'react-redux';

const AdditionalFeature = props => {

  const dispatch = useDispatch();
  const add = item => dispatch(addFeature(item))

  const car = useSelector(state => {
    return state.car
  })

  const handleBuyItem = (feature) => {
   
    let hasFeature = false;
    if (car.features.length === 0) {
      add(feature);
      hasFeature= true;
    }
    car.features.map(f => {
      if (f.id === feature.id) {
        hasFeature = true;
      }
    });
    if (!hasFeature) {
      add(feature);
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

// const mapStateToProps = state => {
//   return {
//     car: state.car,
//   };
// };

// const mapDispatchToProps = {addFeature}

// export default connect(mapStateToProps, mapDispatchToProps) (AdditionalFeature);
export default AdditionalFeature;
