import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const phone = data.get("phone");
    const email = data.get("email");
    const user = {
      name,
      phone,
      email,
    };

    console.log(user);
    if (!name && !phone && !email) {
      setMessage('Please fill up all information!')
      navigate("/");
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/second");
      setMessage('')
    }
  };
  return (
    <Box
      sx={{ display: "grid", gridColumn: 1, placeItems: "center", gap: 2 }}
      onSubmit={handleSubmit}
      component={"form"}
    >
      <TextField
        // onBlur={(e) => setName(e.target.value)}
        type={"text"}
        name="name"
        id="outlined-basic"
        label="Name"
        variant="outlined"
        // required
      />
      <TextField
        // onBlur={(e) => setPhone(e.target.value)}
        type={"text"}
        name="number"
        id="outlined-basic"
        label="Phone"
        variant="outlined"
        // required
      />
      <TextField
        // onBlur={(e) => setEmail(e.target.value)}
        type={"email"}
        id="outlined-basic"
        label="Email"
        name="email"
        variant="outlined"
        // required
      />
      
      <Button
        style={{ marginTop: "10px" }}
        type="submit"
        variant="contained"
        color="success"
      >
        Save & Navigate 2nd Page
      </Button>
      {
        message && <p style={{color: 'orange', fontSize: '20px'}}>{message}</p>
      }
    </Box>
  );
};

export default FirstPage;
