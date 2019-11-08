import React,{Component} from 'react';
import {AsyncLoadPano,loadPano} from './AsyncLoadPano';
import {path,basepath} from './defaultConfig';
import request from 'umi-request';
import {isUrl} from './utils/utils';
import music from './music';
const generateId = (()=>{
  let i = 0;
  return (prefix='') => {
    i += 1;
    return `${prefix}${i}`;
  }
})();
class Pano extends Component{
  constructor(props) {
    super(props);
    this.uniqueId = generateId('pano-');
  }
  async componentDidMount(){
    const {krpanoJS:kr,musicBg,musicExplain} = await loadPano();
    const {xml,url} = this.props;
    const krOptions = {
      target:this.uniqueId,
      html5:"auto",
      id:this.uniqueId+'-mainSWFOBJ',
      swf:basepath+'tour.swf',
      consolelog:true,
      basepath:basepath,
      mobilescale: 1.0,
      passQueryParameters: true,
    }
    if(url){
      krOptions.xml = url;
    }
    kr.embedpano({
      ...krOptions,
      onready:(krpano) => {
        music(krpano,musicBg,musicExplain);
        if(xml){
          krpano.call('loadxml('+xml+')')
        }
      }
    })
  }
  render(){
    return(
      <div style={{width:'100%',height:'100%'}} id={this.uniqueId}></div>
    )
  }
}
export default (props) => {
  return(
    <AsyncLoadPano>
      <Pano {...props}/>
    </AsyncLoadPano>
  )
}