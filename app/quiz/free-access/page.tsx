"use client";

import {
  ArrowLeftIcon,
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

const FreeAccess = () => {
  const router = useRouter();

  const handleSubscription = (subscribe: boolean) => {
    if (subscribe) {
      router.push("/quiz/free-access/keep-access");
    } else {
      router.push("/quiz/cancellation");
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
      <Flex align={"center"} justify={"center"} flexGrow={"1"} p={"6"}>
        <Grid columns={"2"} gap={"9"} align={"start"}>
          <Grid maxWidth={"32rem"} gap={"6"} className="justify-items-start">
            <Heading as="h1" size={"8"}>
              Hey Bruno, it’s time to relax and{" "}
              <Text as="span" color="blue">
                enjoy your summer
              </Text>
              .
            </Heading>
            <Text>
              You can have{" "}
              <Text as="span" color="blue" weight={"bold"}>
                FREE ACCESS
              </Text>{" "}
              to SimpleStudy premium until October. You will not be billed, and
              can cancel anytime.
            </Text>
            <Text as="label" size="3" weight={"medium"}>
              <Flex gap="2">
                <Checkbox />
                Remind me before my free access runs out
              </Flex>
            </Text>
            <Button
              size={"3"}
              onClick={() => router.push("/quiz/free-access/keep-access")}
            >
              <SketchLogoIcon width="18" height="18" />
              Yes, I want FREE access until October
            </Button>
          </Grid>
          <Image
            src={"/free-access.png"}
            alt="Free access"
            width={480}
            height={400}
          />
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
            <ArrowLeftIcon width="18" height="18" />
            Back to study
          </Button>
          <Button
            size={"3"}
            onClick={() => router.push("/quiz/free-access/keep-access")}
          >
            <SketchLogoIcon width="18" height="18" />
            Keep SimpleStudy for FREE
          </Button>
        </Flex>
        <Link className="text-[#E5E5E5] underline" href="/quiz/cancellation">
          No thanks, I’d rather not
        </Link>
      </Flex>
    </Flex>
  );
};

export default FreeAccess;
