import React from 'react';
// import {connect} from 'react-redux';
import {useSelector} from 'react-redux';

const Total = () => {
  const car = useSelector(state => {
    return state.car
  });
  const additionalPrice = useSelector(state => {
    return state.additionalPrice
  });
  // console.log(props.additionalPrice)
  // console.log(props.car.price)
  return (
    <div className="content">
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     car: state.car,
//     additionalPrice: state.additionalPrice
//   }
// }

// 
export default Total;
// export default connect(mapStateToProps) (Total);
