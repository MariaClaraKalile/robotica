let container = document.querySelector('.container');
		let items = document.querySelectorAll('.item');

		let scroll = 0;
		let index = 0;

		container.addEventListener('wheel', (e) => {
			scroll += e.deltaY;
			if (scroll < 0) {
				scroll = 0;
			} else if (scroll > container.scrollWidth - container.clientWidth) {
				scroll = container.scrollWidth - container.clientWidth;
			}
			container.scrollTo(scroll, 0);
		});

		setInterval(() => {
			index = (index + 1) % items.length;
			scroll = items[index].offsetLeft;
			container.scrollTo(scroll, 0);
		}, 5000);