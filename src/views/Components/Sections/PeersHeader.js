import React from "react";
// import DefaultPerson from "../../../assets/img/faces/avatar.jpg";
import { Typography } from "@material-ui/core";
// import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
// import Divider from "@material-ui/core/Divider";
// import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
// import WhatsAppIcon from "@material-ui/icons/WhatsApp";
// import zoomImage from "../../../assets/img/zoom.png";
// import { IconButton } from "@material-ui/core";
// import { green } from "@material-ui/core/colors";
// import { yellow } from "@material-ui/core/colors";
// import { PhoneIphone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  rootb: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: "1rem",
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    margin: "1rem",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(18),
    width: "30%",
    maxWidth: 300,
  },
  secondaryHeadingB: {
    fontSize: theme.typography.pxToRem(18),
    margin: 5,
  },
  divider: {
    width: "80%",
    margin: 4,
  },
  priceshow: {
    marginLeft: "5px",
    fontSize: theme.typography.pxToRem(10),
    color: "#C80352",
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const PeersHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.rootb}>
        <div className={classes.column}>
          {/* {accountVerified && (
            <VerifiedUserIcon style={{ color: yellow[800] }} fontSize="small" />
          )}
          {/* <Typography className={classes.heading}>Location</Typography> */}
          {/* <Avatar
            src={accountImage}
            alt={accountName}
            className={classes.large}
          ></Avatar> */}
        </div>
        <div className={classes.column}>
          {/* <Typography
            className={classes.secondaryHeading}
            noWrap={true}
            variant="h3"
          >
            {accountName}
          </Typography> */}
        </div>

        <div className={classes.column}>
          <div style={{ display: "inline", margin: "1rem" }}>
            <Typography
              className={classes.secondaryHeadingB}
              noWrap={true}
              variant="h5"
              display="inline"
            >
              Rate
            </Typography>
            {/* <Typography noWrap={true} display="inline" variant="subtitle">
              {OrderKind === 1 || OrderKind === 2
                ? "N/$"
                : OrderKind === 3
                ? "N/BTC"
                : OrderKind === 4
                ? "N/ETH"
                : "N/USEFUL"}
            </Typography> */}
          </div>
        </div>
        <div className={classes.column}>
          <Typography
            className={classes.secondaryHeadingB}
            noWrap={true}
            variant="h5"
          >
            Available
          </Typography>
          {/* <Typography noWrap={true} display="inline" variant="subtitle">
            {OrderKind === 1 || OrderKind === 2
              ? "USDT"
              : OrderKind === 3
              ? "BTC"
              : OrderKind === 4
              ? "ETH"
              : "USEFUL"}
          </Typography> */}
        </div>
        <div className={classes.column}></div>
        {/* {hasWhatsapp ? (
          <IconButton>
            {" "}
            <WhatsAppIcon style={{ color: green[500] }} />{" "}
          </IconButton>
        ) : null}
        {hasWhatsapp ? (
          <IconButton>
            {" "}
            <WhatsAppIcon color="primary" />{" "}
          </IconButton>
        ) : null}
        {hasZoom ? (
          <IconButton>
            <Avatar src={zoomImage} className={classes.small} alt="zoom logo" />
          </IconButton>
        ) : null} */}
      </div>
    </div>
  );
};

PeersHeader.propTypes = {
  // index of the default active pill
  name: PropTypes.string,
  balance: PropTypes.number,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
  ]),
  img: PropTypes.string,
  tabId: PropTypes.number,
  horizontal: PropTypes.shape({
    tabsGrid: PropTypes.object,
    contentGrid: PropTypes.object,
  }),
  alignCenter: PropTypes.bool,
  rate: PropTypes.string,
  available: PropTypes.number,
  kind: PropTypes.number,
  verified: PropTypes.bool,
  contact: PropTypes.string,
  whatsapp: PropTypes.bool,
  zoom: PropTypes.bool,
};

export default PeersHeader;
