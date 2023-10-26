import {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div>
      <Typography variant="h4">{formattedTime}</Typography>
    </div>
  );
}

