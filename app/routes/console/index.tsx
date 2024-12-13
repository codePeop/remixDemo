import styles from './index.module.scss'
import { Row, Col, Button, Space } from 'antd'
import { consoleData } from './constance'
import jt from '~/assets/jt.svg'
import Logo from '~/assets/Logo.svg'
const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };
export default function Console() {
    // 控制台卡片数据


    return (
        <div className={styles.console_container}>
            <div className={styles.left}>
                <h1>控制台</h1>
                <Row gutter={16}   className={styles.custom_row} style={{marginLeft: 0, marginRight: 0}}>
                        {
                            consoleData.map((item: any, index: number) => {
                                return (
                                    <Col className={styles.custom_gutter_row} span={7} key={index}>
                                        <div>
                                            <h2>{item.title}</h2>
                                            <div className='flex justify-between'>
                                                <div>
                                                    <div className={styles.num}>{item.num}</div>
                                                    <div className={styles.percentage}>
                                                        {item.percentage}
                                                        <img src={jt} />
                                                    </div>
                                                </div>
                                                <img src={item.icon} className='object-cover'></img>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    
                </Row>
            </div>
            <div className={styles.right}>
                <div>
                    <h1>安全中心</h1>
                    <div className={styles.custom_card}>
                        <h3>最近登录</h3>
                        <div className={styles.content_scroll}>
                            {
                                [1, 1, 1].map((item, index) => {
                                return <div key={index}>
                                            <div>上海 滴滴滴滴</div>
                                            <div className={styles.date}>2024</div>
                                        </div>
                                })
                            }
                        </div>
                        <Button className={styles.custom_btn}>登录记录</Button>
                    </div>
                </div>
                <div className='mt-5'>
                    <h1>系统信息</h1>
                    <div className={styles.custom_card}>
                        <img src={Logo} alt="" />
                        <div className={styles.content_scroll}>
                            {
                                ["版本","授权到期日期", "授权类型", "授权信息"].map((item, index) => {
                                return <div key={index}>
                                            <div>{ item }</div>
                                            <div className={styles.date}>2024</div>
                                        </div>
                                })
                            }
                        </div>
                        <Button className={styles.custom_btn}>订阅管理</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}