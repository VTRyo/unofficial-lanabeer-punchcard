import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
	// 計算式
	// 6000円(10杯分), 800円得。浮いたお金でスイングカランが1杯飲める
	// 12000円で1600円得。浮いたお金でスイングカランが2杯、クラフト系が1杯が飲める
	const sapporoBlackLabel = 680;
	let avalilableBeerCount: number;
	let avalilableGuestBeerCount: number;

	// 計算式に変える
	avalilableBeerCount = 1;
	avalilableGuestBeerCount = 1;

	const [selectedOption, setSelectedOption] = useState('option1');
	const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedOption(event.target.value);
	};

	const selectRadio = () => {
		if (selectedOption === 'option1') {
			return `浮いたお金でサッポロ黒ラベルが${avalilableBeerCount}杯飲めます`;
		} else if (selectedOption === 'option2') {
			return `浮いたお金でサッポロ黒ラベルが${avalilableBeerCount}杯、もしくはゲストビールが${avalilableGuestBeerCount}杯飲めます`;
		} else if (selectedOption === 'option3') {
			return `浮いたお金でサッポロ黒ラベルが${avalilableBeerCount}杯、もしくはゲストビールが${avalilableGuestBeerCount}杯飲めます`;
		}
	};

	return (
		<div className="App">
			<p>Lana Beerの非公式ページです</p>
			<p>回数券購入時に「いくらお得になるのか」を計算できます</p>
			<div>
				<input
					id="select_option1"
					type="radio"
					name="options"
					value="option1"
					checked={selectedOption === 'option1'}
					onChange={handleOptionChange}
				/>
				<label htmlFor="select_option1">6000円分</label>
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
				<label htmlFor="select_option2">12000円分</label>
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
				<label htmlFor="select_option3">18000円分</label>
			</div>
			{/* それ以上は入力形式 */}
			<p> {selectRadio()} </p>
			<p>サッポロ黒ラベルが {avalilableBeerCount} 杯分お得！</p>
		</div>
	);
}

export default App;
