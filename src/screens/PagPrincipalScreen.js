import React from 'react';
import { SafeAreaView, View, Text, Platform, ScrollView, TouchableOpacity, Dimensions, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Background from '../components/backgronds/Background';
import Header from '../components/common/Header';
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

  const donadores = [
    { id: 1, nombre: 'María García' },
    { id: 2, nombre: 'Juan López' },
    { id: 3, nombre: 'Carlos Méndez' },
    { id: 4, nombre: 'Ana Martínez' },
    { id: 5, nombre: 'Roberto Silva' },
  ];

  const eventos = [
    { 
      id: 1, 
      titulo: 'Clase de Purépecha Nivel I',
      fecha: '15 de Enero, 2025',
      hora: '18:00 - 19:30',
      descripcion: 'Introducción al idioma purépecha'
    },
    { 
      id: 2, 
      titulo: 'Conversación Práctica',
      fecha: '22 de Enero, 2025',
      hora: '19:00 - 20:00',
      descripcion: 'Práctica de diálogos cotidianos'
    },
    { 
      id: 3, 
      titulo: 'Taller de Gramática',
      fecha: '29 de Enero, 2025',
      hora: '17:30 - 19:00',
      descripcion: 'Estructura gramatical del purépecha'
    },
  ];

  const handleDonationPress = () => {
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc...'; // Reemplaza con tu URL real
    Linking.openURL(googleFormUrl).catch(() => {
      console.log('No se pudo abrir el formulario de donaciones');
    });
  };

  const Container = Platform.OS === 'web' ? View : SafeAreaView;

  return (
    <Background>
      <Container style={pagPrincipalStyles.container}>
        <Header onMenuPress={handleMenuPress} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={true}
          keyboardShouldPersistTaps="handled"
        >
          {/* Hero Section */}
          <View style={pagPrincipalStyles.heroSection}>
            <Text style={pagPrincipalStyles.mainTitle}>J'atzingueni</Text>
            <Text style={pagPrincipalStyles.subtitle}>Traductor Purépecha - Español</Text>
          </View>

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
                Preservar y promover el idioma purépecha mediante herramientas tecnológicas accesibles, facilitando la comunicación y el aprendizaje para las comunidades indígenas.
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
                Ser la plataforma líder en traducción y educación del idioma purépecha, asegurando su continuidad y vitalidad para las futuras generaciones.
              </Text>
            </View>
          </View>

          {/* Botón de Donaciones */}
          <View style={pagPrincipalStyles.donationSection}>
            <Text style={pagPrincipalStyles.sectionTitle}>Apoya Nuestro Proyecto</Text>
            <Text style={pagPrincipalStyles.sectionDescription}>
              Tu donación nos ayuda a mejorar y mantener esta herramienta para la comunidad purépecha.
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

          {/* Donadores Recientes */}
          <View style={pagPrincipalStyles.donadoresSection}>
            <Text style={pagPrincipalStyles.sectionTitle}>Donadores Recientes</Text>
            <View style={pagPrincipalStyles.donadorsList}>
              {donadores.map((donador) => (
                <View key={donador.id} style={pagPrincipalStyles.donadorItem}>
                  <Ionicons 
                    name="checkmark-circle" 
                    size={20} 
                    color={COLORS.secondaryClear}
                  />
                  <Text style={pagPrincipalStyles.donadorName}>{donador.nombre}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Eventos y Clases */}
          <View style={pagPrincipalStyles.eventosSection}>
            <Text style={pagPrincipalStyles.sectionTitle}>Próximas Clases y Eventos</Text>
            <View style={pagPrincipalStyles.eventosList}>
              {eventos.map((evento) => (
                <View key={evento.id} style={pagPrincipalStyles.eventoCard}>
                  <View style={pagPrincipalStyles.eventoHeader}>
                    <Text style={pagPrincipalStyles.eventoTitulo}>{evento.titulo}</Text>
                    <Ionicons 
                      name="calendar-outline" 
                      size={20} 
                      color={COLORS.third}
                    />
                  </View>
                  <Text style={pagPrincipalStyles.eventoFecha}>{evento.fecha}</Text>
                  <Text style={pagPrincipalStyles.eventoHora}>
                    <Ionicons name="time-outline" size={16} color={COLORS.textPrimary} />
                    {' '}{evento.hora}
                  </Text>
                  <Text style={pagPrincipalStyles.eventoDescripcion}>{evento.descripcion}</Text>
                </View>
              ))}
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