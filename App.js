import React from 'react';
import { StyleSheet, Text,ScrollView,Image,View,TextInput,TouchableOpacity } from 'react-native';
import {styles} from './style'



export default class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       text:'',
       task:["Mohammed",'Ahmed']
    }
  }
   addTask=()=>{
     let name=this.state.text;
     let compomnt=this.state.task;
     compomnt.push(name);
     this.setState({task:compomnt,text:''})
   }
   DeleteItem=(idex)=>{
     console.log('before delet:'+this.state.task+'/n index :'+idex)
     let compomnt=this.state.task;
     let afterDelete=this.state.task.slice(idex,1);
     
     this.setState({task:afterDelete})
     console.log('after delet:'+this.state.task+'/n index :'+idex)


   }
   
   
   render(){
    TaskItme=()=>{
      return this.state.task.map((data,index)=>{
         return <Task name={data} onDelete={()=>this.DeleteItem(index)} key={index} />

      })
   
   }
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <TextInput style={[styles.borderTextInput,{flex:5}]}  
        onChangeText={(txt)=>{this.setState({text:txt})}} value={this.state.text}/>
        <TouchableOpacity style={{backgroundColor:'blue',alignContent:'center',flex:1}} onPress={this.addTask}>
          <Text style={styles.textTask}>ADD</Text>
        </TouchableOpacity>
        
 
      </View>
      <ScrollView style={{paddingTop:20,paddingHorizontal:15}}>
        <TaskItme/>
        
      
      </ScrollView>
    </View>
  );
   }
}

class  Task extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       isVisbible:false,
    }
  }
  toggle=()=>{
    this.state.isVisbible? this.setState({isVisbible:false}):this.setState({isVisbible:true});
  }
  render(){
   return(
     <View style={styles.taskView}>
       <Text style={styles.textTask}>{this.props.name}</Text>
       <TouchableOpacity style={styles.circle} onPress={this.toggle}>
          {this.state.isVisbible && <Image source={require('./check.png')} style={{width:35,height:35}}/>}
        </TouchableOpacity>
       <TouchableOpacity style={{backgroundColor:'red',position:'absolute',right:20}} onPress={this.props.onDelete}>
         <Text style={styles.textTask}>Delete</Text>
       </TouchableOpacity>
     </View>
   )}
}

