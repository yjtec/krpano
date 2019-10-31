import styles from './index.css';
import Pano,{AsyncLoadPano} from '../../lib/';
export default function() {
  return (
    <div className={styles.normal}>
      <h1>pano test</h1>
      <div className={styles.pano}>
        <Pano
          url="http://192.168.1.240:99/api/project/projectXml?id=21&type=xml"
        />
      </div>
    </div>
  );
}

