import React, { Component } from 'react';
import {Card,Col} from "antd"
import { Button } from 'antd';
import {Input} from 'antd';


const gridStyle = {
  width: '20%',
  textAlign: 'center',
};

const imageStyle = {
  width: '20%',
  height: '200px'
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boxnum: [true,true,true,true,true,true,true,true,
        true,true,true,true,true,true,true,true,true,
        true,true,true,true,true,true,true,true],
      picture: ['bankky.jpg',"p'jame.jpg",'pol.jpg','porkung.jpg','singto.jpg'],
      indexPicture: 0,
      slove:['แบ้งกี้','เจมส์','ฟลุ๊ค','ปอ','สิง'],
      userAnswer : '',
      score:100
      
    }
  }
  clickBox = (i) => () =>{
    const { boxnum,score } = this.state
    const newScore = score-1
    const newBoxnum = boxnum.map((box, index) => {
      if (index === i) return false
      return box
    })
    this.setState({ boxnum: newBoxnum,score:newScore })
  }
  clickSubmit = (data) => () =>{
    const { boxnum,slove,indexPicture,score } = this.state
    if(data===slove[indexPicture]){
      const newindex = indexPicture+1
      const newBoxnum = boxnum.map((box,index) => {
        return box = true
      })
    
      this.setState({
        userAnswer: '', 
        boxnum: newBoxnum,
        indexPicture: newindex
      })
    }
    else{
      const newScore = score-10
      this.setState({userAnswer:'',score: newScore})
    }  
  }
  changePic = (name) => `${process.env.PUBLIC_URL}image/${name}`

  setSlove = (e) => {
    const {value} = e.target
  this.setState(
    {
      userAnswer: value
    }
  )
  }
    
  render() {
    const { boxnum ,picture,indexPicture,userAnswer,score} = this.state
    return (
    
      <div className="App"
        style={{
          background:'#99ccff',
          display: "flex",
          justifyContent: "center",
          textAlign: "center"
        }}
      > 
      <Card title="WHO IS HIM IN COM-SCI ?"
        style={{
          background:"#ffb3d1",
          width:'500px',
        }}>

    <div style={{textAlign:"right"}}>  
        <h1>score: {score}</h1>
      </div>
      <div style={{position: 'absolute'}}>
          <img style={{height:'500px',width: '450px'}} src={this.changePic(picture[indexPicture])}/>
      </div>
       <Col span={24} >
          {boxnum.map((box,i)=>{ 
            return  (
              <Card.Grid
                style={{
                  background:'White',
                  height:'100px',
                  width: '20%',
                  textAlign: 'center',
                  opacity: box ? 1 : 0 
                }}
                onClick={this.clickBox(i)}
              >
                {i+1}
              </Card.Grid>
            
            )     
          }) }
     
       
       </Col>
      
      <Input style={{width: '80%'}} size="large" placeholder=""  onChange={this.setSlove} value={userAnswer}/>
              <Button type="primary"
               style={{
                 background:'#b30047',
                 borderColor:'#b30047',
                 float:"right"
               }}
               onClick={this.clickSubmit(userAnswer)}
               >Submit</Button>

             
  </Card>

  
  
      </div>
    );
  }
}

export default App;
