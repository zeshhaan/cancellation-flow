"use client";

import { HandDrawnArrowBlue } from "@/app/components/illustration-hand-drawn-arrow-blue";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Flex, Grid, Heading, IconButton, Text } from "@radix-ui/themes";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import Image from "next/image";
import { useRouter } from "next/navigation";

const KeepAccess = () => {
  const router = useRouter();
  const { isMobile } = useMediaQuery();
  return (
    <Flex minHeight={"100vh"} direction={"column"}>
      <Flex justify={"between"} align={"start"} p={"5"} pb={"8"}>
        <IconButton variant="ghost" onClick={() => router.replace("/")}>
          <Cross1Icon width="18" height="18" />
        </IconButton>
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
              We will update your access to our university product shortly, and
              let you know once you go back to school. See you soon.
            </Text>
          </Grid>
          <Image
            src={"/free-access.png"}
            alt="Free access"
            width={480}
            height={400}
          />
        </Grid>
      </Flex>
      {!isMobile && (
        <HandDrawnArrowBlue className="absolute bottom-36 left-0" />
      )}
    </Flex>
  );
};

export default KeepAccess;
