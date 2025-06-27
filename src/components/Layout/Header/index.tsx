import {
  AppBar,
  Box,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <Stack direction="row" spacing={2}>
            <Link href="/" color="inherit">
              Home
            </Link>
            <Link href="/usuarios" color="inherit">
              Usuarios
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
