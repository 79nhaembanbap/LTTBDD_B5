import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  StyleSheet,
  Button,
  Linking
} from 'react-native';

const data = [
  {
    id: '1',
    title: 'Cá nấu lẩu, nấu mì mini',
    author: 'Shop Devang',
    uri: require('./assests/ca_nau_lau.png'),
  },
  {
    id: '2',
    title: '1 kg gà bơ tỏi',
    author: 'Shop LTD',
    uri: require('./assests/ga_bo_toi.png'),
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng',
    author: 'Shop Thế giới đồ chơi',
    uri: require('./assests/xa_can_cau.png'),
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hìnhs',
    author: 'Shop Minh Long book',
    uri: require('./assests/do_choi_dang_mo_hinh.png'),
  },
  {
    id: '5',
    title: 'Hiểu lòng con trẻ',
    author: 'Shop Minh Long book',
    uri: require('./assests/lanh_dao_gian_don.png'),
  },
];

const App = () => {
  const Item = ({title, author, uri}) => (
    <View style={styles.item}>
      <Image  source={uri} style={styles.img} />
      <View   style={styles.subitem} >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
      </View>
      <Button title="Chat" color={'red'}  width={15}/>
    </View>
  );

  const renderItem = ({item}) => (
    <Item title={item.title} author={item.author} uri={item.uri}/>
  );
  return (
    <View style={styles.container}>
      <View>
        <Text>Chat</Text>
      </View>
      <View style={styles.header}>
        <Text>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
        </Text>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    backgroundColor: 'grey',
  },
  item: {
    flex: 1, 
   
    flexDirection: 'row',
    justifyContent: 'center',
    padding:10
  },
  subitem: {
    flex:2,  
    flexDirection: 'column'
  },
  btn: {
    width: 10,
    backgroundColor: "oldlace",
  },
  img: {
  
    width: 50,
    height: 50,
  },
});
export default App;
