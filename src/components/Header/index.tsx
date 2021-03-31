import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export const Header = () => {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<img src="/images/logo.svg" alt=""/>

				<nav>
					<a>Home</a>
					<a>Posts</a>
				</nav>

				<SignInButton />
			</div>
		</header>
	)
}
