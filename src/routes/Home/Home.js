import React from 'react'
import { Link } from 'react-router-dom'
import * as path from 'path'

import './Home.css'



function Home() {
	const recent = [
		'C:/Users/luka1/Projects/this-plugin-actually-exists-lol',
		'C:/Users/luka1/Projects/robux-generator-plugin'
	]

	return (
		<div className="home">
			<div className="home__actions">
				<h2>Start</h2>
				<ul className="home__actions__list">
					<li>
						<Link to="/new">New Plugin</Link>
					</li>
					<li>
						<button className="home__actions__button">Open Plugin</button>
					</li>
				</ul>
			</div>
			<div className="home__recent">
				<h2 className="home__recent__title">Recent</h2>
				{
					recent.length ? (
						<ul className="home__recent__list">
							{recent.map(v => (
								<li key={v}>
									<Link to={`/editor?project=${v}`}>
										{path.basename(v)}
									</Link>
									<span className="home__recent__item-path">
										{v}
									</span>
								</li>
							))}
						</ul>
					) : (
						<div>
							You have no recent plugins
						</div>
					)
				}
			</div>
		</div>
	)
}

export default Home