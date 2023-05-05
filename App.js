import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [inputMessage, setInputMessage] = useState("")

  const handleButtonClick = () => {
    console.log(inputMessage)
    fetch("https://api.openai.com/v1/completions",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
      },
      body: JSON.stringify({
        "prompt": inputMessage,
        "model": "text-davinci-003"
      })
    }).then((response) => response.json()).then((data) => {
        console.log(data)
    })
  }

  const handleTextInput = (text) => {
    setInputMessage(text)
    console.log(text)
  }

  // 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
  return (
    <View style={styles.container}>
      <View style={{flex:1, justifyContent:"center"}}>
        <Text>Results to be shown here</Text>
      </View>
      <View style = {{flexDirection:"row"}}>
        <View style={{flex:1, marginLeft:10, marginBottom:20}}>
          <TextInput placeholder='Please enter your question' onChangeText={handleTextInput}/>
        </View>
        <TouchableOpacity onPress={handleButtonClick}>
          <View style = {{backgroundColor:"blue", padding:5, marginRight:10,marginBottom:20}}>
            <Text>Send</Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
