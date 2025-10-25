let app = Vue.createApp({
    data() {
        return {
            message: "Chargement...",
            projetsArr: null,

        };
    },
    mounted() {
        this.message = "Vue a été chargé et montée au DOM (mounted) !";
        fetch("./projects.json") // L'adresse URL
            .then(data => data.json())
            .then(projet => { // Attendre que les données soient converties
                this.projetsArr = projet; //remplace le null
                console.log(projet.images);
            })
            .catch(error => {

            });
    },
    methods: {//animations hover
        animationEnter(e) {
            gsap.to(e.currentTarget, { duration: 0.3, width: "100%", ease: "none" });
        },
        animationLeave(e) {
            gsap.to(e.currentTarget, { duration: 0.3, width: "60%", ease: "none" });
        }
    }
});
app.mount("#app");
