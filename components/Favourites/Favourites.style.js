import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: COLORS.darkBackground,
    },
    container: {
        marginTop: SIZES.xLarge,
        padding: SIZES.medium,
    },
    sectionTitle: {
        textAlign: "center",
        color: "#FF4500",
        fontWeight: "bold",
    },
    headerTitle: {
        fontSize: SIZES.large,
        fontFamily: FONT.medium,
        color: COLORS.primary,
        textAlign: "center",
        marginTop: 20,
    },
});

export default styles;
