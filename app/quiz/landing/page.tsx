"use client";

import { LandingPageMascot } from "@/app/components/landing-illustration-mascot";
import { HandDrawnArrow } from "@/app/components/illustration-hand-drawn-arrow";
import { SketchLogoIcon } from "@radix-ui/react-icons";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { Box, Button, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LandingPageCards } from "@/app/components/landing-page-cards";

const Landing = () => {
  const router = useRouter();
  const { isMobile } = useMediaQuery();
  return (
    <Flex
      minHeight={"100vh"}
      direction={"column"}
      className="relative bg-[linear-gradient(-160.678deg,#0F5EF7_10%,#20285E_88%)]"
    >
      <LandingPageMascot className="absolute top-0 right-0" />
      {!isMobile && <HandDrawnArrow className="absolute bottom-0 right-0" />}
      <Flex align={"center"} justify={"start"} flexGrow={"1"} p={"6"}>
        <Flex
          direction={"column"}
          gap={"6"}
          className="text-white"
          align={isMobile ? "center" : "start"}
        >
          {!isMobile && (
            <Text
              weight={"bold"}
              size={"3"}
              className="rounded-full px-4 py-2 leading-6 bg-[linear-gradient(90deg,#1CB0F6_0%,#397CFF_100%)]"
            >
              You’re getting FREE ACCESS
            </Text>
          )}
          <Heading as="h1" className="space-y-2" align={"center"}>
            <Text as="div" size={isMobile ? "7" : "8"} weight={"medium"}>
              Built for university.
            </Text>
            <Text as="div" size={isMobile ? "8" : "9"}>
              Made for students.
            </Text>
          </Heading>
          <Box maxWidth={"26rem"}>
            {isMobile ? (
              <Text
                as="p"
                size={"2"}
                className="tracking-wide"
                align={"center"}
              >
                <Text as="span" weight={"bold"}>
                  Get early access
                </Text>
                &nbsp;to our new study product for university students and be
                included in giveaways.
              </Text>
            ) : (
              <Text
                as="p"
                size={"4"}
                className="tracking-wide"
                align={"center"}
              >
                Our new study product for university students is awesome - and
                you can
                <Text as="span" weight={"bold"}>
                  &nbsp;get early access for FREE
                </Text>
              </Text>
            )}
          </Box>
          <Grid columns={isMobile ? `1` : `2`} gap={"4"}>
            <LandingPageCards />
          </Grid>
        </Flex>
      </Flex>
      <Flex
        className="mx-auto fixed bottom-0 right-0 left-0"
        direction={"column"}
        align={"center"}
        p={"5"}
        gapY={"5"}
      >
        <Flex
          direction={isMobile ? "column" : "row"}
          justify={"between"}
          align={"stretch"}
          gap={"6"}
        >
          <Button
            variant="solid"
            radius="medium"
            size={"3"}
            onClick={() => router.back()}
          >
            Join early access program
          </Button>
          <Button
            size={"3"}
            onClick={() => router.push("/quiz/landing/keep-access")}
          >
            <SketchLogoIcon width="18" height="18" />
            Get FREE ACCESS until October
          </Button>
        </Flex>
        <Link className="text-white underline" href="/quiz/cancellation">
          No thanks, I’d rather not
        </Link>
      </Flex>
    </Flex>
  );
};

export default Landing;
