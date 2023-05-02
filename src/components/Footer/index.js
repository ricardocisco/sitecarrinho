import styles from './Footer.module.scss';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';

const iconeProps = {
  color: '#041833',
  size: 24,
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <FaFacebook {...iconeProps} />
        <FaTwitter {...iconeProps} />
        <FaInstagram {...iconeProps} />
      </div>
      <span>
        Direitos Reservados.
      </span>
    </footer>
  )
}