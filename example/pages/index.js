import styles from './index.css';
import Pano,{AsyncLoadPano} from '../../lib/';
export default function() {
  return (
    <div className={styles.normal}>
      <h1>pano test</h1>
      <div className={styles.pano}>
        <Pano
          url="http://test.gatewy.360vrsh.com/api/pano/project/projectXml?id=8&type=xml"
        />
      </div>
    </div>
  );
}

