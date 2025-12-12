import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from './colors';

const { width } = Dimensions.get('window');

export const pagPrincipalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: 20,
  },

  // Hero Section
  heroSection: {
    backgroundColor: COLORS.third,
    borderRadius: 40,
    padding: 40,
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 28,
  },

  mainTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: COLORS.textLanguage,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: COLORS.textPrimary,
    fontStyle: 'italic',
  },

  // Misión y Visión
  missionContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 30,
    gap: 15,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  missionCard: {
    backgroundColor: COLORS.primaryShade,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    borderRadius: 20,
    padding: 20,
    width: width > 600 ? '45%' : '90%',
    alignItems: 'center',
  },

  iconCard: {
    marginBottom: 10,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textLanguage,
    marginBottom: 10,
  },

  cardText: {
    fontSize: 14,
    color: COLORS.textPrimary,
    textAlign: 'center',
    lineHeight: 20,
  },

  // Sección de Donaciones
  donationSection: {
    backgroundColor: COLORS.third,
    borderRadius: 30,
    padding: 25,
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 28,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textLanguage,
    marginBottom: 10,
    textAlign: 'center',
  },

  sectionDescription: {
    fontSize: 14,
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },

  donationButton: {
    backgroundColor: COLORS.secondaryClear,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },

  donationButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Donadores
  donadoresSection: {
    paddingHorizontal: 20,
    paddingVertical: 25,
  },

  donadorsList: {
    backgroundColor: COLORS.thirdShade,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    borderRadius: 20,
    padding: 20,
  },

  donadorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBorder,
  },

  donadorName: {
    fontSize: 14,
    color: COLORS.textPrimary,
    marginLeft: 10,
    flex: 1,
  },

  // Eventos
  eventosSection: {
    paddingHorizontal: 20,
    paddingVertical: 25,
  },

  eventosList: {
    gap: 15,
  },

  eventoCard: {
    backgroundColor: COLORS.primaryShade,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    borderRadius: 20,
    padding: 20,
  },

  eventoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  eventoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textLanguage,
    flex: 1,
  },

  eventoFecha: {
    fontSize: 13,
    color: COLORS.textPrimary,
    marginBottom: 5,
  },

  eventoHora: {
    fontSize: 13,
    color: COLORS.textPrimary,
    marginBottom: 10,
  },

  eventoDescripcion: {
    fontSize: 13,
    color: COLORS.textPrimary,
    fontStyle: 'italic',
  },

  // CTA Section
  ctaSection: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    alignItems: 'center',
  },

  ctaButton: {
    backgroundColor: COLORS.third,
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 28,
  },

  ctaButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Footer
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },

  footerText: {
    fontSize: 12,
    color: COLORS.textPrimary,
    textAlign: 'center',
    opacity: 0.7,
  },
});