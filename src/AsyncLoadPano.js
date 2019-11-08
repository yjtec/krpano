import React from 'react';
import {importCDN,importAudio} from './utils/utils';
let isLoader = false;
let krpanoJS = null;
let musicBg = null;
let musicExplain = null;
const loadPano  = async (callback) => {
  if(isLoader){
    return Promise.resolve({krpanoJS,musicBg,musicExplain});
  }

  await importCDN("http://test.res.jsvry.com/krpano/tour.js","krpanoJS").then(re => {
    krpanoJS = re;
    isLoader = true;
    musicBg = importAudio('musicBg');
    musicExplain = importAudio('musicExplain');
    return Promise.resolve({krpanoJS,musicBg,musicExplain});
  })
}

class AsyncLoadPano extends React.Component{
  state ={ 
    loading: !isLoader
  }
  async componentDidMount(){
    const KR = await loadPano();
    requestAnimationFrame(() => {
      this.setState({
        loading: false,
      });
    });
  }

  render(){
    const {children,renderLoading} = this.props;
    const {loading} = this.state;
    if(!loading){
      return children;
    }

    return renderLoading;
  }
}
AsyncLoadPano.defaultProps = {
  renderLoading:<div>loading...</div>
}

export {AsyncLoadPano,loadPano};