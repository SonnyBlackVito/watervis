import { Box, Text, HStack, IconButton } from '@chakra-ui/react';
import { MdClose } from 'react-icons/md';
import Image from 'next/image';
import { useCategoryContext } from '@/context/categoryContext';

export default function ShareSocialModal({ isOpen, onClose, idol }) {
  const { category } = useCategoryContext();

  if (!isOpen || !idol) return null;

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      w="100vw"
      h="100vh"
      bg="rgba(0,0,0,0.5)"
      zIndex={1000}
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={onClose}
      style={{ backdropFilter: "blur(2px)" }}
    >
      <Box
        bg="#232323"
        borderRadius="md"
        p={8}
        minW={{ base: "90vw", md: "500px" }}
        maxW="600px"
        position="relative"
        textAlign="center"
        onClick={stopPropagation}
      >
        <IconButton
          icon={<MdClose size={20} />}
          position="absolute"
          top="12px"
          right="12px"
          size="md"
          onClick={onClose}
          bg="transparent"
          color="white"
          _hover={{ bg: "gray.700" }}
          aria-label="Close"
        />
        <Text fontWeight={600} fontSize="20px" mb={6} color="white">
          Share on Social Media
        </Text>
        <HStack spacing={6} justify="center">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https://audition.kpoproad.com/share/${category}/${idol.code}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/facebook_logo.webp" width={25} height={25} alt="Facebook" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=https://audition.kpoproad.com/share/${category}/${idol.code}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/x_logo.webp" width={25} height={25} alt="X" />
          </a>
          <a
            href={`https://t.me/share/url?url=https://audition.kpoproad.com/share/${category}/${idol.code}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/telegram_logo.webp" width={25} height={25} alt="Telegram" />
          </a>
        </HStack>
      </Box>
    </Box>
  );
}
