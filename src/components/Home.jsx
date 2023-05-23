import React,{useState} from "react";
import { Typography, Button } from "@material-ui/core";
const Home = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Typography variant="h3" style={{marginBottom:"1rem"}}>Counter</Typography>

      <div style={{ display: "flex", gap:"1rem"}}>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </Button>
        <Typography variant="h3">{counter}</Typography>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => setCounter(counter - 1)}
        >
          -
        </Button>
      </div>
    </div>
  );
};

export default Home;
