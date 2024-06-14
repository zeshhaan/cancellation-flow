"use client";

import { ChatBubble } from "@/app/components/chat-bubble";
import { ArrowLeftIcon, Cross1Icon, RocketIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, IconButton, RadioCards } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Improve = () => {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const improvements = [
    {
      id: 1,
      label: "More diagrams in notes",
      value: "diagrams",
    },
    {
      id: 2,
      label: "More sample answers",
      value: "answers",
    },
    {
      id: 3,
      label: "Higher quality study notes",
      value: "quality",
    },
    {
      id: 4,
      label: "Personalised help from a tutor",
      value: "tutor",
    },
    {
      id: 5,
      label: "The layout of the product",
      value: "layout",
    },
    {
      id: 6,
      label: "Video tutorials for each subject",
      value: "video",
    },
    {
      id: 7,
      label: "Community features",
      value: "community",
    },
    {
      id: 8,
      label: "Something else",
      value: "other",
    },
  ];

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
        <ChatBubble>How could we improve for other students?</ChatBubble>
      </Flex>
      <Flex align={"center"} justify={"center"} flexGrow={"1"}>
        <Flex direction={"column"} gap="3" maxWidth="600px">
          <RadioCards.Root
            name="isFinalYear"
            columns={{ initial: "1", sm: "2" }}
            onValueChange={(value) => setSelectedValue(value)}
          >
            {improvements.map((improvement) => (
              <RadioCards.Item key={improvement.id} value={improvement.value}>
                {improvement.label}
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
            onClick={() =>
              router.push("/quiz/cancellation/offer/rating/improve/sorry")
            }
          >
            Continue
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Improve;
