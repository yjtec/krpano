import React,{Fragment} from 'react';
import styles from './index.css';
import Pano,{AsyncLoadPano} from '../../lib/';
import request from 'umi-request';
class XmlView extends React.Component{
  state ={
    isOpen:true
  }
  handleClose = () => {
    this.setState((state,props)=>({
      isOpen:!state.isOpen
    }))
  }
  render(){
    const {isOpen} = this.state;
    return(
      <div>
        <div>
          <button onClick={this.handleClose}>click</button>
        </div>
        <div className={styles.pano}>
          {isOpen && (
            <Pano
              url="/api/pano/project/projectXml?id=5&type=xml"
            />
          )}
          
        </div>
      </div>
      
    )
  }
}
export default XmlView;

