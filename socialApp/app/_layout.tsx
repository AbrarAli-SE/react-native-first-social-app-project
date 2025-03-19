import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InitialLayout from "@/components/InitialLayout"; // Adjust the import path as necessary
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider";

export default function RootLayout() {
  return (
    <ClerkAndConvexProvider>


      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
          <InitialLayout />
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkAndConvexProvider>
  );

}
