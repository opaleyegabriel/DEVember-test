import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import DayListItem from './src/components/core/DayListItem';

//const days=[1,6,7,8,9,6];
const days = [...Array(24)].map((val,index)=>index +1);

export default function App() {
  return (
<View style={styles.container}>



    {
    
    <FlatList 
      data={days}
      numColumns={2}
      contentContainerStyle={styles.content}
      columnWrapperStyle={styles.column}
      renderItem={({item}) => ( <DayListItem day={item} />
        
      )}
    
    />
    
    /*days.map((day)=> (
      <View style={styles.box} key={day}> 
      <Text style={styles.text}>{day}</Text>
    </View>
    ))*/}

    
      
    


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
  column:{
    gap:10,
  },
  box:{
    backgroundColor:'#f9ede3',
    flex:1,
    aspectRatio:1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#9b4521',
    borderRadius:20,

    justifyContent:'center',
    alignItems:'center',
    
  },
  content:{
    gap:10,
  },
  text:{
    color:'#9b4521',
    fontSize: 70,
  },
});
