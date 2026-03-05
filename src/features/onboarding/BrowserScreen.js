
/*import React from 'react';
import WebView from 'react-native-webview';

const Home = () => {
  return <WebView source={{uri: 'https://naver.com'}} />;
};

export default Home;*/
import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Keyboard,
} from 'react-native';
import { WebView } from 'react-native-webview';

export default function BrowserScreen() {
  const [url, setUrl] = useState('https://www.naver.com');
  const [inputUrl, setInputUrl] = useState('https://www.naver.com');

  const handleGo = () => {
    let formattedUrl = inputUrl;

    if (!formattedUrl.startsWith('http')) {
      formattedUrl = 'https://' + formattedUrl;
    }

    setUrl(formattedUrl);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      {/* 상단 URL 바 */}
      <View style={styles.urlBar}>
        <TextInput
          style={styles.input}
          value={inputUrl}
          onChangeText={setInputUrl}
          placeholder="URL을 입력하세요"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={handleGo}>
          <Text style={styles.buttonText}>이동</Text>
        </TouchableOpacity>
      </View>

      {/* 웹뷰 */}
      <WebView source={{ uri: url }} style={styles.webview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  urlBar: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
  },
  button: {
    marginLeft: 8,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  webview: {
    flex: 1,
  },
});
