import { Box, Typography } from "@mui/material";

import styles from "./styles";

const WelcomePage = () => {
  return (
    <Box {...styles.welcomeMessageBoxProps}>
      <Typography {...styles.welcomMessageProps}>
        Welcome to <span style={styles.kaiWordProps}>KAI</span> 👋
      </Typography>
      <Typography {...styles.subMessageProps}>
        Let&apos;s get started!
      </Typography>
    </Box>
  );
};

export default WelcomePage;
