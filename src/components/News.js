import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export function News(props) {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [totalResults, setTotalResult] = useState(0);
	

	const capitalizeText = (text) => {
		let newText = text.charAt(0).toUpperCase() + text.slice(1);
		return newText;
	};

	const updateData = async () => {
		props.setProgress(0);
		let fetchURL = `https://newsapi.org/v2/top-headlines?country=${props.countryCode}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
		setLoading(true);
		let response = await fetch(fetchURL);
		props.setProgress(30);
		let responseJson = await response.json();
		props.setProgress(50);
		setArticles(responseJson.articles);
		setTotalResult(responseJson.totalResults);
		setLoading(false);
		props.setProgress(100);
	};

	const fetchData = async () => {
		let fetchURL = `https://newsapi.org/v2/top-headlines?country=${props.countryCode}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
		setPage(page + 1);
		let response = await fetch(fetchURL);
		let responseJson = await response.json();
		setArticles(articles.concat(responseJson.articles));
		setTotalResult(responseJson.totalResults);
	};

	useEffect(() => {
		document.title = `NewsMonkey - ${capitalizeText(props.category)}`;
		updateData();
		// eslint-disable-next-line
	}, []);

	// async componentDidMount() {
	// 	updateData();
	// }

	// handleNextClick = async () => {
	// 	setState({
	// 		page: page + 1,
	// 	});
	// updateData();
	// };

	// handlePrevClick = async () => {
	// 	setState({
	// 		page: page - 1,
	// 	});
	// updateData();
	// };

	return (
		<>
			<div style={{margiTop: "90px"}}>
				<h2 className="text-center">NewsMonkey- Top {capitalizeText(props.category)} Headlines</h2>
				{loading && <Loader />}
				<InfiniteScroll
					dataLength={articles.length} //This is important field to render the next data
					next={fetchData}
					hasMore={articles.length !== totalResults}
					loader={<Loader />}
					endMessage={
						<p style={{ textAlign: "center" }}>
							<b>Yay! You have seen it all</b>
						</p>
					}
					// below props only if you need pull down functionality
					// refreshFunction={refresh}
					// pullDownToRefresh
					// pullDownToRefreshThreshold={50}
					// pullDownToRefreshContent={
					// 	<h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
					// }
					// releaseToRefreshContent={
					// 	<h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
					// }
				>
					<div className="container my-4">
						<div className="row my-5">
							{articles.map((item) => {
								return (
									<div
										className="col-md-4"
										key={item.url}>
										<NewsItem
											title={item.title}
											description={item.description}
											imageURL={item.urlToImage}
											newsURL={item.url}
											source={item.source.name}
											publishedDate={new Date(item.publishedAt).toUTCString()}
											author={item.author ? "Unknown" : item.author}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</InfiniteScroll>

				{/* <div className="container d-flex justify-content-between my-5">
					<button
						disabled={page <= 1}
						onClick={handlePrevClick}
						type="button"
						className="btn btn-dark">
						&larr; Previous
					</button>
					<button
						disabled={page + 1 > Math.ceil(totalResults / 20)}
						onClick={handleNextClick}
						type="button"
						className="btn btn-dark">
						Next &rarr;
					</button>
				</div> */}
			</div>
		</>
	);
}

export default News;

News.defaultProp = {
	apiKey: "831467e1e683490c917fa39a08a1f0de",
	pageSize: "5",
	countryCode: "in",
	category: "general",
};

News.propTypes = {
	apiKey: PropTypes.string,
	pageSize: PropTypes.string,
	countryCode: PropTypes.string,
	category: PropTypes.string,
};
