import { VStack, Box, keyframes, Image } from "@chakra-ui/react";

// Define keyframes for a more dynamic border-radius animation
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
      src="https://scontent.flhe13-1.fna.fbcdn.net/v/t1.6435-9/187845547_2573468436288370_8887665529915835858_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeH7UUTxxROOR53Ezx85tEZ0R0Kza37TSyxHQrNrftNLLNn8Smi8H14x87Q6cnsxAuaVtrihBbhSmxUyi5Lpdrn5&_nc_ohc=7OiED1xXG3AQ7kNvgGN3RB5&_nc_ht=scontent.flhe13-1.fna&oh=00_AYCtZ8uNqhOz2an9ez6ZJ3LTF5s78zMWqDwKVakpnnNFGw&oe=66F7E925"
      objectFit="cover"
    />
  );
}

export default HomeImg;
