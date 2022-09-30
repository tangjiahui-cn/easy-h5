import styles from './index.less';
import TopMenu from './TopMenu';
import LeftMenu from './LeftMenu';
import PropsMenu from './PropsMenu';
import WorkerSpace from './WorkSpace';
import 'antd/dist/antd.css';
import { useKeyBoardListener } from '@/index';
import { useDataCenter, actions} from '@/hooks/useDataCenter';

export default function IndexPage() {
  useKeyBoardListener()


  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.containerInnerHead}>
          <TopMenu />
        </div>
        <div className={styles.containerInnerBody}>
          <div className={styles.containerInnerBodyLeft}>
            <LeftMenu />
          </div>
          <div className={styles.containerInnerBodyBody}>
            <WorkerSpace />
          </div>
          <div className={styles.containerInnerBodyRight}>
            {/*<PropsMenu />*/}
          </div>
        </div>
      </div>
    </div>
  );
}
