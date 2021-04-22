/**
 * VUE SLIDER
 */

const app = new Vue ({
    el: '#app',
    data: {
        photos: [
            './img/img-1.jpg',
            './img/img-2.jpg',
            './img/img-3.jpg',
            './img/img-4.jpg',
        ],
        indexPhotos: 0,
        intervalID: 0,
    },
    created() {
        this.startLoop();
    },

    methods: {
        prevPhoto() {
            this.indexPhotos--;

            if (this.indexPhotos < 0 ) {
                this.indexPhotos = this.photos.length - 1;
            }
        },

        nextPhoto() {
            this.indexPhotos++;

            if (this.indexPhotos > (this.photos.length - 1) ) {
                this.indexPhotos = 0;
            } 
        },
        setPhoto(index){
            //console.log(index);
            this.indexPhotos = index;
        },
        startLoop() {
            this.intervalID = setInterval(() => {
                this.nextPhoto();
            }, 3000);
        },
        stopLoop() {
            clearInterval(this.intervalID);
        }
    }
});