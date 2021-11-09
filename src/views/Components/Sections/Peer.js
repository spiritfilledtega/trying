import React, { useContext, useState } from "react";
import DefaultPerson from "../../../assets/img/faces/avatar.jpg";
import { Typography } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import zoomImage from "../../../assets/img/zoom.png";
import { IconButton } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { yellow } from "@material-ui/core/colors";
import { PhoneIphone } from "@material-ui/icons";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import PopMessages from "./PopMessages";
import popoverStyles from "../../../assets/jss/material-kit-react/popoverStyles";
import { ColoredContext } from "./SectionPills";

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
  rootc: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  rootd: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  },
  roote: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "2rem",
  },
  mdtwist: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    flexDirection: "column",
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: "1rem",
  },
  medium: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: "1rem",
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    margin: "1rem",
  },
  smallb: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    margin: "1rem",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(16),
    width: 300,
    maxWidth: 350,
  },
  smallsizes: {
    fontSize: theme.typography.pxToRem(12),
  },
  smallsizesb: {
    fontSize: theme.typography.pxToRem(13),
  },
  secondaryHeadingc: {
    fontSize: theme.typography.pxToRem(16),
    width: 200,
    maxWidth: "30vw",
  },
  secondaryHeadingB: {
    fontSize: theme.typography.pxToRem(18),
    margin: 5,
  },
  divider: {
    width: "80%",
    margin: 4,
  },
  dividerb: {
    width: "95%",
    marginTop: "1rem",
    marginBottom: "1rem",
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
  columnb: {
    flexBasis: "25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2rem",
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
  ...popoverStyles,
}));

