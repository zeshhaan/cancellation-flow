import { Box, Container, Flex } from "@radix-ui/themes";
import { ElephantMaskot } from "./ilutsration-mascot-elephant";

function ChatBubble({
  children,
  showMascot = true,
}: {
  children: React.ReactNode;
  showMascot?: boolean;
}) {
  return (
    <Flex px={"9"}>
      {showMascot && <ElephantMaskot />}
      <Box className="min-w-xs">
        <Flex className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl border border-gray-300 min-h-14 flex items-center">
          <Container>{children}</Container>
          <Box className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-3 h-3 bg-white border-l border-b border-gray-300"></Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export { ChatBubble };
