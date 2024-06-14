"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon, Cross1Icon, RocketIcon } from "@radix-ui/react-icons";
import { ChatBubble } from "@/app/components/chat-bubble";
import { Box, Button, Flex, IconButton, RadioCards } from "@radix-ui/themes";
import { useState } from "react";

const Rating = () => {
  const rating = [
    {
      id: 1,
      label: "I didn’t like it",
      value: "bad",
    },
    {
      id: 2,
      label: "It was okay",
      value: "okay",
    },
    {
      id: 3,
      label: "Very good",
      value: "good",
    },
    {
      id: 4,
      label: "Excellent",
      value: "excellent",
    },
  ];
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const router = useRouter();

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
        <ChatBubble>How would you rate the product?</ChatBubble>
      </Flex>
      <Flex align={"center"} justify={"center"} flexGrow={"1"}>
        <Flex direction={"column"} gap="3" maxWidth="400px">
          <RadioCards.Root
            name="isFinalYear"
            columns={{ initial: "1", sm: "2" }}
            onValueChange={(value) => setSelectedValue(value)}
          >
            {rating.map((item) => (
              <RadioCards.Item key={item.id} value={item.value}>
                {item.label}
              </RadioCards.Item>
            ))}
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
            onClick={() =>
              router.push("/quiz/cancellation/offer/rating/improve")
            }
          >
            Continue
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Rating;
