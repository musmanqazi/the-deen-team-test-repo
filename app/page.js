import Image from "next/image";
import { Box, Typography} from "@mui/material";

export default function Home() {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" width="100vw" height="100vh" gap={2}>
      <Typography variant="h3" textAlign="center" alignItems="center">Hello World</Typography>
      <Typography variant="h5" textAlign="center" alignItems="center">Usman Qazi</Typography>
      <Typography variant="h5" textAlign="center" alignItems="center">Ahad Ahmad</Typography>
    </Box>
  );
}
