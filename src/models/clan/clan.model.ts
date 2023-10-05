class Clan {
    name: string;
    totalMemebers: number;
    members: string[]

    constructor(name: string,
        totalmembers: number,
        members: string[]) {
        this.name = name
        this.totalMemebers = totalmembers;
        this.members = members;
    }
}

export default Clan;