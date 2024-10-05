import { VStack, Box, keyframes, Image } from "@chakra-ui/react";
import Ibad from "../assets/Courses Imgs/ibad.jpg";

const crazyAnimateBox = keyframes`
  0%, 100% {  
    border-radius: 50%;
  }
  20% { 
    border-radius: 50% 40% 60% 40%;
    // border-width: 4px;
  }
  40% { 
    border-radius: 40% 60% 40% 60%;
    // border-width: 6px;
  }
  60% { 
    border-radius: 50% 30% 50% 30%;
    // border-width: 8px;
  }
  80% { 
    border-radius: 40% 50% 40% 50%;
  }
`;

function HomeImg() {
  return (
    <Image
      boxShadow="2xl"
      border="1px solid"
      animation={`${crazyAnimateBox} 12s ease-in-out infinite`}
      w="14rem"
      h="14rem"
      src={Ibad}
      objectFit="cover"
    />
  );
}

export default HomeImg;
