import {
    View,
    Text
} from "react-native";
import styles from "./Welcome.style";

const Welcome = ({ userDetails }) => {
    console.log("userDetails", userDetails?.userName);
    return (
        <>
            <View>
                <View style={styles.container} testID="styles.container">
                    <Text style={styles.userName}>Hello {userDetails?.userName}!</Text>
                    <Text style={styles.welcomeMessage}>Find your perfect meditation</Text>
                </View>
            </View>
        </>
    );
};

export default Welcome;