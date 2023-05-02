import styles from './Navbar.module.scss';
import classNames from 'classnames';
import {
  RiShoppingCart2Line,
  RiShoppingCartFill
} from 'react-icons/ri';
import Busca from '../Busca';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const iconeProps = {
  color: '#051933',
  size: 24
}

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo} onClick={() => navigate('/')}>Space Tools</h1>
      <div className={styles.links}>
        <div>
          <Link to='/' className={classNames(styles.link, {
            [styles.selected]: location.pathname === '/'
          })}>
            Loja
          </Link>
          <Link to='/' className={classNames(styles.link, {
            [styles.selected]: location.pathname === '/'
          })}>
            Categorias
          </Link>
          <Link to='/' className={classNames(styles.link, {
            [styles.selected]: location.pathname === '/'
          })}>
            Especial
          </Link>
          
        </div>
      </div>
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        <Link to="/carrinho">
          {location.pathname === '/carrinho'
            ? <RiShoppingCartFill {...iconeProps} />
            : <RiShoppingCart2Line {...iconeProps} />
          }
        </Link>
      </div>
    </nav>
  )
}