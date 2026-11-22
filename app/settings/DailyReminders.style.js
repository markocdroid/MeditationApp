import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    reminderContainer: {
        backgroundColor: COLORS.primary, borderRadius: SIZES.small, padding: SIZES.small, marginVertical: SIZES.small
    },
    description: { color: COLORS.lightWhite, fontWeight: "bold" },
    date: { color: COLORS.lightText, fontSize: SIZES.small },
    input: { borderColor: COLORS.primary, borderWidth: 1, padding: SIZES.small, marginVertical: SIZES.small },
    selected: { fontSize: SIZES.medium, marginVertical: SIZES.small, color: COLORS.primary },
    button: { backgroundColor: COLORS.primary, padding: SIZES.medium, borderRadius: SIZES.medium, alignItems: "center" },
    buttonText: { color: COLORS.lightWhite, fontWeight: "bold" },
    deleteButton: { marginTop: SIZES.small, alignSelf: "flex-end" },
    deleteText: { color: "#FE7654", fontWeight: "bold" },
    reminderHeader: { fontSize: SIZES.large, fontWeight: "bold", color: COLORS.primary, marginVertical: SIZES.medium },
});

export default styles;
