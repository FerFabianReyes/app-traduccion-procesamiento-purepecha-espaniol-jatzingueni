import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Platform, ScrollView, TouchableOpacity, Dimensions, Linking, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Background from '../components/backgronds/BackgroundPrincipal';
import HeaderPrincipal from '../components/common/HeaderPrincipal';
import SlidingMenu from '../components/common/SlidingMenu';
import { pagPrincipalStyles } from '../styles/pagPrincipalStyles';
import { useAppLogic } from '../hooks/useAppLogic';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../styles/colors';

const PagPrincipalScreen = () => {
  const {
    isMenuVisible,
    handleMenuPress,
    closeMenu,
  } = useAppLogic();

  const navigation = useNavigation();
  const { width } = Dimensions.get('window');
  const [currentDonador, setCurrentDonador] = useState(0);

  const donadores = [
    { id: 1, nombre: 'Aaron Uriel' },
    { id: 2, nombre: 'Roy Alba' },
    { id: 3, nombre: 'Poncho Morales' },
    { id: 4, nombre: 'Beto Ramos' },
    { id: 5, nombre: 'Uriel Felipe' },
    { id: 6, nombre: 'Fer Fabian' },
    { id: 7, nombre: 'Brandon Piñon' },

  ];

  // Carrusel automático de donadores
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDonador((prev) => (prev + 1) % donadores.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [donadores.length]);

  const handleDonationPress = () => {
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc...';
    Linking.openURL(googleFormUrl).catch(() => {
      console.log('No se pudo abrir el formulario de donaciones');
    });
  };

  const Container = Platform.OS === 'web' ? View : SafeAreaView;

  return (
    <Background>
      <Container style={pagPrincipalStyles.container}>
        <View style={pagPrincipalStyles.headerWrapper}>
          <HeaderPrincipal onMenuPress={handleMenuPress} />
          
          {/* Carrusel de donadores */}
          <View style={pagPrincipalStyles.carouselContainer}>
            <Text style={pagPrincipalStyles.carouselLabel}>Donadores Recientes</Text>
            <View style={pagPrincipalStyles.carouselContent}>
              <TouchableOpacity 
                style={pagPrincipalStyles.carouselArrow}
                onPress={() => setCurrentDonador((prev) => (prev - 1 + donadores.length) % donadores.length)}
              >
                <Ionicons name="chevron-back" size={20} color={COLORS.third} />
              </TouchableOpacity>
              
              <View style={pagPrincipalStyles.donadorDisplay}>
                <Ionicons 
                  name="checkmark-circle" 
                  size={24} 
                  color={COLORS.secondaryClear}
                  style={{ marginRight: 10 }}
                />
                <Text style={pagPrincipalStyles.donadorDisplayName}>
                  {donadores[currentDonador].nombre}
                </Text>
              </View>
              
              <TouchableOpacity 
                style={pagPrincipalStyles.carouselArrow}
                onPress={() => setCurrentDonador((prev) => (prev + 1) % donadores.length)}
              >
                <Ionicons name="chevron-forward" size={20} color={COLORS.third} />
              </TouchableOpacity>
            </View>

            {/* Indicadores de posición */}
            <View style={pagPrincipalStyles.dotsContainer}>
              {donadores.map((_, index) => (
                <View
                  key={index}
                  style={[
                    pagPrincipalStyles.dot,
                    index === currentDonador && pagPrincipalStyles.activeDot,
                  ]}
                />
              ))}
            </View>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={true}
          keyboardShouldPersistTaps="handled"
        >

          {/* Misión y Visión */}
          <View style={pagPrincipalStyles.missionContainer}>
            <View style={pagPrincipalStyles.missionCard}>
              <Ionicons 
                name="target-outline" 
                size={32} 
                color={COLORS.third} 
                style={pagPrincipalStyles.iconCard}
              />
              <Text style={pagPrincipalStyles.cardTitle}>Misión</Text>
              <Text style={pagPrincipalStyles.cardText}>
                Preservar, fortalecer y difundir las lenguas minoritarias mediante el uso de la tecnología, creando herramientas abiertas de traducción y documentación que promuevan la diversidad lingüística, cultural y de pensamiento. Buscamos acercar el conocimiento y la comunicación entre comunidades, fomentando la inclusión y el respeto hacia las lenguas originarias.
              </Text>
            </View>

            <View style={pagPrincipalStyles.missionCard}>
              <Ionicons 
                name="eye-outline" 
                size={32} 
                color={COLORS.third} 
                style={pagPrincipalStyles.iconCard}
              />
              <Text style={pagPrincipalStyles.cardTitle}>Visión</Text>
              <Text style={pagPrincipalStyles.cardText}>
               Convertirnos en una fundación líder en tecnología lingüística para lenguas minoritarias, reconocida por su compromiso ético, su modelo abierto y su impacto cultural. Aspiramos a construir una red global de colaboración que impulse la revitalización de las lenguas en peligro y el acceso equitativo a la información en cualquier idioma.
              </Text>
            </View>
          </View>

          {/* Botón de Donaciones */}
          <View style={pagPrincipalStyles.donationSection}>
            <Text style={pagPrincipalStyles.sectionTitle}>Apoya Nuestro Proyecto</Text>
            <Text style={pagPrincipalStyles.sectionDescription}>
              Tu donación nos ayuda a mejorar y mantener esta herramienta para la comunidad.
            </Text>
            <TouchableOpacity 
              style={pagPrincipalStyles.donationButton}
              onPress={handleDonationPress}
            >
              <Ionicons 
                name="heart" 
                size={24} 
                color="white" 
                style={{ marginRight: 10 }}
              />
              <Text style={pagPrincipalStyles.donationButtonText}>Realizar Donación</Text>
            </TouchableOpacity>
          </View>

          {/* Anuncio de Próximas Clases */}
          <View style={pagPrincipalStyles.announcementSection}>
            <View style={pagPrincipalStyles.announcementCard}>
              <Ionicons 
                name="megaphone-outline" 
                size={40} 
                color={COLORS.secondaryClear}
                style={{ marginBottom: 15 }}
              />
              <Text style={pagPrincipalStyles.announcementTitle}>Próximamente</Text>
              <Text style={pagPrincipalStyles.announcementText}>
                Se darán clases en línea de Purépecha
              </Text>
              <Text style={pagPrincipalStyles.announcementSubtext}>
                Mantente atento para más información
              </Text>
            </View>
          </View>

          {/* Botón para ir al Traductor */}
          <View style={pagPrincipalStyles.ctaSection}>
            <TouchableOpacity 
              style={pagPrincipalStyles.ctaButton}
              onPress={() => navigation.navigate('Translator')}
            >
              <Ionicons 
                name="language-outline" 
                size={24} 
                color="white" 
                style={{ marginRight: 10 }}
              />
              <Text style={pagPrincipalStyles.ctaButtonText}>Ir al Traductor</Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View style={pagPrincipalStyles.footer}>
            <Text style={pagPrincipalStyles.footerText}>© 2025 J'atzingueni. Todos los derechos reservados.</Text>
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

export default PagPrincipalScreen;