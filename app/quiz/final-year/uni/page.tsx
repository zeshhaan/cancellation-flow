"use client";

import { ChatBubble } from "@/app/components/chat-bubble";
import { ArrowLeftIcon, Cross1Icon, RocketIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, IconButton, RadioCards } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Uni = () => {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const handleCourseSelect = () => {
    router.push(`/quiz/landing`);
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
        <ChatBubble>Nice, what area are you planning on studying?</ChatBubble>
      </Flex>
      <Flex align={"center"} justify={"center"} flexGrow={"1"}>
        <Flex direction={"column"} gap="3" maxWidth="500px">
          <RadioCards.Root
            name="isFinalYear"
            columns={{ initial: "1", sm: "2" }}
            onValueChange={(value) => setSelectedValue(value)}
          >
            <RadioCards.Item value="science">
              Science & Engineering
            </RadioCards.Item>
            <RadioCards.Item value="maths">Maths & Statistics</RadioCards.Item>
            <RadioCards.Item value="business">
              Business & Economics
            </RadioCards.Item>
            <RadioCards.Item value="history">
              History, Philosophy & Politics
            </RadioCards.Item>
            <RadioCards.Item value="language">
              Languages & Culture
            </RadioCards.Item>
            <RadioCards.Item value="medicine">Medicine</RadioCards.Item>
            <RadioCards.Item value="cs">Computer Science</RadioCards.Item>
            <RadioCards.Item value="other">Other</RadioCards.Item>
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
            onClick={handleCourseSelect}
          >
            Continue
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Uni;
