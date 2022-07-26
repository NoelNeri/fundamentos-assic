const BASE_URL = 'https://dog.ceo/api/breeds/image/random';

//const BASE_URL = 'https://cataas.com/'

// const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

// testar depois. o site estava fora. erro 503

//const BASE_URL = 'https://thatcopy.pw/catapi/rest/';


const catbtn = document.getElementById('change-dog');

const getDogs = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
		return json.message;
	}
	catch (e) {
		console.log(e.message);
	}
			
};

const loadImg = async () => {
	const catImg = document.getElementById('dog');
	catImg.src = await getDogs();
};

catbtn.addEventListener('click', loadImg);

loadImg();

