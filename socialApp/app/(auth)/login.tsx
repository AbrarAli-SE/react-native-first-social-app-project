import { View, Text, Image, TouchableOpacity } from 'react-native'

import React from 'react'
import { styles } from '@/styles/auth.styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants/theme';

export default function login() {
    return (
        <View style={styles.container}>
            {/* Brand Section */}
            <View style={styles.brandSection}>
                <View style={styles.logoContainer}>
                    <Ionicons name="leaf" size={32} color={COLORS.primary} />
                </View>
                <Text style={styles.appName}>Social App</Text>
                <Text style={styles.tagline}>Code to Practice for Perfaction</Text>
            </View>

            {/* Illustration Section */}
            <View style={styles.illustrationContainer}>
                <Image
                    source={require("../../assets/images/loginscreenimage.png")}
                    style={styles.illustration}
                    resizeMode="cover"
                />
            </View>

            {/* Login Section */}
            <View style={styles.loginSection}>
                <TouchableOpacity
                    style={styles.googleButton}
                    onPress={() => console.log("Continue with Google")}
                    activeOpacity={0.9}>
                    <View
                        style={styles.googleIconContainer}>
                        <Ionicons name="logo-google" size={20} color={COLORS.surface} />
                    </View>
                    <Text style={styles.googleButtonText}>Continue with Google</Text>
                </TouchableOpacity>
                <Text style={styles.termsText}>
                    By continuing, you agree to our Terms of Service and Privacy Policy
                </Text>

            </View>

        </View>

    );
}