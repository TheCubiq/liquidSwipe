import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import TopRefresh from "./src/components/topRefresh";

export default function App() {
  return (
    <>
      <StatusBar
        // translucent={true}
        // style="auto"
        hidden
      />
      <View style={styles.container}>
        <TopRefresh>
          {[...Array(100)].map((_, i) => (
            <Text
              style={{
                padding: 10,
                margin: 10,
                fontSize: 50,
                color: "#ffffff",
                borderRadius: 10,
                backgroundColor:
                  // `rgb(
                  //   ${Math.floor(Math.random() * 256)},
                  //   ${Math.floor(Math.random() * 256)},
                  //   ${Math.floor(Math.random() * 256)}
                  //   )`,

                  // `${i % 2 === 0 ? "red" : "blue"}`,
                  
                  // rainbow pattern
                  `hsl(
                    ${Math.floor(i * 10)},
                    75%, 50%)`,

                textAlign: "center",
                textAlignVertical: "center",
              }}
              key={i}
            >
              {i + 1}
            </Text>
          ))}
        </TopRefresh>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
