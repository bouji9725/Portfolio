import React from "react";
import { Avatar, Box, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Isler!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const binaryUnit = "01010111001010101011100101010101";
const binaryRow = binaryUnit.repeat(40);
const binaryBackground = Array(120).fill(binaryRow).join("\n");

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    position="relative"
    overflow="hidden"
    isDarkBackground
    // bgGradient="linear(to-b, #230a3c 0%, #1a0933 40%, #0f0720 100%)"
  >
    {/* FULL SECTION BACKGROUND LAYER */}
    <Box
      position="absolute"
      inset={0}
      zIndex={0}
      pointerEvents="none"
      overflow="hidden"
    >
      <Text
        width="100%"
        height="100%"
        fontSize="10px"
        lineHeight="10px"
        fontFamily="monospace"
        color="whiteAlpha.200"
        whiteSpace="pre"
      >
        {binaryBackground}
      </Text>
    </Box>

    {/* FOREGROUND CONTENT CARD */}
    <Box
      position="relative"
      zIndex={2}
      backgroundColor="transparent"
      borderRadius="xl"
      padding={8}
      boxShadow="lg"
    >
      <VStack spacing={6}>
        <Avatar
          size="2xl"
          name="Isler"
          src="https://i.pravatar.cc/300?img=12"
        />

        <VStack spacing={2}>
          <Heading as="h1" size="2xl" color="white" textAlign="center">
            {greeting}
          </Heading>

          <Text fontSize="xl" color="gray.200" textAlign="center">
            {bio1}
          </Text>

          <Text fontSize="xl" color="gray.200" textAlign="center">
            {bio2}
          </Text>
        </VStack>
      </VStack>
    </Box>
  </FullScreenSection>
);

export default LandingSection;