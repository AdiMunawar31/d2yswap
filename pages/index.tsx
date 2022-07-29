import type { NextPage } from 'next';
import Header from '../components/Header';
import Main from '../components/Main';
import TransactionHistory from '../components/TransactionHistory';

const style = {
	wrapper: 'h-screen max-h-screen w-screen bg-[#2B222D] text-white select-none flex flex-col justify-between',
};

const Home: NextPage = () => {
	return (
		<div className={style.wrapper}>
			<Header />
			<Main />
			<TransactionHistory />
		</div>
	);
};

export default Home;
