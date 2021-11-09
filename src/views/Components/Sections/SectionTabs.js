import React, { useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Peer from "../Sections/Peer";
import BtcBuyers from "../../../Data/BTC/BuyersData";
import UsdtBuyers from "../../../Data/USDT/BuyersData";
import EthBuyers from "../../../Data/ETH/BuyersData";
import BusdBuyers from "../../../Data/BUSD/BuyersData";
import BtcSellers from "../../../Data/BTC/SellersData";
import UsdtSellers from "../../../Data/USDT/SellersData";
import EthSellers from "../../../Data/ETH/SellersData";
import BusdSellers from "../../../Data/BUSD/SellersData";
import UsefullBuyers from "../../../Data/USEFULL/BuyersData";
import UsefullSellers from "../../../Data/USEFULL/SellersData";
import { ColoredContext } from "../../../../src/views/Components/Sections/SectionPills.js";
// import { ColoredContext } from "views/Components/Sections/SectionPills";

// import PeersHeader from "./PeersHeader";
// import Sellers from "Data/BTC/SellersData";

// @material-ui/icons
// import Face from "@material-ui/icons/Face";
// import Chat from "@material-ui/icons/Chat";
// import Build from "@material-ui/icons/Build";
import bitcoinImage from "../../../assets/img/bitcoin.png";
import usdtImage from "../../../assets/img/usdt.png";
import ethImage from "../../../assets/img/ethereum.png";
import usefullImage from "../../../assets/img/use.png";
import busdImage from "../../../assets/img/busd.png";

// core components
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "../../../components/CustomTabs/CustomTabs.js";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
// import { customColor } from "assets/jss/material-kit-react";
// import { lightGreen } from "@material-ui/core/colors";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  const [currentState] = useContext(ColoredContext);

  let UsdtData =
    currentState === 0 ? UsdtBuyers : currentState === 1 ? UsdtSellers : [];

  let BtcData =
    currentState === 0 ? BtcBuyers : currentState === 1 ? BtcSellers : [];

  let EthData =
    currentState === 0 ? EthBuyers : currentState === 1 ? EthSellers : [];

  let BusdData =
    currentState === 0 ? BusdBuyers : currentState === 1 ? BusdSellers : [];

  let UsefullData =
    currentState === 0
      ? UsefullBuyers
      : currentState === 1
      ? UsefullSellers
      : [];

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          {/* <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Tabs with Icons on Card</small>
              </h3> */}
          <CustomTabs
            headerColor="custom"
            tabs={[
              {
                tabName: "CAT FISH",
                // tabName: "USDT",
                tabImage: usdtImage,
                tabContent: UsdtData.map((buyer, index) => (
                  <Peer
                    key={index}
                    img={buyer.img}
                    rate={buyer.rate}
                    name={buyer.name}
                    available={buyer.available}
                    kind={buyer.kind}
                    verified={buyer.verified}
                    whatsapp={true}
                    zoom={true}
                    contact={buyer.contact}
                  />
                )),
              },
              {
                tabName: "LIVE STOCKS",
                // tabName: "BUSD",
                tabImage: busdImage,
                tabContent: BusdData.map((buyer, index) => (
                  <Peer
                    key={index}
                    img={buyer.img}
                    rate={buyer.rate}
                    name={buyer.name}
                    available={buyer.available}
                    kind={buyer.kind}
                    verified={buyer.verified}
                    whatsapp={true}
                    zoom={true}
                    contact={buyer.contact}
                  />
                )),
              },
              {
                tabName: "POULTRY",
                // tabName: "BTC",
                tabImage: bitcoinImage,
                tabContent: BtcData.map((buyer, index) => (
                  <Peer
                    key={index}
                    img={buyer.img}
                    rate={buyer.rate}
                    name={buyer.name}
                    available={buyer.available}
                    kind={buyer.kind}
                    verified={buyer.verified}
                    whatsapp={true}
                    zoom={true}
                    contact={buyer.contact}
                  />
                )),
              },
              {
                tabName: "VEGETABLE",
                // tabName: "ETH",
                tabImage: ethImage,
                tabContent: EthData.map((buyer, index) => (
                  <Peer
                    key={index}
                    img={buyer.img}
                    rate={buyer.rate}
                    name={buyer.name}
                    available={buyer.available}
                    kind={buyer.kind}
                    verified={buyer.verified}
                    whatsapp={true}
                    zoom={true}
                    contact={buyer.contact}
                  />
                )),
              },

              {
                tabName: "FRUITS",
                // tabName: "ETH",
                tabImage: ethImage,
                tabContent: EthData.map((buyer, index) => (
                  <Peer
                    key={index}
                    img={buyer.img}
                    rate={buyer.rate}
                    name={buyer.name}
                    available={buyer.available}
                    kind={buyer.kind}
                    verified={buyer.verified}
                    whatsapp={true}
                    zoom={true}
                    contact={buyer.contact}
                  />
                )),
              },

              {
                tabName: "TUBERS",
                // tabName: "USEFUL",
                tabImage: usefullImage,
                tabContent: UsefullData.map((buyer, index) => (
                  <Peer
                    key={index}
                    img={buyer.img}
                    rate={buyer.rate}
                    name={buyer.name}
                    available={buyer.available}
                    kind={buyer.kind}
                    verified={buyer.verified}
                    whatsapp={true}
                    zoom={true}
                    contact={buyer.contact}
                  />
                )),
              },
            ]}
          />
          {/* </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Tabs on Plain Card</small>
              </h3>
              <CustomTabs
                plainTabs
                headerColor="danger"
                tabs={[
                  {
                    tabName: "Home",
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    ),
                  },
                  {
                    tabName: "Updates",
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. I will be the leader of a company
                        that ends up being worth billions of dollars, because I
                        got the answers. I understand culture. I am the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
                    ),
                  },
                  {
                    tabName: "History",
                    tabContent: (
                      <p className={classes.textCenter}>
                        think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer> */}
        </div>
      </div>
    </div>
  );
}

// const OrganizePeers = ({ peers }) =>
//   Buyers.map((buyer, index) => (
//     <Peer key={index} img={buyer.img} balance={buyer.rate} name={buyer.name} />
//   ));
