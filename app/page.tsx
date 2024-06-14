"use client";
import { ArrowLeftIcon, Cross1Icon, RocketIcon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  IconButton,
  RadioCards,
} from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChatBubble } from "./components/chat-bubble";

const Home = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const router = useRouter();
  const handleQuizStart = () => {
    if (selectedValue === "6") {
      router.push("/quiz/final-year");
    } else {
      router.push("/quiz/free-access");
    }
  };

  return (
    <Flex minHeight={"100vh"} direction={"column"}>
      <Flex justify={"between"} align={"start"} p={"5"} pb={"8"}>
        <IconButton variant="ghost">
          <Cross1Icon width="18" height="18" />
        </IconButton>
        <Button variant="solid" radius="medium">
          Start studying <RocketIcon />
        </Button>
      </Flex>
      <Flex>
        <ChatBubble>What year are you in? </ChatBubble>
      </Flex>
      <Flex align={"center"} justify={"center"} flexGrow={"1"}>
        <Flex direction={"column"} gap="3" maxWidth="400px">
          <RadioCards.Root
            name="isFinalYear"
            onValueChange={(value) => setSelectedValue(value)}
          >
            <RadioCards.Item value="5">5th year</RadioCards.Item>
            <RadioCards.Item value="6">6th year</RadioCards.Item>
          </RadioCards.Root>
        </Flex>
      </Flex>
      <Box className="mx-auto">
        <Flex justify={"between"} align={"center"} p={"5"} gap={"4"}>
          <Button
            variant="solid"
            radius="medium"
            size={"3"}
            disabled
            onClick={() => router.back()}
          >
            <ArrowLeftIcon width="18" height="18" />
            Back to study
          </Button>
          <Button
            variant="outline"
            disabled={selectedValue === null}
            size={"3"}
            onClick={handleQuizStart}
          >
            Continue
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Home;
