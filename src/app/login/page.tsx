import { Box, Paper, Typography } from "@mui/material";

export default function Login() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        backgroundColor: "primary.secondary",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: 400,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>

        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Login</button>
        </Box>
      </Paper>
    </Box>
  );
}
