export interface IReport
{
  message: string;
  timestamp: number;
  iss_position: Array<{ latitude: string; longitude: string }>;
}

