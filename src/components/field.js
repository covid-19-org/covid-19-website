import React from "react";
import { Field as FormikField, ErrorMessage } from "formik";
import { FormControl, FormLabel, Input, FormHelperText, RadioGroup, Radio } from "@chakra-ui/core";
import camelCase from 'lodash/camelCase';
import kebabCase from 'lodash/kebabCase';

const formControlProps = {
  marginBottom: 50,
}

const validateRequired = (v) => v ? null : 'Required';

const buildChakraElement = ({ type, field, options, id }) => {
  return type === "radio" ?
    <RadioGroup {...field} name="sessions">
      {options.map((o) => <Radio value={o}>{o}</Radio>)}
    </RadioGroup> :
    <Input {...field} id={id} type={type}></Input>
}

const Field = ({ label, type, isRequired, helperText, options }) => {
  const id = kebabCase(label);
  const key = camelCase(label);
  const helperTextId = id + '-helper-text';

  const validate = isRequired ? validateRequired : null;

  return <FormikField name={key} validate={validate}>
    {({ field, form }) => {
      const isInvalid = form.errors[key] && form.touched[key];

      return <FormControl
        isInvalid={isInvalid}
        isRequired={isRequired}
        {...formControlProps}
      >
        <FormLabel htmlFor={id}>{label}</FormLabel>
        {helperText && <FormHelperText id={helperTextId} marginBottom={3}>{helperText}</FormHelperText>}
        {buildChakraElement({ type, field, options, id })}

        {isInvalid && <ErrorMessage name={key} />}
      </FormControl>
    }}
  </FormikField>;
};

export default Field;