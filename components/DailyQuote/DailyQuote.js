import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from "./DailyQuote.style";

const DailyQuote = () => {

    const [quote, setQuote] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchQuote = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://dummyjson.com/quotes/random');
            if (response.ok) {
                const data = await response.json();
                setQuote(data.quote);
            } else {
                console.error('Error fetching quote:', response.status);
            }
        } catch (error) {
            console.error('Error fetching quote:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="small" color="#0000ff" />
            ) : (
                <>
                    <Text style={styles.quoteText}>"{quote}"</Text>
                </>
            )}
        </View>
    )
}

export default DailyQuote;