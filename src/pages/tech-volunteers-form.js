import React, { useState } from "react"
import { Alert, AlertIcon, AlertTitle, AlertDescription, Heading, Button } from "@chakra-ui/core"
import Amplify, { API } from 'aws-amplify';
import { Formik } from "formik";

import Field from "../components/field"
import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

const apiName = 'apid510b2bc';
const path = '/volunteer'

const TechVolunteersForm = () => {
  const [result, setResult] = useState({});

  const submitForm = (values, actions) => {
    const body = {
      email: values.email,
      fullName: values.fullName,
    }

    API.post(apiName, path, { body }).then(() => {
      actions.setSubmitting(false);
      setResult({
        status: "success",
        title: "Application submitted!",
        description: "Thank you for your interest. We will be in touch soon.",
      })
    }).catch(() => {
      setResult({
        status: "error",
        title: "Submission Failed",
        description: "Sorry, something went wrong. Please try again soon."
      });
    })
  };

  return (
    <Layout>
      <SEO title="Tech Volunteers Form" />

      <Section maxWidth={600}>
        <Heading marginBottom={10} size="lg" textAlign="center">Tech Volunteers Form</Heading>

        {result.status &&
          <Alert
            status={result.status}
            variant="subtle"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            height="200px"
            marginBottom={10}
          >
            <AlertIcon size="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">{result.title}</AlertTitle>
            <AlertDescription maxWidth="sm">{result.description}</AlertDescription>
          </Alert>}

        {result.status === "success" ||
          <Formik onSubmit={submitForm} initialValues={{ fullName: '', email: '', sessions: '' }}>
            {props => (
              <form onSubmit={props.handleSubmit}>
                <Field label="Full Name" isRequired />
                <Field label="Email" type="email" isRequired />
                <Field
                  label="Location (City, Country)"
                  helperText="Where are you currently based or spend the most time in?"
                  isRequired
                />
                <Field
                  label="Mobile Number"
                  helperText="The mobile number will help the project owner reach you with time-sensitive requests"
                />

                <Field
                  label="How many sessions of volunteering (2-3 hours) can you commit to per week?"
                  type="radio"
                  options={[
                    "1 session",
                    "2 sessions",
                    "3 sessions",
                    "4+ sessions",
                    "I can work on this full-time",
                  ]}
                  isRequired
                />

                <Button
                  variantColor="blue"
                  isLoading={props.isSubmitting}
                  type="submit"
                  marginBottom={10}
                >
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        }
      </Section>
    </Layout>
  )
};

export default TechVolunteersForm
