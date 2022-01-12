import { Button, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

export default function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Button colorScheme="teal">ボタン</Button>
        <p>あああああああ</p>
      </ChakraProvider>
    </div>
  );
}
