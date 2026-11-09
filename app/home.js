import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, SIZES } from "../constants/theme";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";

const Home = () => {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        loadUserDetails();
    }, []);
    const loadUserDetails = async () => {
        const user = await AsyncStorage.getItem("userDetails");
        console.log("user", user);
        setUserDetails(user);
    };

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
                <ScreenHeaderBtn />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                        style={{
                            flex: 1,
                            padding: SIZES.medium,
                        }}
                        testID="screensDisplay"
                    >
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};
export default Home;