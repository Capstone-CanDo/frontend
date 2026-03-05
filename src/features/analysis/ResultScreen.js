import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

export default function ResultScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>

        {/* 뒤로가기 */}
        <Text style={styles.backButton}>←</Text>

        {/* ===== 분석 결과 카드 ===== */}
        <View style={styles.resultCard}>
          <Text style={styles.resultTextDanger}>
            AI가 분석한 결과, 위험해요
          </Text>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.primaryButtonDanger}>
            <Text style={styles.buttonText}>이 사이트 나가기</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.buttonText}>계속 진행하기</Text>
          </TouchableOpacity>
        </View>

        {/* ===== 리다이렉션 로그 카드 ===== */}
        <View style={styles.logCard}>
          <Text style={styles.cardTitle}>리다이렉션 로그</Text>
        </View>

        {/* ===== 추가 정보 카드 ===== */}
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>상세 분석 정보</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  backButton: {
    fontSize: 22,
    marginLeft: 24,
    marginTop: 10,
  },

  resultCard: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#F3F3F8',
    borderRadius: 20,
    padding: 20,
    marginTop: 30,
  },

  resultTextDanger: {
    fontSize: 18,
    textAlign: 'center',
    color: '#EE253C',
    fontWeight: '500',
  },

  divider: {
    height: 1,
    backgroundColor: '#8C8C8C',
    marginVertical: 15,
  },

  primaryButtonDanger: {
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EE253C',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },

  secondaryButton: {
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#5D5A88',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  buttonText: {
    fontSize: 14,
    color: '#000',
  },

  logCard: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#F3F3F8',
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    height: 208,
  },

  infoCard: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#F3F3F8',
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    height: 320,
  },

  cardTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
    color: '#323232',
  },
});