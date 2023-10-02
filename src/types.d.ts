

import { ChartOptions } from 'chart.js';

declare module 'react-chartjs-2' {
  interface ChartComponentProps {
    // ... other props ...
    options?: ChartOptions;
  }
}
