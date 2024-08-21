import { Box } from '@mui/material';

import styles from './styles';

const OnboardLayout = (props) => {
  const { children } = props;
  return <Box {...styles.mainContainerProps}>{children}</Box>;
};

export default OnboardLayout;
