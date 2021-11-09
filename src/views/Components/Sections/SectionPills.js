import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import AssignmentIcon from "@material-ui/icons/Assignment";
import SectionTabs from "./SectionTabs.js";

// core components
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
import NavPills from "../../../components/NavPills/NavPills.js";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

export const ColoredContext = React.createContext();

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  const [currentState, setCurrentState] = useState(0);
  return (
    <ColoredContext.Provider value={[currentState, setCurrentState]}>
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <div className={classes.title}>
              <h3>BUY, SELL OR SEND?</h3>
            </div>
            <div className={classes.title}>
              <h3>{/* <small>With Icons</small> */}</h3>
            </div>

            <NavPills
              color={
                currentState === 0
                  ? "success"
                  : currentState === 1
                  ? "danger"
                  : "primary"
              }
              tabs={[
                {
                  tabButton: "BUY",
                  tabId: 1,
                  tabIcon: ShoppingCartOutlinedIcon,
                  tabContent: <SectionTabs />,
                },
                {
                  tabButton: "SELL",
                  tabId: 2,
                  tabIcon: LocalOfferIcon,
                  tabContent: <SectionTabs />,
                },
                {
                  tabButton: "SEND",
                  tabId: 3,
                  tabIcon: AssignmentIcon,
                  tabContent: <SectionTabs />,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </ColoredContext.Provider>
  );
}
