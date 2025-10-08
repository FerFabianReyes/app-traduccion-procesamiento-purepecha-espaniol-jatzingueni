import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Modal, 
  Dimensions,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { slidingMenuStyles } from '../../styles/componentStyles/slidingMenuStyles';

const { width } = Dimensions.get('window');

const SlidingMenu = ({ isVisible, onClose }) => {
  const navigation = useNavigation();
  const slideAnim = React.useRef(new Animated.Value(-width)).current;

  React.useEffect(() => {
    if (isVisible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -width,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  const menuItems = [
    { id: 1, title: 'Traductor', screen: 'Translator' },
    { id: 2, title: 'Acerca de', screen: 'About' },
  ];

  const handleItemPress = (item) => {
    console.log(`Navegando a: ${item.title}`);
    onClose(); // Cerrar el menú primero
    
    // Pequeño delay para que la animación del menú se complete
    setTimeout(() => {
      navigation.navigate(item.screen);
    }, 100);
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="none"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={slidingMenuStyles.overlay}>
          <TouchableWithoutFeedback>
            <Animated.View 
              style={[
                slidingMenuStyles.menuContainer,
                {
                  transform: [{ translateX: slideAnim }]
                }
              ]}
            >
              <View style={slidingMenuStyles.menuBackground}>
                
                <View style={slidingMenuStyles.menuHeader}>
                  <Text style={slidingMenuStyles.menuTitle}>Contenido</Text>
                </View>

                <View style={slidingMenuStyles.menuItems}>
                  {menuItems.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      style={slidingMenuStyles.menuItem}
                      onPress={() => handleItemPress(item)}
                    >
                      <Text style={slidingMenuStyles.menuItemText}>{item.title}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
                
                <View style={slidingMenuStyles.menuFooter}>
                  <Text style={slidingMenuStyles.footerText}>Versión 1.0.0</Text>
                </View>
                
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SlidingMenu;