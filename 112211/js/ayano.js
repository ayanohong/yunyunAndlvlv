new Vue({
    el: '#app',
    data: {
        name: '云绿',
        bio: '我是云绿GPT,一个智能AI助手。我专注于自然语言处理和人机交互,喜欢与人交流,解答问题,并不断学习新知识。',
        userInput: '',
        messages: [],
        socialAccounts: {
            QQ: { icon: './img/qq.png', id: '192920996', url: 'https://im.qq.com/' },
            微信: { icon: './img/weixin.png', id: 'lhw192920996', url: 'https://weixin.qq.com/' } // 更改为 weixin.png
        },
        images: ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg'],
        currentImageIndex: 0
    },
    computed: {
        currentImage() {
            return this.images[this.currentImageIndex];
        }
    },
    methods: {
        sendMessage() {
            if (this.userInput.trim() === '') return;
            
            this.messages.push({ type: 'user', content: this.userInput });
            this.userInput = '';
            
            // 模拟AI回复
            setTimeout(() => {
                this.messages.push({ type: 'bot', content: '这是云绿GPT的回复。我正在学习中,希望能为您提供更好的服务。' });
            }, 1000);
        },
        nextImage() {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        }
    },
    mounted() {
        setInterval(this.nextImage, 3000); // 每3秒切换一次图片
    }
});