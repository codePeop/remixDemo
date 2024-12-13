import styles from '~/Layout/index.module.scss'
import { Breadcrumb, Layout, Menu, theme, MenuProps } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const items2: MenuProps['items'] = [
  {
    key: 'console',
    icon: React.createElement(UserOutlined),
    label: '控制台',
  },
  {
    key: 'subscription',
    icon: React.createElement(LaptopOutlined),
    label: '订阅',
  },
];

// 路由映射
const routesBtnMap: any = {
  console: '/console',
  subscription: '/subscription',
}

export default function CustomMenu() {
  const [selectedKey, setSelectedKey] = useState('');

  function handleMenuClick(e: any) {
    console.log(e);
    
    setSelectedKey(e.key);
    window.location.href = routesBtnMap[e.key]
  }
  return (
    <>
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        className={styles.custom_menu}
        items={items2}
        onClick={handleMenuClick}
      />
    </>
  );
}