import { Button, Text, View } from "react-native";
import { appStyles } from "../../../styles/app.styles";
import { ProgrammerImg } from "../../outros/image/ProgrammerImg";
import React from "react";

export function FirstComponent() {
  const [counter, setCounter] = React.useState(0);
  const [sum, setSum] = React.useState(0);
  const [mult, setMult] = React.useState(0);

  React.useEffect(() => {
    setSum((prevState) => prevState + counter);
    setMult(counter * counter);
  }, [counter]);

  const buttonPressed = () => {
    setCounter(prevState => prevState + 1);
  };

  return (
    <View style={appStyles.card}>
      <View style={appStyles.imgView}>
        <ProgrammerImg largura={"100%"} altura={"100%"} />
      </View>
      <Button title={"Press"} onPress={buttonPressed} />
      <View style={{ flex: 1, flexDirection: "row", marginTop: 32 }}>
        <View style={appStyles.child}>
          <Text style={appStyles.text}>
            {sum - counter} + {counter} = {sum}
          </Text>
        </View>
        <View style={appStyles.child}>
          <Text style={appStyles.text}>
            {counter} x {counter} = {mult}
          </Text>
        </View>
      </View>
    </View>
  );
}
