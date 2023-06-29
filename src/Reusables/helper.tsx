import React, { ReactNode } from "react";
import {
  Image,
  chakra,
  HStack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";

export const Logo = (props: any) => {
  return (
    <HStack>
      <>
        <Image
          width={8}
          height={8}
          alt={"Login Image"}
          objectFit={"cover"}
          src={"/logo.png"}
        />
        <Text as="kbd"></Text>
      </>
    </HStack>
  );
};
