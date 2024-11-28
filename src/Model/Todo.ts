export class Todo {

    constructor(srno: number, title: string, desc: string, isactive: boolean) {
        this.srno = srno;
        this.title = title;
        this.desc = desc;
        this.isactive = isactive;
    }

    srno: number
    title: string
    desc: string
    isactive: boolean
}