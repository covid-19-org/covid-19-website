import React, { useState } from "react"
import { Alert, AlertIcon, AlertTitle, AlertDescription, Input, FormControl, FormLabel, Heading, Button } from "@chakra-ui/core"
import Amplify, { API } from 'aws-amplify';

import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"
import awsconfig from '../aws-exports';
import { Formik, Field, ErrorMessage } from "formik";

Amplify.configure(awsconfig);

const apiName = 'apid510b2bc';
const path = '/volunteer'

const validateRequired = (v) => v ? null : 'Required';

const formControlProps = {
  marginBottom: 5,
  isRequired: true,
}

const TechVolunteersForm = () => {
  const [didSubmit, setDidSubmit] = useState(false);

  const submitForm = (values, actions) => {
    const body = {
      email: values.email,
      fullName: values.fullName,
    }

    API.post(apiName, path, { body }).then(response => {
      actions.setSubmitting(false);
      setDidSubmit(true);
    });
  };

  return (
    <Layout>
      <SEO title="Tech Volunteers Form" />

      <Section maxWidth={600} paddingBottom={50}>
        <Heading paddingBottom={10} size="lg" textAlign="center">Tech Volunteers Form</Heading>

        {didSubmit ?
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <AlertIcon size="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Application submitted!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Thank you for your interest. We will be in touch soon.
            </AlertDescription>
          </Alert> :

          <Formik onSubmit={submitForm} initialValues={{ fullName: '', email: '' }}>
            {props => (
              <form onSubmit={props.handleSubmit}>
                <Field name="fullName" validate={validateRequired}>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.fullName && form.touched.fullName} {...formControlProps}>
                      <FormLabel htmlFor="full_name">Full Name</FormLabel>
                      <Input {...field} id="full_name"></Input>
                      <ErrorMessage name="fullName"></ErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="email" validate={validateRequired}>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email} paddingBottom={5} isRequired>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input {...field} id="email" type="email"></Input>
                      <ErrorMessage name="email"></ErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Button
                  variantColor="blue"
                  isLoading={props.isSubmitting}
                  type="submit"
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
