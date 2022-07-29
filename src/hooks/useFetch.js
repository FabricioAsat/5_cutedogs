import { useEffect, useState } from "react";

export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	const [reloadImages, setReloadImages] = useState(false);

	function moreImages() {
		setData(null);
		setIsPending(true);
		setError(null);
		setReloadImages(!reloadImages);
	}

	useEffect(() => {
		async function getData() {
			try {
				const response = await fetch(url);

				if (!response.ok) throw { status: response.status, statusText: response.statusText };

				const data = await response.json();

				setData(data);
				setIsPending(false);
				setError(null);
			} catch (error) {
				setData(null);
				setIsPending(true);
				setError(error);
			}
		}
		getData();
	}, [url, reloadImages]);

	return { data, isPending, error, moreImages };
};
