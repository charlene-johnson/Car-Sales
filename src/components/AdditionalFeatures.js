import React from 'react';
import AdditionalFeature from './AdditionalFeature';
// import {connect} from 'react-redux';
import {useSelector} from 'react-redux';

const AdditionalFeatures = () => {
  const additionalFeatures = useSelector(state => {
    return state.additionalFeatures;
  })
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     additionalFeatures: state.additionalFeatures 
//   };
// };

// export default connect(mapStateToProps)(AdditionalFeatures);
export default AdditionalFeatures;