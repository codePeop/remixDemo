import React from 'react';
// 模块化导入样式
import styles from './index.module.scss'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet } from '@remix-run/react';
import CustomMenu from '~/components/Sider/Menu';

const { Header, Content, Sider } = Layout;




export default function CustomLayout() {
    // const {
    //     token: { colorBgContainer, borderRadiusLG },
    //   } = theme.useToken();
    return (
      <>
         <Layout className={styles.layout}>
            <Header style={{ display: 'flex', alignItems: 'center', height: 70 }} className={styles.custom_header}>
                <div className="demo-logo" />
                <div>
                  1323
                </div>
            </Header>
            <Layout className={styles.footer}>
                <div className={styles.footer_container}>
                    <Sider  className={styles.custom_sider}>
                      <CustomMenu />
                      <div>
                          头像
                      </div>
                    </Sider>
                    <div className={styles.custom_content}>
                        <Content>
                          <Outlet /> {/* 使用 Outlet 组件 */}
                        </Content>
                    </div>
                </div>
            </Layout>
         </Layout>
      </>
    );
  }
  