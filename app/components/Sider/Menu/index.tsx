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

export default function CustomMenu() {
  const [selectedKey, setSelectedKey] = useState('console');

  const handleMenuClick = (e) => {
    console.log("打你");
    
    // console.log(e);
    
    // setSelectedKey(e.key);
  };
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