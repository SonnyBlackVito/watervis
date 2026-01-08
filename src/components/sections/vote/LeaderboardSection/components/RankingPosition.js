import { Flex, Image, Text } from "@chakra-ui/react";
import { formatScore } from "@/utils/formatNumber";

export default function RankingPosition({ rank = "1st", value = {} }) {
  let position = {};
  switch (rank) {
    case "1st":
      position = {
        bottom: { base: "155px", lg: "295px" },
        right: { base: "135px", lg: "255px" },
        width: { base: "60px", lg: "120px" },
        height: { base: "75px", lg: "135px" },
      };
      break;
    case "2nd":
      position = {
        bottom: { base: "115px", lg: "215px" },
        right: { base: "230px", lg: "425px" },
        width: { base: "45px", lg: "100px" },
        height: { base: "55px", lg: "110px" },
      };
      break;
    case "3rd":
      position = {
        bottom: { base: "115px", lg: "215px" },
        right: { base: "50px", lg: "80px" },
        width: { base: "45px", lg: "100px" },
        height: { base: "55px", lg: "110px" },
      };
      break;
  }

  return (
    <Flex
      flexDirection="column"
      position={"absolute"}
      alignItems="center"
      bottom={position?.bottom}
      right={position?.right}
      zIndex={10}
    >
      {value?.url_image ? (
        <Image
          objectFit={"cover"}
          src={value?.url_image || null}
          w={position.width}
          h={position.height}
          rounded={"lg"}
          mb={1}
        />
      ) : (
        <Image
          objectFit={"cover"}
          src={"/default.png"}
          w={position.width}
          h={position.height}
          rounded={"lg"}
          mb={1}
        />
      )}
      <Text fontSize={{ base: 12, lg: 17 }} fontWeight={300}>
        {value?.name}
      </Text>
      <Text fontSize={{ base: 15, lg: 20 }} fontWeight={500}>
        {formatScore(value?.global_score)}
      </Text>
    </Flex>
  );
}
