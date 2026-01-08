// import {
//   Box,
//   Flex,
//   Text,
//   Image,
//   VStack,
//   HStack,
// } from "@chakra-ui/react";
// import styles from "./TokenomicsSection.module.css";

// export default function TokenomicsSection() {
//   const tokenomicsData = [
//     {
//       label: "Fan Reward",
//       value: "250,000,000",
//       color: "#6A4EDD",
//       percentage: "25%",
//     },
//     {
//       label: "Eco System",
//       value: "250,000,000",
//       color: "#6A4EDD",
//       percentage: "25%",
//     },
//     {
//       label: "Team Advisor",
//       value: "50,000,000",
//       color: "#9B7EDD",
//       percentage: "5%",
//     },
//     {
//       label: "Dao Community",
//       value: "200,000,000",
//       color: "#D95CD9",
//       percentage: "20%",
//     },
//     {
//       label: "Marketing",
//       value: "200,000,000",
//       color: "#C0C0C0",
//       percentage: "20%",
//     },
//     {
//       label: "PreSale",
//       value: "50,000,000",
//       color: "#808080",
//       percentage: "5%",
//     },
//   ];

//   return (
//     <Box bg="linear-gradient(150deg, rgba(0, 0, 0, 0.4) 0%,rgba(0, 0, 0, 0.1) 25% ,rgba(0, 0, 0, 0.1) 75%,rgba(0, 0, 0, 0.1) 50%,rgba(185, 179, 179, 0.3) 85% ,rgba(52, 48, 48, 0.3) 100%)" py={20} px={{ base: 8, md: 12, lg: 16, xl: 20 }} className={styles.tokenomicsSparkleBg}>
//       <Box className={styles.sparkleOverlay} />
//       <Flex
//         direction={{ base: "column", lg: "row" }}
//         align="center"
//         justifyContent="center"
//         gap={20}
//         minH="700px"
//         position="relative"
//         zIndex={1}
//       >
//         <Box flex="1" maxW="800px">
//           <Flex gap={12}>
//             <VStack spacing={8} align="stretch" gap={8}>
//               {tokenomicsData.slice(0, 3).map((item, index) => (
//                 <Box key={index}>
//                   <HStack spacing={4} align="flex-start">
//                     <Box w="86px" h="44px" bg={item.color} />
//                     <VStack align="start" spacing={2} flex="1">
//                       <Text
//                         fontSize="20px"
//                         fontWeight="700"
//                         color="#fff"
//                         lineHeight="1.1"
//                       >
//                         {item.label}
//                       </Text>
//                       <Text fontSize="14px" color="white" fontWeight="400">
//                         {item.value}
//                       </Text>
//                     </VStack>
//                   </HStack>
//                 </Box>
//               ))}
//             </VStack>

//             <VStack spacing={8} align="stretch" gap={8}>
//               {tokenomicsData.slice(3, 6).map((item, index) => (
//                 <Box key={index + 3}>
//                   <HStack spacing={4} align="flex-start">
//                     <Box w="86px" h="44px" bg={item.color} mt={0.5} />
//                     <VStack align="start" spacing={2} flex="1">
//                       <Text
//                         fontSize="20px"
//                         fontWeight="700"
//                         color="#fff"
//                         lineHeight="1.1"
//                       >
//                         {item.label}
//                       </Text>
//                       <Text fontSize="14px" color="#fff" fontWeight="400">
//                         {item.value}
//                       </Text>
//                     </VStack>
//                   </HStack>
//                 </Box>
//               ))}
//             </VStack>
//           </Flex>
//         </Box>

//         {/* Chart Section - Right Side */}
//         <Box
//           position="relative"
//           className={styles.chartAnim}
//         >
//           <Image
//             src="/tokenomics.png"
//             alt="Tokenomics Chart"
//             maxW="400px"
//             w="100%"
//             h="auto"
//             objectFit="contain"
//             transition="all 0.3s ease"
//             _hover={{
//               transform: "scale(1.08)",
//               filter:
//                 "brightness(1.15) drop-shadow(0 0 30px rgba(106, 78, 221, 0.7))",
//             }}
//           />
//         </Box>
//       </Flex>
//     </Box>
//   );
// };
