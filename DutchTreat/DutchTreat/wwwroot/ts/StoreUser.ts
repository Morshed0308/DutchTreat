export class StoreCustomer {

    constructor(private firstName: string, private lastName: string) {

    }

    public visits: number = 0;
    private myName: string;

    public showName() {
        alert(this.firstName + " " + this.lastName);
    }

    set name(val) {
        this.myName = val;

    }
    get name() {
        return this.myName;
    }


}