import { useState } from 'react';
import axios from 'axios';

export const useForm = (initialInfo, data, setData, page, setResults) => {
	const [info, setInfo] = useState(initialInfo);
	const [error, setError] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);

	const handleChange = (e) =>
		setInfo({ ...info, [e.target.name]: e.target.value });

	const handleRadio = (field, value) => setInfo({ ...info, [field]: value });

	const handleSubmit = () => {
		if (!info.experience) {
			setError(true);
			return;
		}

		// console.log(info);
		axios
			.post(`${process.env.REACT_APP_BACKEND_API}/${page}`, info)
			.then((res) => {
				setData([...data, res.data[page]]);
				setResults([...data, res.data[page]]);
				setInfo(initialInfo);
				setModalOpen(false);
			})
			.catch((err) => console.log(err));
	};

	return [
		info,
		error,
		modalOpen,
		setModalOpen,
		handleChange,
		handleRadio,
		handleSubmit,
	];
};
