"use client";

import { ChatBubble } from "@/app/components/chat-bubble";
import { ArrowLeftIcon, Cross1Icon, RocketIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, IconButton, RadioCards } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Cancellation = () => {
  const reasons = [
    {
      id: 1,
      label: "It’s too expensive",
      value: "expensive",
    },
    {
      id: 2,
      label: "I won’t use it over the summer",
      value: "summer",
    },
    {
      id: 3,
      label: "Going to university",
      value: "university",
    },
    {
      id: 4,
      label: "Didn’t find the content I wanted",
      value: "content",
    },
    {
      id: 5,
      label: "I didn’t use it enough",
      value: "enough",
    },
    {
      id: 6,
      label: "The content was not high quality",
      value: "quality",
    },
    {
      id: 7,
      label: "I finished school",
      value: "finished",
    },
    {
      id: 8,
      label: "Something else",
      value: "other",
    },
  ];
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

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
        <ChatBubble>Why do you want to cancel?</ChatBubble>
      </Flex>
      <Flex align={"center"} justify={"center"} flexGrow={"1"}>
        <Flex direction={"column"} gap="3" maxWidth="600px">
          <RadioCards.Root
            name="isFinalYear"
            columns={{ initial: "1", sm: "2" }}
            onValueChange={(value) => setSelectedValue(value)}
          >
            {reasons.map((reason) => (
              <RadioCards.Item key={reason.id} value={reason.value}>
                {reason.label}
              </RadioCards.Item>
            ))}
          </RadioCards.Root>
        </Flex>
      </Flex>
      <Box className="mx-auto">
        <Flex justify={"between"} align={"stretch"} p={"5"} gap={"4"}>
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
            onClick={() => router.push("/quiz/cancellation/offer")}
          >
            Continue
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Cancellation;
