import styles from './index.less';
import TopMenu from './TopMenu';
import LeftMenu from './LeftMenu';
import PropsMenu from './PropsMenu';
import WorkerSpace from './WorkSpace';
import 'antd/dist/antd.css';

export default function IndexPage() {

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
