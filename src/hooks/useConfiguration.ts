import React from 'react'
import { default_config } from '../constants/default_config';
import { configuration } from '../context';
import { Configuration } from '../types/configuration';

function useConfiguration() {
  const configurationData: Configuration | null = React.useContext(configuration);
  if (!configurationData) {
    return default_config;
  }
  return { ...configurationData };
}

export default useConfiguration;