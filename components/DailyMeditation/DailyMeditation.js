import React from "react";
import { useRouter } from "expo-router";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ActivityIndicator,
} from "react-native";

import { COLORS } from "../../constants/theme";
import useFetch from "../../hook/useFetch";
import styles from "./DailyMeditation.style";

const DailyMeditation = ({ meditations }) => {
    const router = useRouter();
    const { isLoading, error, bestMeditations } = useFetch("search", {
        query: "",
        num_pages: "1",
    });
    const handleNavigate = (id) => {
        router.push(`/meditation-details/${id}`);
    };
    const data = meditations || bestMeditations;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Daily Meditation</Text>
            </View>
            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    data?.map((meditation) => (
                        <TouchableOpacity
                            key={`meditation-${meditation.id}`}
                            style={styles.cardContainer}
                            onPress={() => handleNavigate(meditation.id)}
                        >
                            <View style={styles.logoContainer}>
                                <Image
                                    source={{ uri: meditation.image }}
                                    resizeMode="cover"
                                    style={styles.logoImage}
                                />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.meditationName} numberOfLines={1}>
                                    {meditation.title}
                                </Text>
                                <Text style={styles.meditationDetail}>
                                    {meditation.target}
                                </Text>
                                <Text style={styles.meditationDetail}>
                                    {meditation.duration}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))
                )}
            </View>
        </View>
    );
};

export default DailyMeditation;
