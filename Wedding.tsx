import { Image, StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Wedding = ({ navigation }) => {
  const data = [
    {
      name: 'Grand Geet Hotels',
      Location: 'Kanpur',
      price: '20,000',
      range: '500',
      image: 'https://image.wedmegood.com/resized/450X/uploads/member/930162/1751449439_caption.jpg?crop=7,141,1264,711'
    },
    {
      name: 'Luxury Banquet',
      Location: 'Lucknow',
      price: '25,000',
      range: '700',
      image: 'https://image.wedmegood.com/resized/450X/uploads/member/24548810/1718629133_Snapinsta.app_441574922_122140294610221685_1955863213989800190_n_1024.jpg?crop=4,255,1071,602'
    },
    {
      name: 'Royal Palace',
      Location: 'Delhi',
      price: '18,000',
      range: '400',
      image: 'https://image.wedmegood.com/resized/450X/uploads/project/229334/1736235456_DJI_0212_HDR.jpg?crop=11,131,2024,1138'
    },
    {
      name: 'Dream Wedding Hall',
      Location: 'Kanpur',
      price: '30,000',
      range: '800',
      image: 'https://image.wedmegood.com/resized/450X/uploads/member/1197082/1586885668_Screenshot_from_2020_04_14_23_02_23.png'
    },
    {
      name: 'Royal Palace',
      Location: 'Delhi',
      price: '18,000',
      range: '400',
      image: 'https://image.wedmegood.com/resized/450X/uploads/project/229334/1736235456_DJI_0212_HDR.jpg?crop=11,131,2024,1138'
    },
    {
      name: 'Dream Wedding Hall',
      Location: 'Kanpur',
      price: '30,000',
      range: '800',
      image: 'https://image.wedmegood.com/resized/450X/uploads/member/1197082/1586885668_Screenshot_from_2020_04_14_23_02_23.png'
    },
    {
      name: 'Grand Geet Hotels',
      Location: 'Kanpur',
      price: '20,000',
      range: '500',
      image: 'https://image.wedmegood.com/resized/450X/uploads/member/930162/1751449439_caption.jpg?crop=7,141,1264,711'
    },
    {
      name: 'Luxury Banquet',
      Location: 'Lucknow',
      price: '25,000',
      range: '700',
      image: 'https://image.wedmegood.com/resized/450X/uploads/member/24548810/1718629133_Snapinsta.app_441574922_122140294610221685_1955863213989800190_n_1024.jpg?crop=4,255,1071,602'
    },
    {
      name: 'Royal Palace',
      Location: 'Delhi',
      price: '18,000',
      range: '400',
      image: 'https://image.wedmegood.com/resized/450X/uploads/project/229334/1736235456_DJI_0212_HDR.jpg?crop=11,131,2024,1138'
    },
    {
      name: 'Dream Wedding Hall',
      Location: 'Kanpur',
      price: '30,000',
      range: '800',
      image: 'https://image.wedmegood.com/resized/450X/uploads/member/1197082/1586885668_Screenshot_from_2020_04_14_23_02_23.png'
    },
    {
      name: 'Royal Palace',
      Location: 'Delhi',
      price: '18,000',
      range: '400',
      image: 'https://image.wedmegood.com/resized/450X/uploads/project/229334/1736235456_DJI_0212_HDR.jpg?crop=11,131,2024,1138'
    },
    {
      name: 'Dream Wedding Hall',
      Location: 'Kanpur',
      price: '30,000',
      range: '800',
      image: 'https://image.wedmegood.com/resized/450X/uploads/member/1197082/1586885668_Screenshot_from_2020_04_14_23_02_23.png'
    }
  ]

  const [search, setSearch] = useState('')

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.Location.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>💍 Kuldeep Wedding Venues</Text>

        
        <TextInput
          style={styles.searchBar}
          placeholder="🔍 Search venues by name or location..."
          value={search}
          onChangeText={(text) => setSearch(text)}
        />

        {filteredData.length > 0 ? (
          filteredData.map((val, index) => (
            <View key={index} style={styles.card}>
              <Image source={{ uri: val.image }} style={styles.image} />
              <View style={styles.infoBox}>
                <Text style={styles.name}>{val.name}</Text>
                <Text style={styles.location}>📍 {val.Location}</Text>
                <Text style={styles.range}>👥 Capacity: {val.range} people</Text>
                <Text style={styles.price}>💰 {val.price} Rs</Text>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noResult}>❌ No venues found</Text>
        )}
      </ScrollView>

      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Checklist')}
      >
        <Text style={styles.buttonText}>📝 Go to Checklist</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Wedding

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  container: {
    flex: 1,
    padding: 12,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
    color: '#1F3C88',
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    elevation: 2,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  infoBox: {
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2C3E50',
  },
  location: {
    fontSize: 15,
    color: '#e74c3c',
    marginBottom: 6,
  },
  range: {
    fontSize: 15,
    color: '#2980B9',
    marginBottom: 6,
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#27AE60',
  },
  noResult: {
    fontSize: 16,
    textAlign: 'center',
    color: '#7f8c8d',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#ff6b6b',
    padding: 18,
    borderRadius: 30,
    margin: 15,
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
  },
})
