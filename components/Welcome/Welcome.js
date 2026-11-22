import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants/theme";
import styles from "./Welcome.style";

const getThemeStyles = (isDark) => ({
  userName: {
    color: isDark ? COLORS.lightWhite : COLORS.darkText,
  },
  welcomeMessage: {
    color: isDark ? COLORS.lightWhite : COLORS.darkText,
  }
});
const Welcome = ({ userDetails, isDarkMode: isDark }) => {

  const themeStyles = getThemeStyles(isDark);
  return (
    <View>
      <View style={[styles.container]}>
        <Text style={[styles.userName, themeStyles.userName]}>
          Hello {userDetails?.userName}!
        </Text>
        <Text style={[styles.welcomeMessage, themeStyles.welcomeMessage]}>
          Find your perfect meditation
        </Text>
      </View>
    </View>
  );
};
export default Welcome;