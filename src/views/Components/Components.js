import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../../components/Header/Header.js"

// import Header from "components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";

import Typing from "react-typing-animation";

import useMediaQuery from "@material-ui/core/useMediaQuery";
// import Button from "components/CustomButtons/Button.js";
import Parallax from "../../components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";

// import SectionBasics from "./Sections/SectionBasics.js";
// import SectionNavbars from "./Sections/SectionNavbars.js";
// import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";

// import SectionNotifications from "./Sections/SectionNotifications.js";
// import SectionTypography from "./Sections/SectionTypography.js";
// import SectionJavascript from "./Sections/SectionJavascript.js";
// import SectionCarousel from "./Sections/SectionCarousel.js";
// import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
// import SectionLogin from "./Sections/SectionLogin.js";
// import SectionExamples from "./Sections/SectionExamples.js";
// import SectionDownload from "./Sections/SectionDownload.js";

import styles from "../../assets/jss/material-kit-react/views/components.js";
import { createTheme } from "@material-ui/core/styles";
import { responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);
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

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  // const matchesb = useMediaQuery(theme.breakpoints.up("sm"));

  if (matches) {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Header
            brand="Tensel 1.0"
            rightLinks={<HeaderLinks />}
            fixed
            color="transparent"
            changeColorOnScroll={{
              height: 400,
              color: "white",
            }}
            {...rest}
          />
          <Parallax image={require("../../assets/img/farm1.jpg")}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem>
                  <div className={classes.brand}>
                    <Typing>
                      <h1 className={classes.title}>Use Farmerslounge</h1>{" "}
                    </Typing>
                    <h3 className={classes.subtitle}>a safe Peer Network</h3>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>

          {
            <div className={classNames(classes.main, classes.mainRaised)}>
              {/* <SectionBasics /> */}
              {/* <SectionNavbars /> */}
              {/* <SectionTabs /> */}
              <SectionPills />
              {/* <SectionNotifications /> */}
              {/* <SectionTypography />
          <SectionJavascript />
          <SectionCarousel />
          <SectionCompletedExamples />
          <SectionLogin />
          <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem>
          <SectionExamples />
          <SectionDownload /> */}
            </div>
          }
          <Footer />
        </div>
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Header
            brand="Tensel 1.0"
            rightLinks={<HeaderLinks />}
            fixed
            color="transparent"
            changeColorOnScroll={{
              height: 400,
              color: "white",
            }}
            {...rest}
          />
          <Parallax image={require("../../assets/img/tenselbg.jpg").default}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem>
                  <div className={classes.brand}>
                    <h1 className={classes.title}>Use Tensel</h1>{" "}
                    <h3 className={classes.subtitle}>a safe Peer Network</h3>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>

          {
            <div className={classes.main}>
              {/* <SectionBasics /> */}
              {/* <SectionNavbars /> */}
              {/* <SectionTabs /> */}
              <SectionPills />
              {/* <SectionNotifications /> */}
              {/* <SectionTypography />
          <SectionJavascript />
          <SectionCarousel />
          <SectionCompletedExamples />
          <SectionLogin />
          <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem>
          <SectionExamples />
          <SectionDownload /> */}
            </div>
          }
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}
