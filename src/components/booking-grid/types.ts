import { Data } from "../../types";

export interface DataGridProps {
  data: Data;
  startRangeDate: string;
  endRangeDate: string;
  hoursPerDay: number;
}

