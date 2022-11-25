import React from 'react'
import { configuration, Configuration } from '../App';

function useConfiguration() {
  const configurationData: Configuration = React.useContext(configuration);
  return { ...configurationData };
}

export default useConfiguration;