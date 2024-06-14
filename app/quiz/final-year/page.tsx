"use client";
import { ArrowLeftIcon, Cross1Icon, RocketIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { ChatBubble } from "@/app/components/chat-bubble";
import { Box, Button, Flex, IconButton, RadioCards } from "@radix-ui/themes";
import { useState } from "react";

const FinalYear = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const router = useRouter();

  const handleNextQuestion = () => {
    if (selectedValue === "university") {
      router.push("/quiz/final-year/uni");
    } else {
      router.push("/quiz/landing");
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
        <ChatBubble>What are you planning on doing next? </ChatBubble>
      </Flex>
      <Flex align={"center"} justify={"center"} flexGrow={"1"}>
        <Flex direction={"column"} gap="3" maxWidth="400px">
          <RadioCards.Root
            name="isFinalYear"
            columns={{ initial: "1", sm: "2" }}
            onValueChange={(value) => setSelectedValue(value)}
          >
            <RadioCards.Item value="university">
              Going to university
            </RadioCards.Item>
            <RadioCards.Item value="job">Going to university</RadioCards.Item>
            <RadioCards.Item value="gap">Gap year</RadioCards.Item>
            <RadioCards.Item value="thinking">
              Still thinking about it
            </RadioCards.Item>
          </RadioCards.Root>
        </Flex>
      </Flex>
      <Box className="mx-auto">
        <Flex justify={"between"} align={"center"} p={"5"} gap={"4"}>
          <Button
            variant="solid"
            radius="medium"
            size={"3"}
            onClick={() => router.back()}
          >
            <ArrowLeftIcon width="18" height="18" />
            Back to study
          </Button>
          <Button
            variant="outline"
            disabled={selectedValue === null}
            size={"3"}
            onClick={handleNextQuestion}
          >
            Continue
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default FinalYear;
