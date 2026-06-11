/**
 * Створити новий функціональний компонент на React Native для додатка Expo.
 * Компонент повинен відображати веб-сайт у компоненті WebView.
 * Посилання на сайт, який потрібно завантажити: "http://www.radio-svitlo.com".
 *
 * Увага до деталей:
 * 1. Імпортувати необхідні бібліотеки: React, StyleSheet, View.
 * 2. Імпортувати WebView з 'react-native-webview'.
 * 3. Назвати компонент "App".
 * 4. Загорнути WebView у компонент <View> з властивістю flex: 1, щоб заповнити весь екран.
 * 5. Для WebView встановити властивість source з посиланням на ваш сайт.
 * 6. Створити об'єкт StyleSheet для стилізації компонентів.
 * 7. Експортувати компонент App за замовчуванням.
 */

import React, { useEffect } from "react";
import { StyleSheet, View, ActivityIndicator, Alert } from "react-native";
import { WebView } from "react-native-webview";
import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";

export default function App() {
  useEffect(() => {
    (async () => {
      const { status } = await requestTrackingPermissionsAsync();
      if (status !== "granted") {
        console.log("Tracking permission not granted");
      }
    })();
  }, []);
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "https://www.radio-svitlo.com" }}
        style={styles.webview}
        startInLoadingState={true}
        renderLoading={() => (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          Alert.alert("Помилка завантаження сайту", nativeEvent.description);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  loading: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    zIndex: 10,
  },
});
