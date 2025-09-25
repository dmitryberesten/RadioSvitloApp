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

import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "http://www.radio-svitlo.com" }}
        style={styles.webview}
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
});
