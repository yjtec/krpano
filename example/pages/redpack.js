import React,{Fragment} from 'react';
import Pano,{AsyncLoadPano} from '../../lib/';
import styles from './index.css';
import request from 'umi-request';
import {EventEmitter} from 'events';
window.YjtecEvent = new EventEmitter();
const redpackData = [
  {
    id:'2',
    adv:'恭喜发财，大吉大利',
    type:1
  },
  {
    id:'2',
    adv:'恭喜发财，大吉大利1',
    type:2
  },
  {
    id:'2',
    adv:'恭喜发财，大吉大利3',
    type:3
  }
];
class Redpack extends React.Component{
  state = {
    loading:true,
    xml:''
  }
  async componentDidMount(){
    // const {data:{xml}} = await request('/api/pano/project/projectXml?id=15&type=json');
    this.setState({
      loading:false,
      //xml:xml
    })

    YjtecEvent.on('redpack.open',({id,krpano,caller}) => {
      console.log(id,krpano,caller);
      setTimeout(()=>{
        krpano.call('redpack_close()');
      },3000)
      
    })
  }
  render(){
    const {loading,xml} = this.state;
    return(
      <div>
        <div className={styles.pano}>
          {!loading && (
            <Pano
              // xml={xml}
              url="/api/pano/project/projectXml?id=15&type=xml&plugins=redpack"
              vars = {{
                redpack:true,
                PLUGINPATH:'https://test360vrsh.oss-cn-qingdao.aliyuncs.com/krpano/plugin',
                REDPACK_DATA_PATH:"https://test360vrsh.oss-cn-qingdao.aliyuncs.com/krpano/plugin/redpack/data.xml"
              }}
            />
          )}
          
        </div>
      </div>
      
    )
  }
}
export default Redpack;

//https://test360vrsh.oss-cn-qingdao.aliyuncs.com/krpano/plugin/redpack/main.xml

