import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponenet = ({message}) => {
  return (
    <Alert 
    status="error" 
    position={"fixed"} 
    bottom={"45%"} 
    left={"50%"} 
    transform={"translateX(-50%)"}
    w={"lg"}
    >
      <AlertIcon />
      {message}
    </Alert>
  );
}

export default ErrorComponenet
