import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TabMenu() {
  const [activeTab, setActiveTab] = useState('번역'); // 현재 선택된 탭 상태

  const tabs = ['번역', '요약', '위험문구'];

  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[
            styles.tabItem,
            activeTab === tab && styles.activeTabItem // 선택된 탭일 때만 언더바 스타일 적용
          ]}
          onPress={() => setActiveTab(tab)}
        >
          <Text style={[
            styles.tabText,
            activeTab === tab && styles.activeTabText // 선택된 탭일 때 글자색 변경
          ]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE', // 전체 하단 얇은 구분선
    backgroundColor: '#fff',
  },
  tabItem: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent', // 기본은 투명한 선
  },
  activeTabItem: {
    borderBottomColor: '#7B61FF', // 선택 시 보라색 언더바 표시
  },
  tabText: {
    fontSize: 16,
    color: '#999',
  },
  activeTabText: {
    color: '#333',
    fontWeight: 'bold',
  },
});