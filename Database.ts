export class Database<T>
{
    private Entries : T[] = [];

    addEntry(entry : T)
    {
        this.Entries.push(entry);
    }

    getAllEntries() : T[]
    {
        return this.Entries;
    }
}