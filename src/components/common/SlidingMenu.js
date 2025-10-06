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
import { slidingMenuStyles } from '../../styles/componentStyles/slidingMenuStyles';

const { width } = Dimensions.get('window');

const SlidingMenu = ({ isVisible, onClose }) => {
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
    { id: 1, title: 'Traductor'},
    { id: 2, title: 'Acerca de'},
  ];

  const handleItemPress = (item) => {
    console.log(`Seleccionaste: ${item.title}`);
    onClose();
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="none"
      onRequestClose={onClose}
    >
      {/* Overlay oscuro semi-transparente */}
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={slidingMenuStyles.overlay}>
          {/* Contenedor del menú con el fondo COLORS.third */}
          <TouchableWithoutFeedback>
            <Animated.View 
              style={[
                slidingMenuStyles.menuContainer,
                {
                  transform: [{ translateX: slideAnim }]
                }
              ]}
            >
              {/* Fondo del menú con COLORS.third */}
              <View style={slidingMenuStyles.menuBackground}>
                
                {/* Header del menú */}
                <View style={slidingMenuStyles.menuHeader}>
                  <Text style={slidingMenuStyles.menuTitle}>Contenido</Text>
                </View>

                {/* Items del menú */}
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