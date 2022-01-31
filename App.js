import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [num1, setNumber1] = useState("");
  const [num2, setNumber2] = useState("");
  const [total, setTotal] = useState("");
  const [data, setData] = useState([]);

  const Add = () => {
    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
    let sum = n1 + n2;
    let strSum = num1 + " + " + num2 + " = " + sum;
    setTotal(sum);
    setData([...data, strSum]);

  };
  const subtract = () => {
    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
    let sum = n1 - n2;
    let strSum = num1 + " - " + num2 + " = " + sum;
    setTotal(sum);
    setData([...data, strSum]);

  };
  return (
    <View style={styles.container}>
      <Text>Result: {total}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter the first number"
        keyboardType={"numeric"}
        onChangeText={(num1) => setNumber1(num1)}
        value={num1}
      ></TextInput>

      <TextInput
        style={styles.input}
        placeholder="Enter the second number"
        keyboardType={"numeric"}
        onChangeText={(num2) => setNumber2(num2)}
        value={num2}
      ></TextInput>

      <View style={styles.buttons}>
        <Button title="+" onPress={Add}></Button>
        <Button title="-" onPress={subtract}></Button>
      </View>

      <View style={styles.list}>
        <FlatList data={data} renderItem={({ item }) => <Text>{item}</Text>} 
         keyExtractor={(item, index) => index.toString()}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 350,
    borderColor: "red",
    borderWidth: 2,
    textAlign: "center",
    margin: 6,
    height: 40,
  },
  buttons: {
    flexDirection: "row",
    width: "20%",
    justifyContent: "space-evenly",
  },
  list: {
    alignItems: "center",
    height: 300,
  },
});