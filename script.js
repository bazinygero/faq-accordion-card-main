document.querySelectorAll('.accordion__question').forEach((item) => {
	item.addEventListener('click', (event) => {
		
		let accordionCollapse = item.nextElementSibling;

		if (!item.classList.contains('collapsing')) {
			// open item
			if (!item.classList.contains('open')) {
				
                accordionCollapse.style.display = 'block';
				let accordionHeight = accordionCollapse.clientHeight;
				console.log(accordionHeight);

				setTimeout(() => {
					accordionCollapse.style.height = accordionHeight + 'px';
					accordionCollapse.style.display = '';
				}, 1);

				accordionCollapse.classList = 'accordion__collapse collapsing';

				setTimeout(() => {
					console.log('open content');
					accordionCollapse.classList = 'accordion__collapse collapse open';
				}, 300);
			}
			// close item
			else {
				
                accordionCollapse.classList = 'accordion__collapse collapsing';

				setTimeout(() => {
					accordionCollapse.style.height = '0px';
				}, 1);

				setTimeout(() => {
					console.log('close content');
					accordionCollapse.classList = 'accordion__collapse collapse';
					accordionCollapse.style.height = '';
				}, 300);
			}

			item.classList.toggle('open');
		}
	});
});