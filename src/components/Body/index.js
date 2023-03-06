import React, { useState, useEffect } from 'react';
import './style.css';

function Body() {
	const [opacity, setOpacity] = useState(0.2);
	const [scrollProgress, setScrollProgress] = useState(0);

	const handleScroll = () => {
		const position = document.getElementById('sticky-container').getBoundingClientRect().top;
		const progress = -(position / (window.innerHeight * 4));

		setScrollProgress(progress);

		if (progress < 0.1) {
			setOpacity(0.2);
		} else if (progress < 0.2) {
			setOpacity(0.27);
		} else if (progress < 0.3) {
			setOpacity(0.34);
		} else if (progress < 0.4) {
			setOpacity(0.41);
		} else if (progress < 0.5) {
			setOpacity(0.48);
		} else if (progress < 0.6) {
			setOpacity(0.55);
		} else if (progress < 0.7) {
			setOpacity(0.62);
		} else {
			setOpacity(0.69);
		}
	};

	// listen for scroll event
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		// eslint-disable-next-line
	}, []);

	const brighter = () => {
		const newPosition = scrollProgress === 0 ? window.innerHeight * 4 * 0.11 : (scrollProgress + 0.1) * (window.innerHeight * 4);

		window.scrollTo(0, newPosition);
		handleScroll();
	};

	const darker = () => {
		const newPosition = scrollProgress > 0.7 ? window.innerHeight * 4 * 0.61 : (scrollProgress - 0.1) * (window.innerHeight * 4);

		window.scrollTo(0, newPosition);
		handleScroll();
	};

	const styles = {
		background: {
			opacity
		}
	};

	return (
		<div className='body'>
			<div id='sticky-container'>
				<div className='foreground'>
					<img className='background' style={styles.background} src='./assets/background.jpg' alt='background' />
					<div className='headline'>
						<img className={0.8 <= scrollProgress || scrollProgress < 0.2 ? 'headline-item visible' : 'headline-item hidden'} src='./assets/deako-lighting_light.png' alt='deako' />
						<h1 className={0.2 <= scrollProgress && scrollProgress < 0.4 ? 'headline-item visible' : 'headline-item hidden'}>ambient</h1>
						<h1 className={0.4 <= scrollProgress && scrollProgress < 0.6 ? 'headline-item visible' : 'headline-item hidden'}>convenient</h1>
						<h1 className={0.6 <= scrollProgress && scrollProgress < 0.8 ? 'headline-item visible' : 'headline-item hidden'}>safe</h1>
					</div>

					<div className='byline'>
						<h2>LIGHTING</h2>
						<button>Shop Smart Switches</button>
					</div>

					<div className='sublink'>
						<p>I'm buying a D.R. Horton home</p>
					</div>

					<div className='dimmer'>
						<div className='lights'>
							<div className={scrollProgress > 0.7 && 'on'} />
							<div className={scrollProgress > 0.6 && 'on'} />
							<div className={scrollProgress > 0.5 && 'on'} />
							<div className={scrollProgress > 0.4 && 'on'} />
							<div className={scrollProgress > 0.3 && 'on'} />
							<div className={scrollProgress > 0.2 && 'on'} />
							<div className={scrollProgress > 0.1 && 'on'} />
						</div>
						<div className='switch'>
							<div onClick={brighter} />
							<hr />
							<div onClick={darker} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Body;
