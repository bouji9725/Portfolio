import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:hello@example.com",
    label: "Email",
  },
  {
    icon: faGithub,
    url: "https://github.com/Budadio",
    label: "GitHub",
  },
  {
    icon: faLinkedin,
    url: "https://linkedin.com/in/abdelrahman-isler-a50823255",
    label: "LinkedIn",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
    label: "Medium",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
    label: "Stack Overflow",
  },
];

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const prevScrollY = useRef(0);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // always show header near top of page
      if (currentScrollY < 50) {
        setIsHidden(false);
      } else if (currentScrollY > prevScrollY.current) {
        // scrolling down
        setIsHidden(true);
      } else {
        // scrolling up
        setIsHidden(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={isHidden ? "translateY(-100%)" : "translateY(0)"}
      transition="transform 0.3s ease-in-out"
      bgGradient="linear(to-r, #755ff8, #230a3c)"
      zIndex={1000}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.url}
                  isExternal
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </Link>
              ))}
            </HStack>
          </nav>

          <nav>
            <HStack spacing={8}>
              <Link onClick={handleClick("projects")} cursor="pointer">
                Projects
              </Link>
              <Link onClick={handleClick("contactme")} cursor="pointer">
                Contact Me
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;