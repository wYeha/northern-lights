// slider start

let offset = 0; 
const sliderLine = document.querySelector('.slider-line');
const btnLeft = document.querySelector('.arrow-left');
const btnRight = document.querySelector('.arrow-right');
const photos = document.querySelectorAll('.slider-photo')

let i = 0;

photos[0].style.width = 300 + 'px';
photos[1].style.width = 410 + 'px';
photos[2].style.width = 410 + 'px';
photos[3].style.width = 300 + 'px';

btnRight.addEventListener('click', function(){
	if(i>1){
		btnRight.style.disabled='true';
	}
	else{
		offset+=300+24;
		sliderLine.style.left = -offset + 'px';
		i++;
		for(k=0; k<4; k++){
			if(k==i+1 || k==i+2){
				photos[k].style.width = 410 + 'px';
			}
			else{
				photos[k].style.width = 300 + 'px';
			}
		}
	}
	
});

btnLeft.addEventListener('click', function(){
	if (i<0){
		btnLeft.style.disabled = 'true';
	}
	else{
		offset-=300+24;
		sliderLine.style.left = -offset + 'px';
		i--;
		for(k=0; k<4; k++){
			if(k==i+1 || k==i+2){
				photos[k].style.width = 410 + 'px';
			}
			else{
				photos[k].style.width = 300 + 'px';
			}
		}
	}
});