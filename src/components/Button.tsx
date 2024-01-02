import { Box, Button } from "@chakra-ui/react";

interface Button {
  Title: string;
  type?: "submit" | "reset" | "button" | undefined;
}

// export default function ButtonComponent(props: Button) {
//   const { Title } = props;
//   return (
//     <Box>
//       <Button w={"100%"} colorScheme="whatsapp">
//         {Title}
//       </Button>
//     </Box>
//   );
// }

export default function ButtonComponent(props: Button) {
  return (
    <Box>
      <Button type={props.type} w={"100%"} colorScheme="whatsapp">
        {props.Title}
      </Button>
    </Box>
  );
}
