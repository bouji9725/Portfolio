import { ChakraProvider, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <>
          <Header />

          <Box position="relative">
            {/* Fixed page background */}
            <Box
              position="fixed"
              top="0px"
              left={0}
              right={0}
              bottom={0}
              backgroundImage="url('https://img.freepik.com/premium-photo/abstract-purple-binary-code-background_684882-1149.jpg?w=2000')"
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              zIndex={0}
              pointerEvents="none"
            />

            {/* Optional dark overlay for better readability */}
            <Box
              position="fixed"
              top="0px"
              left={0}
              right={0}
              bottom={0}
              backgroundColor="rgba(0, 0, 0, 0.45)"
              zIndex={0}
              pointerEvents="none"
            />

            {/* Main scrolling content */}
            <Box as="main" position="relative" zIndex={1}>
              <LandingSection />
              <ProjectsSection />
              <ContactMeSection />
            </Box>
          </Box>

          <Footer />
          <Alert />
        </>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;