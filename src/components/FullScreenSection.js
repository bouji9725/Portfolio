import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  const { background, backgroundColor, bgGradient, ...contentProps } = boxProps;

  return (
    <VStack
      width="100%"
      background={background}
      backgroundColor={backgroundColor}
      bgGradient={bgGradient}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight="100vh" width="100%" {...contentProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
