import { Menu, Card } from 'antd';
import { Tooltip } from 'antd';
import '../styles/app.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import nav from '../nav.json';
import pagesInfo from '../pages-info.json';

import { QuestionCircleOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
import stylesheet from 'antd/dist/antd.min.css';

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();

  return (
    <div className="main-container">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <Menu
        className="nav-menu"
        style={{ width: 256 }}
        selectedKeys={[router.pathname]}
        defaultOpenKeys={['1']}
        mode="inline"
      >
        {nav.map((elem, index) => {
          if (elem.items) {
            return (
              <SubMenu key={index} title={<span>{elem.label}</span>}>
                {elem.items.map((elem) => {
                  return (
                    <Menu.Item key={elem.path}>
                      <Link href={elem.path}>
                        <a>{elem.label}</a>
                      </Link>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          } else {
            return (
              <Menu.Item key={elem.path}>
                <Link href={elem.path}>
                  <a>{elem.label}</a>
                </Link>
              </Menu.Item>
            );
          }
        })}
      </Menu>

      <Tooltip
        className="info-icon"
        title={
          (router.pathname in pagesInfo &&
            (pagesInfo as any)[router.pathname].hint) ||
          'Meow'
        }
      >
        <div>
          <QuestionCircleOutlined /> Справка
        </div>
      </Tooltip>

      <div className="content">
        <Card
          style={{ minWidth: 300 }}
          title={
            router.pathname in pagesInfo &&
            (pagesInfo as any)[router.pathname].label
          }
        >
          <Component {...pageProps} />
        </Card>
      </div>
    </div>
  );
}
export default MyApp;
