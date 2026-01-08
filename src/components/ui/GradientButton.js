import { Box, Button } from '@chakra-ui/react'
import React from 'react'

const ACTIVE_GRADIENT = 'linear-gradient(135deg, #7A31FF 0%, #D923C1 100%)'

export default function GradientButton({
  children,
  padding,
  width,
  height,
  position,
  top,
  right,
  bottom,
  left,
  fontSize,
  fontWeight = 'bold',
  onClick,
  isChoose = false,
  variant = 'primary',
  ...buttonProps
}) {
  if (variant === 'toggle') {
    return (
      <Box
        borderRadius="full"
        background="rgba(18, 18, 24, 0.92)"
        padding="2px"
        border="1px solid rgba(255, 255, 255, 0.05)"
        display="inline-block"
        position={position}
        top={top}
        right={right}
        bottom={bottom}
        left={left}
        transition="all 0.3s ease"
        boxShadow={isChoose ? '0 18px 40px rgba(122, 49, 255, 0.35)' : '0 10px 25px rgba(0, 0, 0, 0.35)'}
      >
        <Button
          onClick={onClick}
          height={height}
          width={width}
          padding={padding}
          fontSize={fontSize}
          fontWeight={fontWeight}
          borderRadius="full"
          background={isChoose ? ACTIVE_GRADIENT : 'rgba(35, 35, 40, 0.92)'}
          color={isChoose ? '#FFFFFF' : 'rgba(255, 255, 255, 0.82)'}
          border={isChoose ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid rgba(255, 255, 255, 0.08)'}
          boxShadow={isChoose ? 'inset 0 0 0 1px rgba(255,255,255,0.15)' : 'inset 0 0 0 1px rgba(255,255,255,0.04)'}
          transition="all 0.3s ease"
          _hover={{
            background: isChoose ? ACTIVE_GRADIENT : 'rgba(42, 42, 48, 0.95)',
            color: '#FFFFFF'
          }}
          _active={{
            transform: 'scale(0.98)'
          }}
          {...buttonProps}
        >
          {children}
        </Button>
      </Box>
    )
  }

  return (
    <Box 
      background={'linear-gradient(to right, #6E46AE, #8B13A0)'}
      padding={'2px'}
      borderRadius={'50px'}
      display={'inline-block'}
      position={position}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "0 8px 25px rgba(110, 70, 174, 0.4)",
        filter: "brightness(1.1)"
      }}
      _active={{
        transform: "translateY(0px)",
        boxShadow: "0 4px 15px rgba(110, 70, 174, 0.3)"
      }}
    >
      <Button 
        backgroundColor={'#1A1A1A'}
        color={'white'}
        padding={padding}
        border={'none'}
        borderRadius={'50px'}
        cursor={'pointer'}
        height={height}
        width={width}
        fontSize={fontSize}
        fontWeight={fontWeight}
        onClick={onClick}
        transition="all 0.3s ease"
        _hover={{
          backgroundColor: '#2A2A2A'
        }}
        {...buttonProps}
      >
        {children}
      </Button>
    </Box>
  );
}
