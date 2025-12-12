import React from 'react';
import { SafeAreaView, View, Text, Platform, ScrollView } from 'react-native';
import Background from '../components/backgronds/BackgroundAbout';
import Header from '../components/common/Header';
import SlidingMenu from '../components/common/SlidingMenu';
import { aboutScreenStyles } from '../styles/aboutScreenStyles';
import { aboutText } from '../components/text/aboutText';
import { participantsText } from '../components/text/participantsText';
import { repositoryText } from '../components/text/repositoryText';
import { useAppLogic } from '../hooks/useAppLogic';
import Markdown from 'react-native-markdown-display';

const AboutScreen = () => {
    const {
        isMenuVisible,
        handleMenuPress,
        closeMenu,
    } = useAppLogic();

    const Container = Platform.OS === 'web' ? View : SafeAreaView;

    return (
        <Background>
            <Container style={aboutScreenStyles.container}>
                <Header
                    title="J'atzingueni"
                    onMenuPress={handleMenuPress}
                />
                <Text style={aboutScreenStyles.subtitle}>Traductor Purépecha - Español</Text>
                <ScrollView
                    style={aboutScreenStyles.content}
                    contentContainerStyle={aboutScreenStyles.contentContainer}
                >
                    <View style={aboutScreenStyles.section}>
                        <Text style={aboutScreenStyles.sectionTitle}>Sobre la aplicación</Text>
                        <ScrollView>
                            <Markdown style={{
                                text: aboutScreenStyles.text,
                                strong: { fontWeight: 'bold', color: aboutScreenStyles.text.color }
                            }}>
                                {`${aboutText}\n\n${participantsText}\n\n${repositoryText}`}
                            </Markdown>
                        </ScrollView>
                    </View>
                </ScrollView>

                <SlidingMenu
                    isVisible={isMenuVisible}
                    onClose={closeMenu}
                />
            </Container>
        </Background>
    );
};

export default AboutScreen;