import React from "react";
import './PhotosStyle.sass'

const MyAlbums = (props) => {
	return(
		<div className="myAlbums">
			<div className="title">
				<div className="descr">
					Мои альбомы <span>{props.count}</span>
				</div>
				<div className="buttons">
					<button className="btn">Создать альбом</button>
					<button className="btn">Добавить фотографии</button>
				</div>
			</div>
			<div className="albumsItem">
				{props.img1}
				{props.img2}
				{props.img3}
				{props.img4}
			</div>
		</div>
	)
};


export default MyAlbums;