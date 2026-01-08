import { Button } from '@chakra-ui/react'

export default function CategoryButton({ isChoose = false, text="", ...props }) {
  return (
    <Button 
      {...props} 
      flex={1} 
      variant={isChoose ? "gradient" : "subBackground"} 
      rounded={"full"}
      cursor="pointer"
      _hover={{ opacity: 0.8 }}
      transition="all 0.2s ease-in-out"
    >
      {text}
    </Button>
  )
}