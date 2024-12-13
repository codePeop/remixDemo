import { Button, Form, Input } from 'antd'
import styles from './index.module.scss'

export default function A() {
    return (
        <div className={styles.sub_container}>
            <div className={styles.sub_header}>
                <h1>订阅管理</h1>
                <Button size='middle' className={styles.custom_btn}>添加</Button>
            </div>
            <div className={styles.custom_form_area}>
                 <Form
                    name="basic"
                    layout="vertical"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    className={styles.custom_form}
                    autoComplete="off"
                    >
                    {[...Array(6)].map((_, index) => (
                        <Form.Item
                            className='w-full'
                            key={index}
                            label={`Label ${index + 1}`}
                            name={`field${index}`}
                        >
                            <Input className={styles.custom_input} />
                        </Form.Item>
                    ))}
                </Form>
                <Button size='middle' className={styles.custom_btn}>搜索</Button>
            </div>
        </div>
    )
}