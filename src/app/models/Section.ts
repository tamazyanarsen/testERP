export interface Section {
    isMain?: boolean;
    items?: any[];
    name: string;
    sections?: Section[];
    sale?: number;
}
