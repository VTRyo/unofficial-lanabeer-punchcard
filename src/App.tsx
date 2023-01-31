import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
	const oneCouponPrice = 6000;
	const Price = 6800;
	const sapporoBlackLabelPrice = 680;
	const guestBeerPrice = 1200;
	let avalilableBeerCount: number;
	let avalilableGuestBeerCount: number;

	// 計算式に変える
	avalilableBeerCount = 0;
	avalilableGuestBeerCount = 0;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		setShowText(true);
	};
	const [inputAmount, setInputAmount] = useState('');
	const [showText, setShowText] = useState(false);
	const handleChange = (event: any) => {
		setInputAmount(event.target.value);
	};

	const [selectedOption, setSelectedOption] = useState('option1');
	const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedOption(event.target.value);
	};

	const goodDealCalc = (amount: number, beerPrice: number) => {
		//回数件の枚数
		let couponCount = amount / oneCouponPrice;
		//浮いた金額
		let profitPrice = Price * couponCount - oneCouponPrice * couponCount;

		//少数点以下切り捨て
		//浮いた金額でそれぞれ何が何杯飲めるのか
		if (beerPrice === sapporoBlackLabelPrice) {
			return (avalilableBeerCount = Math.floor(profitPrice / beerPrice));
		} else if (beerPrice === guestBeerPrice) {
			return (avalilableGuestBeerCount = Math.floor(profitPrice / beerPrice));
		}
	};

	const selectRadio = () => {
		if (selectedOption === 'option1') {
			goodDealCalc(6000, sapporoBlackLabelPrice);
			goodDealCalc(6000, guestBeerPrice);
			return `浮いたお金でサッポロ黒ラベルが${avalilableBeerCount}杯飲めます`;
		} else if (selectedOption === 'option2') {
			goodDealCalc(12000, sapporoBlackLabelPrice);
			goodDealCalc(12000, guestBeerPrice);
			return `浮いたお金でサッポロ黒ラベルが${avalilableBeerCount}杯、もしくは1200円のゲストビールが${avalilableGuestBeerCount}杯飲めます`;
		} else if (selectedOption === 'option3') {
			goodDealCalc(18000, sapporoBlackLabelPrice);
			goodDealCalc(18000, guestBeerPrice);
			return `浮いたお金でサッポロ黒ラベルが${avalilableBeerCount}杯、もしくは1200円のゲストビールが${avalilableGuestBeerCount}杯飲めます`;
		}
	};

	return (
		<div className="App">
			<p>Lana Beerの非公式ページです</p>
			<p>
				サッポロ黒ラベル回数券を購入した場合に
				<br />
				「浮いたお金でどれくらい飲めるのか」を計算できます
			</p>
			<div>
				<input
					id="select_option1"
					type="radio"
					name="options"
					value="option1"
					checked={selectedOption === 'option1'}
					onChange={handleOptionChange}
				/>
				<label htmlFor="select_option1">6,000円分 （1枚分）</label>
			</div>
			<div>
				<input
					id="select_option2"
					type="radio"
					name="options"
					value="option2"
					checked={selectedOption === 'option2'}
					onChange={handleOptionChange}
				/>
				<label htmlFor="select_option2">12,000円分 （2枚分）</label>
			</div>
			<div>
				<input
					id="select_option3"
					type="radio"
					name="options"
					value="option3"
					checked={selectedOption === 'option3'}
					onChange={handleOptionChange}
				/>
				<label htmlFor="select_option3">18,000円分 （3枚分）</label>
			</div>
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<label>金額自由入力欄</label>
					<input
						type="number"
						{...register}
						value={inputAmount}
						onChange={handleChange}
					></input>
					<input type="submit" value="計算" />
					{showText && <p> {inputAmount}</p>}
				</form>
			</div>
			<p> {selectRadio()} </p>
			<p>サッポロ黒ラベルが {avalilableBeerCount} 杯分お得！</p>
		</div>
	);
}

export default App;
