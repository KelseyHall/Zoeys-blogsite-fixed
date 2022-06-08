import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Container
      component="footer"
      sx={{
        textAlign: 'center',
        padding: '15px 0',
      }}
    >
      <Typography variant="footer">
        {' '}
        &copy; copyright 2022 - mock project
      </Typography>
    </Container>
  );
};

export default Footer;
