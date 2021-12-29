import React, { ErrorInfo } from "react";
import "./ErrorBoundary.css";

interface Props {}

interface State {
  hasError: boolean;
}

interface Error {
  name: string;
  message: string;
  stack?: string;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="errorBoundary">
          <h2>Something went wrong</h2>
          {/* <details></details> */}
        </div>
      );
    }
    return this.props.children;
  }
}
