import { Grid } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import Funds from './Funds';
import StakeStablePoolComponent from './StakeStablePoolComponent';
import { Typography } from "@mui/material";

const StakeScreen = () => {
  return (
    <>
      {' '}
      <Zoom in={true}>
        <Grid
          container
          direction='column'
          alignItems='center'
          sx={{
            marginBottom: '4rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: {
              xs: '100%',
              sm: '70%',
            },
            borderRadius: { xs: '0px', sm: '20px' },
          }}
        >
          <Grid item sx={{ width: '90%', paddingBottom: 2 }}>
          <Typography
          sx={{
          fontWeight: "bold",
          color: (theme) => theme.palette.text.primary,
          width: "fit-content",
          padding: 1,
          paddingTop: 4,
          borderRadius: "5px",
          fontSize: "1rem",
          }}
        >
        STAKE FUNDS
          </Typography>
            <Funds />
          </Grid>
          <Grid item sx={{ width: '90%' }}>
            <StakeStablePoolComponent />
          </Grid>
        </Grid>
      </Zoom>
    </>
  );
};

export default StakeScreen;
