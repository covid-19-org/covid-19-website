import React from "react";
import { FormControl, FormLabel, Input, FormHelperText, RadioGroup, Radio } from "@chakra-ui/core";

const formControlProps = {
  marginBottom: 50,
}

const buildInput = ({ type, options, id, handleChange, value }) => {
  const _handleChange = (e) => handleChange(e, id);

  return type === "radio" ?
    <RadioGroup onChange={_handleChange} value={value}>
      {options.map((o) => <Radio key={o} value={o}>{o}</Radio>)}
    </RadioGroup> :
    <Input onChange={_handleChange} id={id} type={type} value={value}></Input>
}

const Field = ({ id, label, type, isRequired, isInvalid, helperText, options, handleChange, values }) => {
  const helperTextId = id + '-helper-text';
  const value = values[id];

  const input = buildInput({ type, options, id, handleChange, value });

  return (
    <FormControl
      isInvalid={isInvalid}
      isRequired={isRequired}
      {...formControlProps}
    >
      <FormLabel htmlFor={id}>{label}</FormLabel>
      {helperText && <FormHelperText id={helperTextId} marginBottom={3}>{helperText}</FormHelperText>}
      {input}
    </FormControl>
  );
};

export default Field;