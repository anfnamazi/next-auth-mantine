"use client"
import classes from "./page.module.css";
import Index from "@/app/components/Form";
import {Alert, AppShell, Burger, CheckIcon, Grid, Group, Skeleton,} from "@mantine/core";
import { signIn } from "next-auth/react";
import {useState} from "react";

export default function Home() {
  const [open, setOpen] = useState(false)
  const handleToggle = () => {
    setOpen(prev => !prev)
  }
  return (
    <AppShell
      header={{height: 60}}
      navbar={{width: 300, breakpoint: 'sm', collapsed: {mobile: !open}}}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={open} onClick={handleToggle} hiddenFrom="sm" size="sm"/>
          header
        </Group>

      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false}/>
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Grid>
          <Grid.Col span={4}>
            <Index/>
          </Grid.Col><Grid.Col span={4}>
          <Alert title="Alert title" classNames={classes} icon={<CheckIcon/>} withCloseButton>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt corporis natus veniam quis
            cupiditate enim architecto mollitia numquam temporibus, consectetur nam laboriosam voluptates
            nemo facilis? Exercitationem aut praesentium quibusdam reiciendis.
          </Alert>
        </Grid.Col>
        </Grid>
      </AppShell.Main>

      <button onClick={()=>signIn("github")}>login</button>
    </AppShell>
  );
}
