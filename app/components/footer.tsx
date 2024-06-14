import { ArrowLeftIcon, SketchLogoIcon } from "@radix-ui/react-icons";
import { Flex, Slot, Button, Grid, Link, IconButton } from "@radix-ui/themes";

function Footer({
  showCancelButton = false,
  showPremiumButton = false,
  showFreeAccessButton = false,
  freeAccessMonth = "October",
  showJoinEarlyAccessButton = false,
}) {
  const joinEarlyAccessButton = () => (
    <Button variant="solid" radius="medium" size={"3"}>
      Join early access program
    </Button>
  );
  const premiumButton = showPremiumButton ? (
    <Button variant="solid" radius="medium" size={"3"}>
      <SketchLogoIcon width="18" height="18" />
      Give me 50% off premium
    </Button>
  ) : null;

  const freeAccessButton = showFreeAccessButton ? (
    <Button variant="solid" radius="medium" size={"3"}>
      <SketchLogoIcon width="18" height="18" />
      Get FREE ACCESS until {freeAccessMonth}
    </Button>
  ) : null;

  const continueButton = (
    <Button variant="outline" disabled size={"3"}>
      Continue
    </Button>
  );

  return (
    <Flex justify={"center"} align={"center"} direction={"column"} gap={"4"}>
      <Flex gap={"4"} justify={"center"}>
        {showJoinEarlyAccessButton ? (
          joinEarlyAccessButton()
        ) : (
          <Button variant="solid" radius="medium" size={"3"}>
            <ArrowLeftIcon width="18" height="18" />
            Back to study
          </Button>
        )}

        {premiumButton || freeAccessButton || continueButton}
      </Flex>
      {showCancelButton && (
        <Slot>
          <Link href="#" underline="always">
            No thanks, I’d rather not
          </Link>
        </Slot>
      )}
    </Flex>
  );
}
export { Footer };
