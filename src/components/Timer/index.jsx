import { React, useState, useEffect } from 'react';

const Timer = ({ setBoolean }) => {
	const [minutes, setMinutes] = useState(Math.floor(Math.random() * 3));
	const [seconds, setSeconds] = useState(59);

	useEffect(() => {
		const interval = setInterval(() => {
			if (seconds != 0) {
				setSeconds(seconds - 1);
			} else if (minutes != 0) {
				setMinutes(minutes - 1);
				setSeconds(59);
			} else {
				setBoolean(false);
			}
		}, 1000);
		clearInterval(interval);
	}, [seconds, minutes]);

	const minutesTemplate = minutes < 10 ? `0${minutes}` : minutes;
	const secondsTemplate = seconds < 10 ? `0${seconds}` : seconds;

	return (
		<>
			<h5>
				{minutesTemplate} : {secondsTemplate}
			</h5>
		</>
	);
};

export default Timer;
