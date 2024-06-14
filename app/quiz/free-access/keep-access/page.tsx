"use client";

import { ChatBubble } from "@/app/components/chat-bubble";
import { IllustrationKeepAccess } from "@/app/components/illustration-keep-access";
import { ArrowRightIcon, Cross1Icon, RocketIcon } from "@radix-ui/react-icons";
import { Button, Flex, Grid, IconButton, Text } from "@radix-ui/themes";

import { useRouter } from "next/navigation";

const KeepAccess = () => {
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
      <Flex align={"center"} justify={"center"} flexGrow={"1"} p={"6"}>
        <Grid columns={"2"} align={"center"}>
          <IllustrationKeepAccess />
          <ChatBubble showMascot={false}>
            <Text>
              Hey{" "}
              <Text color="blue" weight={"bold"}>
                Brunski
              </Text>
              , thank you for supporting SimpleStudy
            </Text>
          </ChatBubble>
        </Grid>
      </Flex>
      <Flex
        className="mx-auto"
        direction={"column"}
        align={"center"}
        p={"5"}
        gapY={"5"}
      >
        <Flex justify={"between"} align={"center"} gap={"6"}>
          <Button
            variant="solid"
            radius="medium"
            size={"3"}
            onClick={() => router.back()}
          >
            Continue to student space
            <ArrowRightIcon width="18" height="18" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default KeepAccess;
