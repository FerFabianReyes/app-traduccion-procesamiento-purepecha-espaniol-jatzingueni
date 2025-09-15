Crear proyecto en react
Se necesita node y npm
npm install -g @expo/cli

npx create-expo-app@latest nombre --template blank

npx expo install react-dom react-native-web @expo/metro-runtime
es para web ya que --template blank no lo agrega

npx expo start

Problemas con Expo go y wsl:
sudo npm install -g @expo/ngrok@^4.1.0
npx expo start --tunnel
