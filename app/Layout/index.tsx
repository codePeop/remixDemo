import React from 'react';
import Logo from '~/assets/Logo.svg'
import HeaderSearch from '~/assets/HeaderSearch.svg'
// 模块化导入样式
import styles from './index.module.scss'
import { LaptopOutlined, NotificationOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Input, Layout, Menu, theme } from 'antd';
import { Outlet } from '@remix-run/react';
import CustomMenu from '~/components/Sider/Menu';

const { Header, Content, Sider } = Layout;
const { Search } = Input;


export default function CustomLayout() {
    // 顶部导航栏
    const navContent: string[] = ["文档", "社群", "官网", "客服"]

    const onSearch = () => {
      console.log("搜索");
      
    }
    return (
      <>
         <Layout className={styles.layout}>
            <Header style={{ display: 'flex' }} className={styles.custom_header}>
                <div className={styles.Logo} >
                  <img src={Logo} alt="Logo" />
                </div>
                <div>
                <Input
                  className={styles.custom_input}
                  prefix={<SearchOutlined />}
                  placeholder="输入内容"
                />
                </div>
                <div className={styles.nav}>
                  {/* 循环navContent */}
                  {
                    navContent.map((item: string) => {
                      return <span>{item}</span>
                    })
                  }
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
  