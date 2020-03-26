import React from "react";
import './PhotosStyle.sass'

const MyPhotos = (props) => {
	return(
		<div className="myPhotos">
			<div className="title">
				<div className="descr">
					Мои фотографии <span>{props.count}</span>
				</div>
			</div>
			<div className="photosItem">
				{props.img1}
				{props.img2}
				{props.img3}
				{props.img4}
			</div>
		</div>
	)
};

export default MyPhotos;