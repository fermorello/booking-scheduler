import React from 'react'
import { configuration } from '../context';
import { Configuration } from '../types/configuration';

function useConfiguration() {
  const configurationData: Configuration | null = React.useContext(configuration);
  return { ...configurationData };
}

export default useConfiguration;