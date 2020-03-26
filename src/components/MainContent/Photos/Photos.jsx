import React from "react";
import './PhotosStyle.sass';
import './../twocolumn/FriendsPage/FriendsPageStyle.sass';
import MyAlbums from "./MyAlbums";
import MyPhotos from "./MyPhotos";

const Photos = (props) => {

	let albumsItem = props.state.dataAlbums
		.map(item => <MyAlbums img1={item.img1} img2={item.img2} img3={item.img3} img4={item.img4} count={item.count}/>);
	let photosItem = props.state.dataPhotos
		.map(item => <MyPhotos img1={item.img1} img2={item.img2} img3={item.img3} img4={item.img4} count={item.count}/>);

	return(
		<div className="photosWrapper">
			{albumsItem}
			{photosItem}
		</div>
	)
};

export default Photos;

