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

const Offer = () => {
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
          <Image
            src={"/offer.png"}
            alt="Free access"
            width={480}
            height={400}
          />
          <Grid maxWidth={"30rem"} gap={"6"} className="justify-items-start">
            <Heading as="h1" size={"8"}>
              Hey Bruno, would you like a{" "}
              <Text as="span" color="blue">
                50% discount
              </Text>{" "}
              on premium? .
            </Heading>
            <Text>
              Get{" "}
              <Text as="span" color="blue" weight={"bold"}>
                50% discount
              </Text>{" "}
              on SimpleStudy premium, as well as early access to premium
              resources and student guides.
            </Text>
            <Text as="label" size="3" weight={"medium"}>
              <Flex gap="2">
                <Checkbox />
                Include early access to resources and giveaways
              </Flex>
            </Text>
            <Button
              size={"3"}
              onClick={() => router.push("/quiz/cancellation/offer/rating")}
            >
              <SketchLogoIcon width="18" height="18" />
              Yes, I’d love 50% off premium
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
            onClick={() => router.push("/quiz/cancellation/offer/rating")}
          >
            <SketchLogoIcon width="18" height="18" />
            Give me 50% off premium
          </Button>
        </Flex>
        <Link className="text-[#E5E5E5] underline" href="/quiz/cancellation">
          No thanks, I’d rather not
        </Link>
      </Flex>
    </Flex>
  );
};

export default Offer;
