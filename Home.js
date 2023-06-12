import {View, Text, StatusBar,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

export default function Home() {
  const [modalview, setModalview] = useState(false);
  const [todoList,setTodolist] = useState([]);
  const [text, setonChangeText] = React.useState('');

  const handleAddTodo=()=>{
    if (text != '')
    {
      const newTodolist = [...todoList,text];
      setTodolist(newTodolist);
      alert('Added Successfully !')
      setonChangeText('');
      setModalview(false);
    }
  }

  const handleRemoveTask=()=>{
    if(todoList.length>0)
    {
      const newList = [...todoList];
    newList.shift();
    setTodolist(newList);
    }
  }
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalview}>
        <View style={styles.centeredView}>
          <View style={styles.modalV}>
            <View style={{flexDirection: 'column',alignItems: 'center'}}>
            <Image style={styles.svgImage} source={{uri : 'https://img.icons8.com/?size=512&id=44020&format=png'}}/>
            <Text style={styles.modalText}>Add New Task</Text>
            </View>
            <TextInput style={styles.input} placeholder="Type here..."
            onChangeText={(text)=>setonChangeText(text)}
            value={text}/>
            <Button 
              color="rgb(31,60,127)"
              title="Add"
              onPress={handleAddTodo}
            />
            <TouchableOpacity style={{marginTop: 10,alignSelf:'center'}} onPress={() => setModalview(false)}>
              <Text style={{color:'red',fontWeight:'bold' }}>CLOSE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.card} onPress={() => setModalview(true)}>
        <Image
          style={styles.svgImage}
          source={{
            uri: 'https://img.icons8.com/?size=512&id=48129&format=png',
          }}
        />
        <Text style={styles.newText}>Add New Task</Text>
      </TouchableOpacity>
      <View style={styles.card}>
        <Image
          style={styles.svgImage}
          source={{
            uri: 'https://img.icons8.com/?size=512&id=44026&format=png',
          }}
        />
        <TouchableOpacity onPress={handleRemoveTask}>
        <Text style={styles.newText}>Remove Oldest Task</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentCard}>
        <View style={{flex:1,alignItems: 'center'}}>
        <Text style={styles.taskText}>Your Tasks</Text>
        
        { todoList.length==0 ? (<Text style={{fontSize: 20, padding: 15,fontStyle:'italic', color:'grey'}}>Empty List</Text>) : todoList.map((todo, index)=>{
          return(
            
            <Text key={index} style={{alignSelf: 'flex-start', fontSize: 25, color: 'rgb(112,140,213)',fontWeight: 600}}> - {todo}</Text>
    
          )
        })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  svgImage: {
    width: 40,
    height: 40,
  },
  card: {
    backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentCard: {
    backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  newText: {
    fontSize: 20,
    marginLeft: 10,
    color: '#4e4b4b',
    fontWeight: 'bold',
    
  },
  taskText:{
    fontSize: 27,
    marginLeft: 10,
    color: 'rgb(31,60,136)',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  centeredView:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalV:{
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 40,
    borderRadius: 15,
    shadowColor: 'black',
    elevation: 5,
    width: '80%',
   
  },
  modalText:{
    fontSize: 20,
    marginLeft: 10,
    color: '#4e4b4b',
    fontWeight: 'bold',
    marginTop: 10,
  },
  input:{
    borderWidth: 1,
    marginVertical: 20,
    borderColor: 'grey',
    padding: 10,
    height: 40,
    color: 'black'
    
  }
});
