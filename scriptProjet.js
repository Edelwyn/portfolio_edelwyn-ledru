let app = Vue.createApp({
    data() {
        return {
            message: "Chargement...",
            messageError: "Désolé, petit problème technique !",
            projetsArr: [],
            isEnglish: false
        };
    },
    mounted() {
        this.message = "Vue a été chargé et montée au DOM (mounted) !";
        fetch("./projects.json") // L'adresse URL
            .then(data => data.json())
            .then(projet => { // Attendre que les données soient converties
                this.projetsArr = projet; //remplace le null par le tableau donne par le fetch
            })
            .catch(error => {
                
            });
    },
    computed: {
        displayedProjets() {
            return this.projetsArr.filter(projet => projet.english === this.isEnglish); //une fois le bouton appuyé, ça renvoie un autre tableau qui match avec le isEnglish, donc si isenglish = true, il va montrer les données qui sont en anglais et isenglish = false en français.
        }
    },
    methods: {//animations hover
        animationEnter(e) {
            gsap.to(e.currentTarget, { duration: 0.3, width: "100%", ease: "power1.out" });
        },
        animationLeave(e) {
            gsap.to(e.currentTarget, { duration: 0.3, width: "80%", ease: "power1.out" });
        }
    }
});
app.mount("#app");
