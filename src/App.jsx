import image from './assets/images/image-qr-code.png';

function Card() {
	return (
		<div className="card">
			<div className="img">
				<img src={image} alt="" />
			</div>
			<div className="text">
				<h3>Improve your front-end skills by building projects</h3>
				<p>
					Scan the QR code to visit Frontend Mentor and take your coding skills
					to the next level
				</p>
			</div>
		</div>
	);
}

export default Card;
