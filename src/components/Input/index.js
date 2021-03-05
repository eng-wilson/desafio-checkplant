import React, { useRef, useEffect, useCallback } from 'react';
import { useField } from '@unform/core';

import { Container, TextInput } from './styles';

function Input({ name }) {
  const inputRef = useRef(null);

  const {
    fieldName, registerField, defaultValue = '',
  } = useField(name);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) return inputRef.current.value;

        return '';
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value });
          inputRef.current.value = value;
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: '' });
          inputRef.current.value = '';
        }
      },
    });
  }, [fieldName, registerField]);

  const handleChangeText = useCallback(
    (text) => {
      if (inputRef.current) inputRef.current.value = text;
    },
    [],
  );

  return (
    <Container>
      <TextInput
        ref={inputRef}
        onChangeText={handleChangeText}
        defaultValue={defaultValue}
        multiline
      />
    </Container>
  );
}

export default Input;
