"use client"
import React, {FC, useState} from 'react';
import {Button, Checkbox, Group, LoadingOverlay, NumberInput, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";
import classes from "./index.module.css";

interface FormProps {

}

const Index: FC<FormProps> = () => {

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      number: 0,
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      number: (value) => value > 20 ? null : 'Invalid number'
    }
  })

  const handleSubmit = (values: Record<string, unknown>) => {
    console.log(values);

  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} className={classes.form}>
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <NumberInput
        withAsterisk
        label="Input label"
        description="Input description"
        placeholder="Input placeholder"
        key={form.key('number')}
        {...form.getInputProps('number')}
      />

      <Checkbox
        mt="md"
        label="I agree to sell my privacy"
        key={form.key('termsOfService')}
        {...form.getInputProps('termsOfService', {type: 'checkbox'})}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
};

export default Index;