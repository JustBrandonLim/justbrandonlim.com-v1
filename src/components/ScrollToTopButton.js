import * as React from "react";

//Style
import * as scrollToTopButtonStyles from "../styles/components/scrollToTopButton.module.css";

//React-Bootstrap
import Button from "react-bootstrap/Button";

//Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTopButton({ showBelow }) {
  const [showButton, setShowButton] = React.useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!showButton) setShowButton(true);
    } else {
      if (showButton) setShowButton(false);
    }
  };

  const handleClick = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });

  return (
    <>
      {showButton && (
        <Button
          variant="dark"
          onClick={handleClick}
          className={scrollToTopButtonStyles.scrollToTopButton}
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </Button>
      )}
    </>
  );
}
