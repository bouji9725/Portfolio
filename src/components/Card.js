import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      alignItems="flex-start"
      spacing={4}
      p={6}
      backgroundColor="rgba(255, 255, 255, 0.06)"
      height="100%"
    >
      <Image
        src={imageSrc}
        alt={title}
        borderRadius="md"
        width="100%"
        height="200px"
        objectFit="cover"
      />

      <VStack alignItems="flex-start" spacing={3} width="100%">
        <Heading fontFamily="'Orbitron', sans-serif" as="h3" size="md" color="ap
        lpha.900">
          {title}
        </Heading>
/* "'Orbitron', sans-serif" */
        <Text fontFamily="'Space Grotesk', sans-serif" color="gray.200" fontSize="md">
          {description}
        </Text>

        <HStack spacing={2} color="white" pt={2}>
          <Text fontWeight="bold">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;