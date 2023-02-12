import Image from '../asset/image.js'

export default {
    header: {
        name: "TAKENCOO",
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
            "Single Page Aplication (JavaScript, TypeScript)",
            "Android (Kotlin, Java)",
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
    }, {
        no: 3,
        title: "Certificate",
        texts: [
            "Applied Information Technology Engineer",
            "Virtual Reality Specialist"
        ]
    }],
    product: [
        {
            no: 1,
            img: Image.androbo,
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
        },
        {
            no: 3,
            img: Image.qiita,
            title: "Qiita",
            text: "tips",
            url: "https://qiita.com/metanue"
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
        },
        {
            year: "2019",
            title: "Location Based Service",
            text: "Better services can be provided using location. Modern development using Kotlin Coroutines."
        },
        {
            year: "2020",
            title: "HoloLens Apps",
            text: "Provided an immersive experience using Mixed Reality devices."
        },
        {
            year: "2021",
            title: "EdgeAI platform",
            text: "Achieved fast machine learning inference on-device using TensorFlow Lite."
        }
    ],
    contact: {
        email: "takenoko.tech@gmail.com"
    },
    fotter: {
        text: "© 2023 Takenoko."
    },
    caution: {
        product: "The Android robot is reproduced or modified from work created and shared by Google and used according to terms described in the Creative Commons 3.0 Attribution License."
    }
}
