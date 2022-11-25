import React from 'react'
import { configuration } from '../BookingScheduler';
import { Configuration } from '../types/configuration';

function useConfiguration() {
  const configurationData: Configuration = React.useContext(configuration);
  return { ...configurationData };
}

export default useConfiguration;