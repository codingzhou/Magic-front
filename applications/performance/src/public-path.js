const IS_PROD = process.env.NODE_ENV === 'production'
const protocol = process.env.REACT_APP_PROTOCOL
const domain = process.env.REACT_APP_DOMAIN
import { name } from '../package.json'

if (window.__POWERED_BY_QIANKUN__) {
  if (IS_PROD) {
    window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = `/${name}` // `${protocol}://${domain}/`;
  }
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
