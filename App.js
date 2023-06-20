import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, TouchableOpacity, View, Text, FlatList, Alert, I18nManager } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { GiftedChat } from 'react-native-gifted-chat';
import translations from './translations';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [inputText, setInputText] = useState('');
  const [outputMessage, setOutputMessage] = useState(translations['Results to be shown here']);
  const [predefinedQuestions, setPredefinedQuestions] = useState([
    'How to setup Out of Office in Outlook ?',
    'How do I access my Teams meeting recording ?',
    'My OneDrive Storage is full what do I do ?',
    'How to access shared calendar ?'
  ]);
  const [isDutch, setIsDutch] = useState(false);

  useEffect(() => {
    if (predefinedQuestions.length > 0) {
      handlePredefinedQuestionClick(predefinedQuestions[0]);
    }
  }, []);

  const handleButtonClick = () => {
    console.log(inputMessage);
    const userMessage = {
      _id: Math.random().toString(36).substring(7),
      text: inputMessage,
      createdAt: new Date(),
      user: { _id: 1 },
    };

    setMessages((previousMessages) => GiftedChat.append(previousMessages, [userMessage]));

    fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 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',
      },
      body: JSON.stringify({
        messages: [
          { role: 'system', content: '/start' },
          { role: 'user', content: inputMessage },
        ],
        model: 'gpt-3.5-turbo',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.choices[0].message.content);
        setOutputMessage(data.choices[0].message.content.trim());
        const botMessage = {
          _id: Math.random().toString(36).substring(7),
          text: data.choices[0].message.content.trim(),
          createdAt: new Date(),
          user: { _id: 2, name: 'Wolters Kluwer' },
        };

        setMessages((previousMessages) => GiftedChat.append(previousMessages, [botMessage]));
      });

    setInputText('');
  };

  const handleTextInput = (text) => {
    setInputMessage(text);
    setInputText(text);
    console.log(text);
  };

  const handlePredefinedQuestionClick = (question) => {
    setInputMessage(question);
    setInputText(question);
    handleButtonClick();
  };

  const toggleLanguage = () => {
    I18nManager.forceRTL(isDutch); // Set right-to-left layout for RTL languages like Dutch
    setIsDutch(!isDutch);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 10 }}>
        <Text style={{ marginBottom: 10, fontSize: 12, fontWeight: 'bold', marginTop: 110, color:'#005C92', textAlign:'center' }}>
          {isDutch ? translations['Protect your privacy: Avoid sharing personal or company-specific data while using this chatbot !'] : 'Protect your privacy: Avoid sharing personal or company-specific data while using this chatbot !'}
        </Text>
        <Text style={{ marginBottom: 5, fontSize: 10, fontWeight: 'bold', textAlign:'center' }}>
          {isDutch ? translations['Please select a question or enter your own question below'] : 'Please select a question or enter your own question below'}
        </Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10, paddingTop: 20 }}>
        <FlatList
          data={predefinedQuestions}
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePredefinedQuestionClick(item)}>
              <Text style={{ color: '#007AC3', marginRight: 10, marginBottom: 3, backgroundColor:"#DADADA", textAlign:'center' }}>
                {isDutch ? translations[item] : item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <GiftedChat
          messages={messages}
          renderInputToolbar={() => {}}
          user={{ _id: 1 }}
          minInputToolbarHeight={0}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            marginBottom: 80,
            backgroundColor: '#DADADA',
            borderRadius: 10,
            borderColor: 'grey',
            borderWidth: 1,
            height: 60,
            marginRight: 10,
            justifyContent: 'center',
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <TextInput
            placeholder={isDutch ? translations['Please enter your question'] : 'Please enter your question'}
            onChangeText={handleTextInput}
            value={inputText}
          />
        </View>
        <TouchableOpacity onPress={handleButtonClick}>
          <View
            style={{
              backgroundColor: '#85BC20',
              padding: 5,
              marginRight: 10,
              marginBottom: 20,
              borderRadius: 100,
              width: 60,
              height: 60,
              justifyContent: 'center',
            }}
          >
            <MaterialIcons name='send' size={30} color='white' style={{ marginLeft: 10 }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleLanguage} style={{ position: 'absolute', top: -580, right: 10, zIndex: 1 }}>
    <View style={{ backgroundColor: '#007AC3', padding: 5, borderRadius: 100, width: 40, height: 40, justifyContent: 'center' }}>
      <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>{isDutch ? 'EN' : 'NL'}</Text>
    </View>
  </TouchableOpacity>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}
