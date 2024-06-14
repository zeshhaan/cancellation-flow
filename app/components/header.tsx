import { Button, Flex, IconButton } from "@radix-ui/themes";
import { RocketIcon, Cross1Icon } from "@radix-ui/react-icons";

function Header({ showCta = true }) {
  return (
    <Flex justify={"between"}>
      <IconButton variant="ghost">
        <Cross1Icon width="18" height="18" />
      </IconButton>

      {showCta && (
        <Button variant="solid" radius="medium">
          Start studying <RocketIcon />
        </Button>
      )}
    </Flex>
  );
}

export { Header };
