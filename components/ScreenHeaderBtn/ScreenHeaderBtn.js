import { Image, TouchableOpacity } from "react-native";
import { View } from "react-native"; 
import icons from "../../constants/icons";
import { useRouter } from "expo-router";
import styles from "./ScreenHeaderBtn.style";

const ScreenHeaderBtn = ({ detailPage, handleShare }) => {
    console.log(detailPage);

    const router = useRouter();
    return (
        <>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.btnContainer} onPress={() => router.push("/home")}>
                    <Image source={icons.menu} style={styles.image} />
                </TouchableOpacity>
                {detailPage ?
                    <>
                        <TouchableOpacity style={styles.btnContainer} onPress={handleShare}>
                            <Image source={icons.share} style={styles.image} />
                        </TouchableOpacity>
                    </>
                    :
                    <>
                        <TouchableOpacity style={styles.btnContainer} onPress={() => router.push("/settings")}>
                            <Image source={icons.settings} style={styles.image} />
                        </TouchableOpacity>
                    </>
                }
            </View>
        </>
    );
};


export default ScreenHeaderBtn;