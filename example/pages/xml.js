import React,{Fragment} from 'react';
import styles from './index.css';
import Pano,{AsyncLoadPano} from '../../lib/';
import request from 'umi-request';
class XmlView extends React.Component{
  state ={
    xml: '',
    loading:true
  }
  async componentDidMount(){
    const {data:{xml}} = await request('http://192.168.1.240:99/api/project/projectXml?id=21');
    this.setState({
      xml:xml,
      loading:false
    })
  }
  render(){
    const {loading,xml} = this.state;
    return(
      <div className={styles.pano}>
        {!loading && 
          <Pano
            xml={xml}
          />
        }
      </div>
      
    )
  }
}
export default XmlView;

