import * as React from "react";
import { Button, Text } from "react-native";
import { Drawer } from "react-native-drawer-layout";

export default function DrawerExample() {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return <Text>Drawer content</Text>;
      }}
    >
      <Button
        onPress={() => {
          setOpen((prevOpen) => !prevOpen);
          console.log(open);
        }}
        title={`${open ? "close" : "open"} drawer`}
      />
    </Drawer>
  );
}
