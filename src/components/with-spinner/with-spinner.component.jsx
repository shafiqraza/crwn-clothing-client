import React from "react";
import Spinner from "../spinner/spinner.component";
// const WithSpinner = WrapComponent => ({ isLoading, ...otherProps}) => {
//   return isLoading ? (
//     <Spinner />
//   ) : <WrapComponent {...otherProps} />
// };

// const WithSpinner = (WrappedComponent) => {
//   class Spinner extends React.Component {
//     render() {
//       const { isLoading, ...otherProps } = this.props;
      
//       return isLoading ?  (
//         <Spinner />
//       ) : <WrappedComponent {...otherProps} />
//     }
//   }
//   return Spinner;
// }

const WithSpinner = WrappedComponent => {
  const spinner = ({isLoading, ...otherProps}) => {
    return isLoading ? (
      <Spinner />
    ) : (
      <WrappedComponent {...otherProps}/>
    )
  };
  return spinner;
}

export default WithSpinner;