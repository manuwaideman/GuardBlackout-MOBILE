<h1 align="center">Guard Blackout 📱⚡</h1>

<p align="center">
App React Native (Expo) – Registro de Falta de Energia<br>
FIAP • 3ES 2025 – Trabalho da disciplina <strong>Mobile</strong>
</p>

<p align="center">
Manoella Herrerias Waideman – rm98906 • Felipe Capriotti da Silva Santos – rm98460 • Victor Hugo Andrade – rm598460
</p>

---

## 🚀 Visão Geral

O **Guard Blackout** permite que qualquer morador registre, no próprio celular e sem internet, episódios de interrupção de energia provocados por desastres naturais (chuva, ventos, deslizamentos).  
Os dados ficam salvos em **AsyncStorage** e podem ser consultados offline ou enviados posteriormente a órgãos municipais.

---

## ✨ Funcionalidades Entregues

| Critério da Rubrica | Implementação |
|---------------------|--------------|
| **5 telas mínimas** | Panorama • Local Atingido • Tempo de Interrupção • Prejuízos Causados • Recomendações |
| Fluxo de **cadastro + listagem** | `Location → Duration → Losses → Save → Overview` |
| **Persistência** offline | Wrapper `eventStorage.ts` usando `@react-native-async-storage/async-storage` |
| **Navegação** clara | `@react-navigation/native` + Bottom Tabs |
| **Qualidade de código** | ESLint 8 + Prettier configurados (0 errors) |

Extras  
- **Swipe-to-delete** na lista com `react-native-gesture-handler`  
- Telas estilizadas somente com **StyleSheet** (sem inline-style literal)  

---

## 📸 Evidências
Os prints estão em evidencias-mobile.

---

## 🗂️ Estrutura

GuardBlackoutApp/
├─ src/
│ ├─ navigation/ # RootNavigator, Tabs
│ ├─ screens/ # Overview, Location, Duration, Losses, Tips
│ ├─ storage/ # eventStorage.ts
│ └─ types/ # PowerOutage.ts
├─ evidencias-mobile/ # prints exigidos (PNG)
├─ App.tsx
├─ .eslintrc.js · .gitignore
└─ package.json

---

## ▶️ Como Rodar

Requisitos: **Node ≥ 20** • **Expo CLI**  
```bash
git clone https://github.com/SEUUSER/GuardBlackout-GS.git
cd GuardBlackoutApp
npm install          # instala dependências
npm start            # expo start
Abra o Expo Go no celular → escaneie o QR.

Navegue pelas 5 abas.

Cadastre um evento completo e veja-o listado em Panorama.

Deslize para a esquerda para excluir.
