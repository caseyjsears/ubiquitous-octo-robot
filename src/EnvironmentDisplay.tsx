import React from 'react';

const EnvironmentDisplay: React.FC = () => {
  const testVariable = import.meta.env.VITE_TEST_VARIABLE || 'Not Set';

  return (
    <div>
      <h2>Environment Variable Test</h2>
      <p>VITE_TEST_VARIABLE: {testVariable}</p>
    </div>
  );
};

export default EnvironmentDisplay;