const Peer = ({
  img,
  name,
  rate,
  available,
  kind,
  verified,
  contact,
  whatsapp,
  zoom,
}) => {
  const classes = useStyles();
  const [anchorElTop, setAnchorElTop] = React.useState(null);
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesb = useMediaQuery(theme.breakpoints.up("sm"));
  const [state] = useContext(ColoredContext);
  const [whatWasClicked, setWhatWasClicked] = useState(1);
  const [popHeaderMessage, setPopHeaderMessage] = useState("");

  let accountName = name || "Name";
  let accountRate = rate || 9000;
  let accountImage = img || DefaultPerson;
  let availableAmount = available || 1000;
  let OrderKind = kind || 10;
  let accountVerified = verified || false;
  let accountContact = contact || "";
  let hasWhatsapp = whatsapp || false;
  let hasZoom = zoom || false;

  let buywhat =
    OrderKind === 1
      ? "cow"
      : OrderKind === 2
      ? "BUSD"
      : OrderKind === 3
      ? "BTC"
      : OrderKind === 4
      ? "ETH"
      : "USEFUL";

  let exchange =
    OrderKind === 1
      ? "N/$"
      : OrderKind === 2
      ? "N/$"
      : OrderKind === 3
      ? "N/BTC"
      : OrderKind === 4
      ? "N/ETH"
      : "N/USEFUL";

  let buyOrSell = state === 0 ? true : false;

  let handleWhatsapClicked = (event) => {
    setPopHeaderMessage("Copy the default message and use it in your chat");
    setWhatWasClicked(1);
    setAnchorElTop(event.currentTarget);
  };

  let handleCallClicked = (event) => {
    setPopHeaderMessage("copy phonenumber");
    setWhatWasClicked(2);
    setAnchorElTop(event.currentTarget);
  };

  let handleZoomClicked = (event) => {
    setPopHeaderMessage("Zoom Instruction");
    setWhatWasClicked(3);
    setAnchorElTop(event.currentTarget);
  };

  let popClose = () => {
    setAnchorElTop(null);
  };

  if (matches) {
    return (
      <ThemeProvider theme={theme}>
        <Popover
          classes={{
            paper: classes.popover,
          }}
          open={Boolean(anchorElTop)}
          anchorEl={anchorElTop}
          onClose={() => setAnchorElTop(null)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <h6 style={{ textAlign: "center" }}>{popHeaderMessage}</h6>
          <div className={classes.popoverBody}>
            <PopMessages
              name={accountName}
              contact={accountContact}
              buy={buyOrSell}
              what={buywhat}
              zoomlink={zoom.us}
              kind={whatWasClicked}
              popClose={popClose}
            />
          </div>
        </Popover>

        <div className={classes.root}>
          <div className={classes.rootb}>
            <div className={classes.column}>
              {accountVerified && (
                <VerifiedUserIcon
                  style={{ color: yellow[800] }}
                  fontSize="small"
                />
              )}
              {/* <Typography className={classes.heading}>Location</Typography> */}
              <Avatar
                src={accountImage}
                alt={accountName}
                className={classes.large}
              ></Avatar>
            </div>

            <Typography
              className={classes.secondaryHeading}
              noWrap={true}
              variant="h3"
            >
              {accountName}
            </Typography>

            <div className={classes.column} style={{ marginLeft: "auto" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <Typography noWrap={true} variant="caption" display="inline">
                    Rate
                  </Typography>
                </div>
                <div style={{ display: "inline" }}>
                  <Typography
                    className={classes.secondaryHeadingB}
                    noWrap={true}
                    variant="h5"
                    display="inline"
                  >
                    {accountRate}
                  </Typography>
                  <Typography noWrap={true} display="inline" variant="subtitle">
                    {exchange}
                  </Typography>
                </div>
              </div>
            </div>
            <div className={classes.column}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <Typography noWrap={true} variant="caption" display="inline">
                    Available
                  </Typography>
                </div>
                <div>
                  <Typography
                    className={classes.secondaryHeadingB}
                    noWrap={true}
                    variant="h5"
                    display="inline"
                  >
                    {availableAmount}
                  </Typography>
                  <Typography noWrap={true} display="inline" variant="subtitle">
                    {buywhat}
                  </Typography>
                </div>
              </div>
            </div>
            {hasWhatsapp && (
              <IconButton
                // href={whatsappApi}
                // target="_blank"
                onClick={(event) => handleWhatsapClicked(event)}
              >
                {" "}
                <WhatsAppIcon style={{ color: green[500] }} />{" "}
              </IconButton>
            )}
            <IconButton onClick={(event) => handleCallClicked(event)}>
              {" "}
              <PhoneIphone color="primary" />{" "}
            </IconButton>
            {hasZoom && (
              <IconButton
                fontSize="small"
                onClick={(event) => handleZoomClicked(event)}
              >
                <Avatar
                  src={zoomImage}
                  className={classes.small}
                  alt="zoom logo"
                />
              </IconButton>
            )}
          </div>
          <Divider className={classes.divider} orientation="horizontal" />
        </div>
      </ThemeProvider>
    );
  } else {
    if (matchesb) {
      return (
        <ThemeProvider theme={theme}>
          <Popover
            classes={{
              paper: classes.popover,
            }}
            open={Boolean(anchorElTop)}
            anchorEl={anchorElTop}
            onClose={() => setAnchorElTop(null)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <h6 style={{ textAlign: "center" }}>{popHeaderMessage}</h6>
            <div className={classes.popoverBody}>
              <PopMessages
                name={accountName}
                contact={accountContact}
                buy={buyOrSell}
                what={buywhat}
                zoomlink={zoom.us}
                kind={whatWasClicked}
                popClose={popClose}
              />
            </div>
          </Popover>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#f0f0f0",
              margin: "1rem",
              paddingBottom: "1.5rem",
              paddingTop: "0.5rem",
              paddingLeft: "0.5rem",
              borderRadius: "1.5rem",
              paddingRight: "0.75rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              {hasZoom && (
                <IconButton
                  fontSize="small"
                  onClick={(event) => handleZoomClicked(event)}
                >
                  <Avatar
                    src={zoomImage}
                    className={classes.smallb}
                    alt="zoom logo"
                  />
                </IconButton>
              )}
              <IconButton onClick={(event) => handleCallClicked(event)}>
                {" "}
                <PhoneIphone color="primary" />{" "}
              </IconButton>
              {hasWhatsapp && (
                <IconButton onClick={(event) => handleWhatsapClicked(event)}>
                  {" "}
                  <WhatsAppIcon style={{ color: green[500] }} />{" "}
                </IconButton>
              )}
              <div
                style={{
                  marginRight: "auto",
                  marginLeft: "1rem",
                  marginTop: "1rem",
                }}
              >
                {accountVerified && (
                  <VerifiedUserIcon
                    style={{ color: yellow[800] }}
                    fontSize="small"
                  />
                )}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className={classes.rootc}>
                <div className={classes.column}>
                  {/* <Typography className={classes.heading}>Location</Typography> */}
                  <Avatar
                    src={accountImage}
                    alt={accountName}
                    className={classes.large}
                  ></Avatar>
                </div>
                <div
                  style={{
                    alignSelf: "center",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    className={classes.secondaryHeadingc}
                    noWrap={true}
                    variant="h3"
                  >
                    {accountName}
                  </Typography>
                </div>
              </div>

              <div className={classes.column}>
                <div className={classes.rootc}>
                  <div>
                    <Typography
                      noWrap={true}
                      variant="caption"
                      display="inline"
                    >
                      Rate
                    </Typography>
                  </div>
                  <div style={{ display: "inline" }}>
                    <Typography
                      className={classes.secondaryHeadingB}
                      noWrap={true}
                      variant="h5"
                      display="inline"
                    >
                      {accountRate}
                    </Typography>
                    <Typography
                      noWrap={true}
                      display="inline"
                      variant="caption"
                    >
                      {exchange}
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={classes.column}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <Typography
                      noWrap={true}
                      variant="caption"
                      display="inline"
                    >
                      Available
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      className={classes.secondaryHeadingB}
                      noWrap={true}
                      variant="h5"
                      display="inline"
                    >
                      {availableAmount}
                    </Typography>
                    <Typography
                      noWrap={true}
                      display="inline"
                      variant="caption"
                    >
                      {buywhat}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            {/* <Divider className={classes.dividerb} orientation="horizontal" /> */}
          </div>
        </ThemeProvider>
      );
    } else {
      return (
        <ThemeProvider theme={theme}>
          <Popover
            classes={{
              paper: classes.popover,
            }}
            open={Boolean(anchorElTop)}
            anchorEl={anchorElTop}
            onClose={() => setAnchorElTop(null)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <h6 style={{ textAlign: "center" }}>{popHeaderMessage}</h6>
            <div className={classes.popoverBody}>
              <PopMessages
                name={accountName}
                contact={accountContact}
                buy={buyOrSell}
                what={buywhat}
                zoomlink={zoom.us}
                kind={whatWasClicked}
                popClose={popClose}
              />
            </div>
          </Popover>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#f0f0f0",
              margin: "1rem",
              paddingBottom: "1.5rem",
              paddingTop: "0.5rem",
              paddingLeft: "0.5rem",
              borderRadius: "1.5rem",
              paddingRight: "0.75rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              {hasZoom && (
                <IconButton
                  fontSize="small"
                  onClick={(event) => handleZoomClicked(event)}
                >
                  <Avatar
                    src={zoomImage}
                    className={classes.smallb}
                    alt="zoom logo"
                  />
                </IconButton>
              )}
              <IconButton>
                {" "}
                <PhoneIphone
                  color="primary"
                  onClick={(event) => handleCallClicked(event)}
                />{" "}
              </IconButton>
              {hasWhatsapp && (
                <IconButton onClick={(event) => handleWhatsapClicked(event)}>
                  {" "}
                  <WhatsAppIcon style={{ color: green[500] }} />{" "}
                </IconButton>
              )}
              <div
                style={{
                  marginRight: "auto",
                  marginLeft: "1rem",
                  marginTop: "1rem",
                }}
              >
                {accountVerified && (
                  <VerifiedUserIcon
                    style={{ color: yellow[800] }}
                    fontSize="small"
                  />
                )}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className={classes.rootc}>
                <div className={classes.column}>
                  {/* <Typography className={classes.heading}>Location</Typography> */}
                  <Avatar
                    src={accountImage}
                    alt={accountName}
                    className={classes.large}
                  ></Avatar>
                </div>
                <div style={{ alignSelf: "center", textAlign: "center" }}>
                  <Typography
                    className={classes.smallsizes}
                    noWrap={true}
                    variant="h3"
                  >
                    {accountName}
                  </Typography>
                </div>
              </div>
              <div className={classes.roote}>
                <div className={classes.columnb}>
                  <div className={classes.rootc}>
                    <div>
                      <Typography
                        className={classes.smallsizesb}
                        noWrap={true}
                        variant="caption"
                        display="inline"
                      >
                        Rate
                      </Typography>
                    </div>
                    <div style={{ display: "inline" }}>
                      <Typography
                        className={classes.smallsizesb}
                        noWrap={true}
                        variant="h5"
                        display="inline"
                      >
                        {accountRate}
                      </Typography>
                      <Typography
                        noWrap={true}
                        className={classes.smallsizesb}
                        display="inline"
                        variant="subtitle"
                      >
                        {exchange}
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className={classes.columnb}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Typography
                        noWrap={true}
                        className={classes.smallsizesb}
                        variant="caption"
                        display="inline"
                      >
                        Available
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        className={classes.smallsizesb}
                        noWrap={true}
                        variant="h5"
                        display="inline"
                      >
                        {availableAmount}
                      </Typography>
                      <Typography
                        noWrap={true}
                        className={classes.smallsizesb}
                        display="inline"
                        variant="subtitle"
                      >
                        {buywhat}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <Divider className={classes.dividerb} orientation="horizontal" /> */}
          </div>
        </ThemeProvider>
      );
    }
  }
};

Peer.propTypes = {
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
  rate: PropTypes.number,
  available: PropTypes.number,
  kind: PropTypes.number,
  verified: PropTypes.bool,
  contact: PropTypes.string,
  whatsapp: PropTypes.bool,
  zoom: PropTypes.bool,
};

export default Peer;

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 550,
      md: 990,
      lg: 1280,
      xl: 1920,
    },
  },
});

theme = responsiveFontSizes(theme);

// export default function ThemeHelper() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Peer />
//     </ThemeProvider>
//   );
// }
