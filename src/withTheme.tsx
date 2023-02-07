import React from 'react';
import { ThemeContext } from './ThemeProvider';

function withTheme<P = {}>(WrappedComponent: React.ComponentType<P>) {
  const Component = (props: P, forwardRef: any) => {
    return (
      <ThemeContext.Consumer>
        {(value) => {
          return <WrappedComponent ref={forwardRef} {...props} theme={value} />;
        }}
      </ThemeContext.Consumer>
    );
  };
  return React.forwardRef(Component);
}

export default withTheme;
