import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const fieldStyles = {
  bg: "whiteAlpha.500",
  color: "black",
  border: "1px solid",
  borderColor: "whiteAlpha.400",
  transition: "all 0.2s ease",

  _focus: {
    bg: "whiteAlpha.600",
    borderColor: "purple.300",
    boxShadow: "0 0 0 1px rgba(159, 122, 234, 0.6)",
  },

  _hover: {
    bg: "whiteAlpha.500",
  },

  _active: {
    bg: "whiteAlpha.600",
  },
};

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: async (values, { resetForm }) => {
      await submit(values);

      if (response && response.type === "success") {
        resetForm();
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string().trim().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      type: Yup.string().required("Please select an enquiry type"),
      comment: Yup.string()
        .trim()
        .min(25, "Message must be at least 25 characters")
        .required("Message is required"),
    }),
  });

  useEffect(() => {
    if (!response) return;

    onOpen(response.type, response.message);

    if (response.type === "success") {
      formik.resetForm();
    }
  }, [response, onOpen]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="transparent"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section" color="white">
          Contact me
        </Heading>

        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
              >
                <FormLabel htmlFor="firstName" color="white">
                  Name
                </FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...fieldStyles}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.touched.email && Boolean(formik.errors.email)}
              >
                <FormLabel htmlFor="email" color="white">
                  Email Address
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...fieldStyles}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.touched.type && Boolean(formik.errors.type)}
              >
                <FormLabel htmlFor="type" color="white">
                  Type of enquiry
                </FormLabel>
                <Select
                  id="type"
                  name="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...fieldStyles}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={
                  formik.touched.comment && Boolean(formik.errors.comment)
                }
              >
                <FormLabel htmlFor="comment" color="white">
                  Your message
                </FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...fieldStyles}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
                loadingText="Submitting"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;