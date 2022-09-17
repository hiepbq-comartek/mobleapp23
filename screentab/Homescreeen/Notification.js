import React, {useState, useReducer} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {fa0, faComment, faXmark} from '@fortawesome/free-solid-svg-icons';
function Notification({setcheckNotification}) {
  return (
    <Modal animationType="slide" transparent={true} onRequestClose={() => {}}>
      <View
        style={{
          flex: 1,
          zIndex: 10,
          backgroundColor: '#000',
          borderRadius: 16,
        }}>
        <View>
          <TouchableOpacity
            onPress={() => setcheckNotification(false)}
            style={{marginTop: 40, marginLeft: 20}}
            activeOpacity={0.9}>
            <FontAwesomeIcon icon={faXmark} size={24} color="#0ef08c" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 80,
            backgroundColor: '#161a1f',
            marginBottom: 240,
            borderRadius: 16,
          }}>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text style={{color: '#0ef08c', fontSize: 28}}>Thông báo:</Text>
          </View>
          <View
            style={{
              marginLeft: 10,
              marginRight: 10,
              marginBottom: 80,
            }}>
            <ScrollView style={{marginTop: 20}}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#000',
                    height: 44,
                    borderRadius: 8,
                    justifyContent: 'center',
                    paddingLeft: 60,
                    paddingRight: 40,
                  }}>
                  <View style={{flexDirection: 'row', marginLeft: -40}}>
                    <Image
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 28,
                        margin: 4,
                      }}
                      source={require('../../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg')}
                    />
                    <Text
                      style={{
                        color: '#0ef08c',
                        marginTop: 8,
                        fontSize: 20,
                        marginLeft: 8,
                      }}>
                      Nganng đã thích ảnh của bạn
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default Notification;
