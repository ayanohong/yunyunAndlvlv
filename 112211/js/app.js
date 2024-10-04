new Vue({
    el: '#app',
    data: {
        title: '云云和绿绿',
        subtitle1: '云云爱绿绿',
        subtitle2: '绿绿更爱云云',
        loveMessage: 'love you',
        currentImage: './img/2.jpg',
        images: {
            yunyun: './img/yunyun.jpg',
            lvlv: './img/lvlv.jpg'
        }
    },
    methods: {
        changeImage(person) {
            this.currentImage = this.images[person];
        },
        openBilibili() {
            window.open('https://www.bilibili.com', '_blank');
        },
        changeButtonColor(event) {
            event.target.style.backgroundColor = 'rgb(187, 184, 185)';
        },
        resetButtonColor(event) {
            event.target.style.backgroundColor = 'white';
        },
        showQQ() {
            alert('QQ账号: 123456789');
        },
        showWeChat() {
            alert('微信账号: wxid_abcdefg');
        }
    }
});