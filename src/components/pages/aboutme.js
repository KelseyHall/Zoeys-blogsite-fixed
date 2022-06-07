import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import selfie from '../../img/IMG_3475.jpeg';
import ZoeySignature from '../signature';

const AboutMe = () => {
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h1"
        sx={{
          width: { xs: '100%', sm: '50%' },
          marginTop: { xs: '20px', sm: '40px' },
        }}
      >
        Who Am I?
      </Typography>

      <Container
        sx={{
          display: { xs: 'flex' },
          alignItems: { xs: 'center' },
          float: { xs: 'none', sm: 'right' },
          width: { xs: '100%', sm: '65%', md: '50%' },
          height: { xs: '250px', sm: 'auto' },
          shapeOutside: 'circle()',
          margin: { xs: '20px auto 0', sm: '0' },
        }}
      >
        <Box
          component="img"
          src={selfie}
          sx={{
            margin: { xs: '0 auto' },
            width: { xs: 'auto', sm: '100%' },
            height: { xs: '340px', sm: 'auto' },
            clipPath: 'circle(42.0% at 50% 50%)',
          }}
        />
      </Container>
      <Typography
        variant="body1"
        sx={{
          width: { xs: '100%', sm: '80%' },
          float: 'none',
          paddingTop: '30px',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, consequat
        nibh imperdiet lobortis. Lobortis egestas bibendum pellentesque
        condimentum. Auctor urna tempus, quis elit. Elit lorem iaculis
        vestibulum nisl eget iaculis. Faucibus nibh egestas vitae bibendum.
        Congue sit amet in tellus volutpat. Feugiat vitae massa volutpat in sit
        ac. A tellus amet est nulla vel, sem. Morbi aliquet tempor amet, nisi
        convallis elementum ut. Lacus, ridiculus netus pharetra consequat quis
        quisque vel etiam tristique. Facilisis dictum purus sed aenean sagittis
        malesuada cras mi quis. In aliquam aliquet lobortis sit conse quat
        quisque sed placerat. In vel in ac iaculis proin lacus netus feugiat.
        Sem erat purus in enim amet viverra amet eget. Dignissim massa ac eu
        sit. Velit in amet, eget facilisis posuere. Justo, varius tempor commodo
        eu etiam eu nibh. Augue at neque, velit facilisis gravida sapien amet.
        Malesuada venenatis eget viverra bibendum nunc accumsan pretium. Augue
        turpis ullamcorper tristique amet commodo, risus ridiculus metus.
        Egestas vitae nisi fermentum et pharetra ac tellus molestie. Nulla fusce
        vel odio leo viverra tempus feugiat. Sagittis massa aenean tortor eget
        lacus.
        <ZoeySignature />
      </Typography>
    </Container>
  );
};

export default AboutMe;
