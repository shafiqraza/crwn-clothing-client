import React from "react";
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    // process the error;
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {

  }

  render() {
    if(this.state.hasError) {
      return( 
      <ErrorImageOverlay>
        <ErrorImageContainer imageUrl={"https://i.imgur.com/yW2W9SC.png"}/>
        <ErrorImageText>Opps! something went wrong..</ErrorImageText>
      </ErrorImageOverlay>)
    }else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;