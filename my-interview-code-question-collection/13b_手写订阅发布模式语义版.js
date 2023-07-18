class SubPub {
    // 一个subject队列，每个都subject缀着一堆观察者(假设observer是一堆函数)
    constructor() {
        this.subjects = {}
    }
    subscribe(subject, observer) {
        if (!this.subjects[subject]) {
            this.subjects[subject] = [observer]
        }
        else this.subjects[subject].push(observer)
    }
    publish(subject, info) {
        this.subjects[subject].forEach((item)=>{
            item(info)
        })

    }
    unsubscribe() {}
}

let subpub = new SubPub()

function oberver1 (info) {
    console.log('oberver1 knows',info);
}

function oberver2 (info) {
    console.log('oberver2 knows',info);
}

subpub.subscribe("subject1", oberver1)
subpub.subscribe("subject1", oberver2)
subpub.publish("subject1", "subject1发布了a文章");