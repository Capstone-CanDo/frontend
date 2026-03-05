import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableOpacity, // ✅ 추가
  Text,             // ✅ 추가
  SafeAreaView,
  ActivityIndicator,
  Switch,
} from 'react-native';
import { WebView } from 'react-native-webview';
import JsAblealert from './JsAblealert';
import TabMenu from './TabMenu';

export default function BrowserScreen() {
  const [url, setUrl] = useState('https://www.kmooc.kr');
  const [inputUrl, setInputUrl] = useState('https://www.kmooc.kr');
  const [modalVisible, setModalVisible] = useState(false);
  const [jsEnabled, setJsEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState('번역');

  const handleGo = () => {
    let formattedUrl = inputUrl.trim();
    if (formattedUrl !== '') {
      if (!formattedUrl.startsWith('http')) {
        formattedUrl = 'https://' + formattedUrl;
      }
      setUrl(formattedUrl);
      Keyboard.dismiss();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          value={inputUrl}
          onChangeText={setInputUrl}
          placeholder="URL 입력"
          onSubmitEditing={handleGo}
        />
        
        {/* 토글 버튼 디자인 적용 */}
       <View style={styles.switchContainer}>
    
    <Switch
      trackColor={{ false: '#D9D9D9', true: '#7B61FF' }} // 꺼졌을 때 회색, 켜졌을 때 보라색
      thumbColor={'#FFFFFF'} // 동그란 버튼은 흰색
      onValueChange={() => setJsEnabled(!jsEnabled)} // 누를 때마다 상태 반전
      value={jsEnabled} // 현재 상태 연결
    />
  </View>
      </View>

      <View style={styles.webviewContainer}>
        <WebView 
          key={jsEnabled ? 'enabled' : 'disabled'} // ✅ 설정 변경 시 웹뷰 리로드 강제
          source={{ uri: url }} 
          style={styles.webview}
          javaScriptEnabled={jsEnabled}
          startInLoadingState={true}
          renderLoading={() => (
            <ActivityIndicator size="large" style={styles.loader} />
          )}
        />
      </View>
          <TabMenu 
      activeTab={activeTab} 
      onTabPress={(tab) => setActiveTab(tab)} 
    />
      <JsAblealert
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={() => {
          setJsEnabled(false);
          setModalVisible(false);
        }}
        
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#eee',
    alignItems: 'space-between',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    textAlign: 'center',
  },
  webviewContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '42%',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    marginRight: 5,
    color: '#333',
    fontWeight: '600',
  },
});