import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div className='about'>
			<header className='about__header'>
				<Link to={'/'}>
					<button className='header__button-home'>Home</button>
				</Link>
				<h1 className='header__title1'>Adrian Camilo Villa Jimenez</h1>
			</header>
			<div className='about__container-info'>
				<div className='about__container-pic'>
					<img
						className='about__pic'
						src='https://i.postimg.cc/y6DfQ32P/25018331-155285288437800-4649051104326189056-n.jpg'
						alt='profile-pic'
					/>
				</div>

				<div className='about__container-text'>
					<h2 className='about__name'>About me</h2>
					<p className='about__description'>
						<span>
							I am an industrial processor technician, a mechanical engineer,
							and I'm studying to be a full stack developer in Make it real
							Academy. One of my greatest passions is science and innovation, I
							think those are the bases of the improvement of the important
							things in society.
						</span>
						<span>
							I have worked as an assistant engineer in Coordinadora Mercantil,
							and there were long periods where I had to replace my boss and be
							responsible for a team of mechanical technicians. I developed
							skills to coordinate a team, commit until deadlines, and solve
							maintenance problems in the terminal.
						</span>
						<span>
							Also in Make it Real’s Top Program, i learned how to work with
							JavaScript, Css, Html, Sass, React, and mongo db in the most
							professional way, because i built projects in group based in
							methodologies as Scrum using Jira Software which one is commonly
							used in tech development business.
						</span>
						<span>
							After the knowledge that i acquired in MIR, being a junior
							developer in a tech company, needs communicate ideas with all the
							technic tools in a professional and effective way. In this Boot
							Camp i learned how to work dynamically in groups, also how to
							communicate and interact remotely at the most efficient way,that
							includes correct indentation or configuration with tools as
							EsLint, and agreements at the ways of commit in the remote
							repository. I am an adaptive person, I enjoy facing challenges and
							achieve the goal of beating them. I’m responsible, proactive,
							communicative, and a fast learner.
						</span>
					</p>
					<h4 className='about__topics-title'>
						What i have learned in Make it Real's bootcamp:
					</h4>
					<ul className='about__topics-list'>
						<li className='topics-item'>
							Git, Github, Javascript, HTML, CSS, React, React Router Dom, React
							Hooks, etc.
						</li>
						<li className='topics-item'>
							Communicate and work remotely at the most efficient way.
						</li>
						<li className='topics-item'>
							Enforce, autodidact and fast learning.
						</li>
					</ul>
				</div>
			</div>

			<footer className='footer__container'>
				<div className='footer__email-container'>
						<span className='footer__email-title'>Email:</span>
						<span className='footer__email'>adriancvilla@gmail.com</span>
				</div>
				<a
					className='footer__title'
					target='_blank'
					href='https://github.com/AdrianVilla1504'
					type='button'
				>
					Click here to see my github profile
				</a>
			</footer>
		</div>
	);
};

export default About;
