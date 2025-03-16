import { Pressable, Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "../styles/auth.styles";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Abrar Ali</Text>

      <TouchableOpacity onPress={() => alert("Hello")}>
        <Text>Click Me</Text>
      </TouchableOpacity>
      <Pressable onPress={() => alert("Hello")}>
        <Text>Click Me</Text>
      </Pressable>
      <Image source={require("../assets/images/icon.png")}
      style={{width: 200, height: 200}}
      />
       
    </View>
  );
}
