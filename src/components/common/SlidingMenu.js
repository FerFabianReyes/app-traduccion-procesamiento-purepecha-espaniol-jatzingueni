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
import { Ionicons } from '@expo/vector-icons';
import { slidingMenuStyles } from '../../styles/componentStyles/slidingMenuStyles';
import Background from '../backgronds/BackgroundMenu';
import { COLORS } from '../../styles/colors';

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
    { 
      id: 1, 
      title: 'Traductor', 
      screen: 'Translator',
      icon: 'language-outline',
      color: '#ececd0ff'
    },
    { 
      id: 2, 
      title: 'Acerca de', 
      screen: 'About',
      icon: 'information-circle-outline',
      color: '#ebf1cfff'
    },
  ];

  const handleItemPress = (item) => {
    console.log(`Navegando a: ${item.title}`);
    onClose();
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
                { transform: [{ translateX: slideAnim }] }
              ]}
            >
              <View style={slidingMenuStyles.menuBackground}>
                <Background />
                
                <View style={slidingMenuStyles.menuContent}>
                  <View style={slidingMenuStyles.menuHeader}>
                    <Text style={slidingMenuStyles.menuTitle}>Menú</Text>
                  </View>

                  <View style={slidingMenuStyles.menuItems}>
                    {menuItems.map((item, index) => (
                      <TouchableOpacity
                        key={item.id}
                        style={[
                          slidingMenuStyles.menuItem,
                          index === 0 && { marginTop: 0 }
                        ]}
                        onPress={() => handleItemPress(item)}
                        activeOpacity={0.7}
                      >
                        <View style={slidingMenuStyles.iconContainer}>
                          <Ionicons 
                            name={item.icon} 
                            size={24} 
                            color={item.color}
                          />
                        </View>
                        <Text style={slidingMenuStyles.menuItemText}>
                          {item.title}
                        </Text>
                        <Ionicons 
                          name="chevron-forward-outline" 
                          size={20} 
                          color= {COLORS.iconsMenu}
                          style={{ marginLeft: 'auto' }}
                        />
                      </TouchableOpacity>
                    ))}
                  </View>
                  
                  <View style={slidingMenuStyles.menuFooter}>
                    <Ionicons 
                      name="shield-checkmark-outline" 
                      size={16} 
                      color={COLORS.iconsMenu}
                      style={{ marginRight: 6 }}
                    />
                    <Text style={slidingMenuStyles.footerText}>Versión 1.0.0</Text>
                  </View>
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