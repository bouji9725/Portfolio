import React, { useEffect, useRef, useState } from "react";
import { Avatar, Box, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Mr.Isler!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const binaryUnit = "01010111001010101011100101010101";
const binaryRow = binaryUnit.repeat(40);
const binaryBackground = Array(120).fill(binaryRow).join("\n");

const LandingSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleGreeting, setVisibleGreeting] = useState("");

  useEffect(() => {
    const checkVisibility = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.85;

      if (rect.top < triggerPoint && rect.bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  useEffect(() => {
    let interval;

    if (isVisible) {
      let index = 0;
      setVisibleGreeting("");

      interval = setInterval(() => {
        index += 1;
        setVisibleGreeting(greeting.slice(0, index));

        if (index >= greeting.length) {
          clearInterval(interval);
        }
      }, 70);
    } else {
      setVisibleGreeting("");
    }

    return () => {
      clearInterval(interval);
    };
  }, [isVisible]);

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      position="relative"
      overflow="hidden"
      isDarkBackground
    >
      <style>
        {`
          @keyframes slideInFromLeft {
            from {
              opacity: 0;
              transform: translateX(-100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInFromRight {
            from {
              opacity: 0;
              transform: translateX(100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>

      <Box
        ref={sectionRef}
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
          color="whiteAlpha.300"
          whiteSpace="pre"
        >
          {binaryBackground}
        </Text>
      </Box>

      <Box
        position="relative"
        zIndex={2}
        backgroundColor="rgba(88, 48, 156, 0.46)"
        borderRadius="xl"
        padding={8}
        boxShadow="lg"
      >
        <VStack spacing={6}>
          <Avatar
            size="2xl"
            name="Isler"
            src={require("../images/app avatar.png")}
          />

          <VStack spacing={2}>
            <Heading
  fontFamily="'Orbitron', sans-serif"
  bgGradient="linear(to-r, cyan.300, blue.400, purple.500)"
  bgClip="text"
  letterSpacing="0.08em"
>
  {visibleGreeting}
</Heading>

            <Text
            fontFamily="'JetBrains Mono', monospace"
              fontSize="xl"
              color="gray.300"
              textAlign="center"
              opacity={isVisible ? 1 : 0}
              animation={
                isVisible ? "slideInFromLeft 0.9s ease-out forwards" : "none"
              }
            >
              {bio1}
            </Text>

            <Text
            fontFamily="'JetBrains Mono', monospace"
              fontSize="xl"
              color="gray.250"
              textAlign="center"
              opacity={isVisible ? 1 : 0}
              animation={
                isVisible ? "slideInFromRight 0.9s ease-out forwards" : "none"
              }
            >
              {bio2}
            </Text>
          </VStack>
        </VStack>
      </Box>
    </FullScreenSection>
  );
};

export default LandingSection;