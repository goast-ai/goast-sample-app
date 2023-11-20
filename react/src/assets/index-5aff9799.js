import React from 'react';

class DisplayUser extends React.Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return <div>No user data available.</div>;
    }
    return <div>{user.first ? user.first : 'User'}</div>;
  }
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export { DisplayUser, ErrorBoundary };
