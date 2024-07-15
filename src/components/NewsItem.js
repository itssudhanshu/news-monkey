import React from "react";

export function NewsItem(props) {
	let { title, description, imageURL, newsURL, source, publishedDate, author } = props;
	return (
		<div>
			<div className="card my-2">
				<div style={{ display: "flex", justifyContent: "end" }}>
					<span className="position-absolute badge rounded-pill bg-danger">{source}</span>
				</div>
				<img
					src={
						!imageURL
							? "https://cdn.thewire.in/wp-content/uploads/2024/01/09132719/image-1705-800x282.png"
							: imageURL
					}
					className="card-img-top"
					alt="..."
					style={{ height: "15rem" }}
				/>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
					<p className="card-text">
						<small className="text-body-secondary">
							By {author} at {publishedDate}
						</small>
					</p>
					<a
						href={newsURL}
						rel="noreferrer"
						target="_blank"
						className="btn btn-sm btn-dark d-flex justify-content-center text-center">
						Read More
					</a>
				</div>
			</div>
		</div>
	);
}

export default NewsItem;
