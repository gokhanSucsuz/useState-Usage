/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Angular from "./../images/angular.jpg";
import Bootstrap from "./../images/bootstrap5.png";
import Ccsharp from "./../images/ccsharp.png";
import Kompleweb from "./../images/kompleweb.jpg";

const courseMap = {
	Angular,
	Bootstrap,
	Ccsharp,
	Kompleweb
}

export default function Course({ courseName }) {
	return <>
		{console.log(courseName)}
		<div className="img-div">
			<img src={courseMap[courseName]} alt="" />
		</div>
	</>;
}
