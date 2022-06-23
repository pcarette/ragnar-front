import { Box, Typography, Tabs, Tab, Grid, Button, Link } from "@mui/material";
import { FunctionComponent, useState } from "react";
import CustomInput from "../../shared/CustomInput";
import CustomDisplay from "../../shared/CustomDisplay";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface StableTabProps {
  addressPool: string;
  pairAddress: string;
  pairName: string;
  info: string;

}

const StableTab: FunctionComponent<StableTabProps> = ({
  addressPool, pairAddress, pairName, info
}) => {

  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          centered
          aria-label="basic tabs example"
          
        >
          <Tab label="Stake" {...a11yProps(0)} style={{
            color: value === 0 ?"#ddeaf2":"#929ea6",
              textTransform: "none",
            }} />
          <Tab label="Unstake" {...a11yProps(1)} style={{
            color: value === 1 ?"#ddeaf2":"#929ea6",
              textTransform: "none",
            }} />
          <Tab label="INFO" {...a11yProps(2)} style={{
            color: value === 2 ?"#ddeaf2":"#929ea6",
              textTransform: "none",
            }} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Typography sx={{ fontSize: { xs: "0.65em", sm: "0.9em" }, color: (theme) => theme.palette.text.primary, marginBottom: "20px", marginTop: "20px", fontWeight: "bold" }}>
          {info}
       </Typography>
        <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={pairName} display="Stake" />
          </Grid>
          <Grid
            item
            container
            xs={6}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Grid item xs={6} sx={{ fontSize: { xs: "0.65em", sm: "1em" }, color: (theme) => theme.palette.text.primary, fontWeight: "bold" }}>
              {" "}
              1
            </Grid>
            <Grid item xs={6} sx={{ fontSize: { xs: "0.65em", sm: "1em" }, color: (theme) => theme.palette.text.primary, fontWeight: "bold" }}>
              2
            </Grid>
          </Grid>
          <Grid item container xs={6}>
            {" "}
            <CustomInput poolName={"YETI"} />
          </Grid>
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button variant="contained" sx={{ width: "45%" ,backgroundColor: (theme) => theme.palette.primary.light, fontWeight: "bold" }}>
              APPROVE
            </Button>
            <Button variant="contained" sx={{ width: "45%",backgroundColor: (theme) => theme.palette.primary.light, fontWeight: "bold"}}>
              DEPOSIT
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={"RGNYETI"} display="Unstake" />
          </Grid>
          <Grid
            item
            container
            xs={6}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Grid item xs={6}>
              {" "}
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
          <Grid item container xs={6}>
            {" "}
            <CustomInput poolName={"YETI"} />
          </Grid>
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button variant="contained" sx={{ width: "45%",backgroundColor: (theme) => theme.palette.primary.light, fontWeight: "bold" }}>
              WITHDRAW
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography sx={{ 
          fontSize: "14px", 
          color: (theme) => theme.palette.text.primary,
          marginBottom: "10px",
          fontWeight: "bold"
          }}>
          {" "}
           {pairName} Contract: {"    "}
          <Link sx={{color: (theme) => theme.palette.text.secondary, textDecoration: 'none', fontWeight: "normal"}}
            href={`https://snowtrace.io/address/${pairAddress}`}
          >
            {addressPool}
          </Link>
        </Typography>
        <Typography sx={{ 
          fontSize: "14px", 
          color: (theme) => theme.palette.text.primary,
          marginBottom: "10px",
          fontWeight: "bold",
          }}>
          {" "}
          Staking Contract: {"    "}
          <Link sx={{color: (theme) => theme.palette.text.secondary, textDecoration: 'none', fontWeight: "normal"}}   
          href={`https://snowtrace.io/address/${addressPool}`}
          >
            {addressPool}
          </Link>
        </Typography>
      </TabPanel>
    </Box>
  );
}

export default StableTab;