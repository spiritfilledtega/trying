import React from "react";
// import Button from "components/CustomButtons/Button.js";

import Button from "../../../components/CustomButtons/Button.js";

import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
// import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

import CopyToClipboard from "react-copy-to-clipboard";

const useStyles = makeStyles(styles);

const PopMessages = ({
  name,
  contact,
  kind,
  buy,
  what,
  zoomlink,
  popClose,
}) => {
  const classes = useStyles();
  let buyOrSell = buy ? " buy " : " sell ";
  const whatsappApi = "https://api.whatsapp.com/send?phone=" + contact;
  const [disable, setDisable] = useState(true);
  const [tobeCopied, setToBeCopied] = useState("");
  const [copied, setCopied] = useState(false);
  let message = "";
  let fromOrTo = buy ? " from " : " to ";

  let handleIconClick = () => {
    console.log(message);
    console.log(copied);
    setToBeCopied(message);
    setDisable(false);
  };
  let handleIconClickb = () => {
    console.log(message);
    setToBeCopied(message);
    setDisable(false);
  };

  let handleIconClickc = () => {
    console.log(message);
    setToBeCopied(message);
    setDisable(false);
  };

  let gotIt = () => {
    popClose();
  };

  useEffect(() => setToBeCopied(message), [message]);

  if (kind === 1) {
    message =
      "Hello " +
      name +
      ", I am from tensel and I will like to " +
      buyOrSell +
      " " +
      what +
      fromOrTo +
      "you";

    return (
      <section>
        <div>
          <h5>{message}</h5>
        </div>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          <div style={{ marginLeft: "auto" }}>
            <CopyToClipboard text={tobeCopied} onCopy={() => setCopied(true)}>
              <Button
                justIcon
                round
                color="primary"
                size="sm"
                onClick={() => handleIconClick()}
              >
                <FileCopyOutlinedIcon className={classes.icons} />
              </Button>
            </CopyToClipboard>
          </div>
          <div style={{ marginLeft: "1rem" }}>
            <Button
              color="primary"
              size="sm"
              href={whatsappApi}
              target="_blank"
              disabled={disable}
              round
              onClick={() => gotIt()}
            >
              Proceed
            </Button>
          </div>
        </div>
      </section>
    );
  } else {
    if (kind === 2) {
      message = contact;
      return (
        <section>
          <div>
            <h5>{contact}</h5>
          </div>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
            }}
          >
            <div style={{ marginLeft: "auto" }}>
              <CopyToClipboard text={tobeCopied}>
                <Button
                  justIcon
                  round
                  color="primary"
                  size="sm"
                  onClick={() => handleIconClickb()}
                >
                  <FileCopyOutlinedIcon className={classes.icons} />
                </Button>
              </CopyToClipboard>
            </div>
            <div style={{ marginLeft: "1rem" }}>
              <Button
                color="primary"
                size="sm"
                disabled={disable}
                round
                onClick={() => gotIt()}
              >
                Okay Got it!
              </Button>
            </div>
          </div>
        </section>
      );
    } else {
      if (kind === 3) {
        message = contact;
        return (
          <section>
            <div>
              <h5>
                copy and call phone number {": " + contact + ", "} if peer does
                not join you after 2 minutes of waiting
              </h5>
            </div>
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
              }}
            >
              <div style={{ marginLeft: "auto" }}>
                <CopyToClipboard text={tobeCopied}>
                  <Button
                    justIcon
                    round
                    color="primary"
                    size="sm"
                    onClick={() => handleIconClickc()}
                  >
                    <FileCopyOutlinedIcon className={classes.icons} />
                  </Button>
                </CopyToClipboard>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <Button
                  color="primary"
                  size="sm"
                  href={zoomlink}
                  disabled={disable}
                  round
                  onClick={() => gotIt()}
                >
                  Okay Got it!
                </Button>
              </div>
            </div>
          </section>
        );
      }
    }
  }
};

export default PopMessages;
