import Image from '../asset/image.js'

export default {
    header: {
        name: "TAKENOKO",
        position: "software engineer"
    },
    aboutme: {
        text: [
            "Web Developer Jobs in Tokyo."
        ]
    },
    skillset: [{
        no: 1,
        title: "Application",
        texts: [
            "Single Page Aplication (javascript)",
            "Android (kotlin, java)",
            "iOS (Swift, Obj-C)"
        ]
    }, {
        no: 2,
        title: "Backend",
        texts: [
            "Spring",
            "node.js",
            "golang"
        ]
    }],
    product: [
        {
            no: 1,
            img: Image.icon,
            title: "android app",
            text: "blackboard app, notify app",
            url: "https://play.google.com/store/apps/dev?id=5785483366313980962&hl=ja"
        },
        {
            no: 2,
            img: Image.github,
            title: "GitHub",
            text: "Repositories",
            url: "https://github.com/TakenokoTech"
        }
    ],
    career: [
        {
            year: "2016",
            title: "Single Page App",
            text: "I got react. Been was impressed with quality animation and reusable components. javascript is the most user friendly language."
        },
        {
            year: "2017",
            title: "BOT system",
            text: "Using LINE Platform and Amazon Alexa. Knowledge of API technologies and web standards such as OAuth 2.0."
        },
        {
            year: "2018",
            title: "iOS, Android Apps",
            text: "Reactive Extensions (ReactiveX) is an interesting library. Cool asynchronous processing and error handling. I was captivated."
        }
    ],
    contact: {
        email: "takenoko.tech@gmail.com"
    },
    fotter: {
        text: "© 2018 Takenoko Tech."
    }
}
