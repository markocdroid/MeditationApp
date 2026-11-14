import React, { useState, useEffect } from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, FONT, SIZES } from "../../constants";
import DailyMeditation from "../DailyMeditation/DailyMeditation";
import { useFocusEffect } from "expo-router";
import ScreenHeaderBtn from "../ScreenHeaderBtn/ScreenHeaderBtn";
import styles from "./Favourites.style";

const Favourites = () => {

    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadFavorites = async () => {
        try {
            const storedFavorites = await AsyncStorage.getItem("favorites");
            const favoritesArray = storedFavorites ? JSON.parse(storedFavorites) : [];
            setFavorites(favoritesArray);
        } catch (error) {
            console.error("Error loading favorites:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            loadFavorites();
        }, [])
    );

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScreenHeaderBtn />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    {isLoading ? (
                        <ActivityIndicator size="large" color={COLORS.primary} />
                    ) : favorites.length === 0 ? (
                        <Text style={styles.headerTitle}>No favorite items found.</Text>
                    ) : (
                        <>
                            <Text style={styles.sectionTitle}>My Favourite Exercises</Text>
                            <DailyMeditation meditations={favorites} />
                        </>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Favourites;