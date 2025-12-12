import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from './colors';

const { width } = Dimensions.get('window');

export const pagPrincipalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: 0,
  },

  headerWrapper: {
    backgroundColor: 'transparent',
  },

  // Carrusel de donadores
  carouselContainer: {
    paddingHorizontal: 60,
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },

  carouselLabel: {
    fontSize: 14,
    color: COLORS.textPrimary,
    marginBottom: 10,
    marginLeft: 10,
  },

  carouselContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.thirdShade,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 18,
  },

  carouselArrow: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  donadorDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  donadorDisplayName: {
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: '600',
    textAlign: 'center',
  },

  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7,
    gap: 10,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.cardBorder,
  },

  activeDot: {
    backgroundColor: COLORS.third,
    width: 10,
    height: 10,
    borderRadius: 5,
  },

  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.textLanguage,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 15,
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
    backgroundColor: COLORS.missionShade,
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



  // Anuncio de Próximas Clases
  announcementSection: {
    paddingHorizontal: 20,
    paddingVertical: 25,
  },

  announcementCard: {
    backgroundColor: COLORS.missionShade,
    borderWidth: 2,
    borderColor: COLORS.secondaryClear,
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  announcementTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.secondaryClear,
    marginBottom: 10,
    textAlign: 'center',
  },

  announcementText: {
    fontSize: 16,
    color: COLORS.textLanguage,
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: '600',
  },

  announcementSubtext: {
    fontSize: 13,
    color: COLORS.textPrimary,
    textAlign: 'center',
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