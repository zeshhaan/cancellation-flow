"use client";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Cross1Icon,
  RocketIcon,
  SketchLogoIcon,
} from "@radix-ui/react-icons";
import {
  Button,
  Checkbox,
  Flex,
  Grid,
  Heading,
  IconButton,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SorryPageIllustration } from "@/app/components/illustration-sorry-page";

const Sorry = () => {
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
        <Grid columns={"2"} gap={"9"} align={"start"}>
          <SorryPageIllustration />
          <Grid maxWidth={"30rem"} gap={"6"} className="justify-items-start">
            <Heading as="h1" size={"8"}>
              Was it something we said? Hope to{" "}
              <Text as="span" color="blue">
                see you again
              </Text>{" "}
              soon.
            </Heading>
            <Text>
              Get If you have any suggestions for us please let us know by
              contacting our support team below.
            </Text>

            <Button
              variant="outline"
              size={"3"}
              onClick={() => router.replace("/")}
            >
              Yes, I want to share my idea
            </Button>
          </Grid>
        </Grid>
      </Flex>
      <Flex
        className="mx-auto"
        direction={"column"}
        align={"center"}
        p={"5"}
        gapY={"5"}
      >
        <Button
          variant="solid"
          radius="medium"
          size={"3"}
          onClick={() => router.back()}
        >
          <ArrowRightIcon width="18" height="18" />
          Continue to student space
        </Button>
      </Flex>
    </Flex>
  );
};

export default Sorry;
