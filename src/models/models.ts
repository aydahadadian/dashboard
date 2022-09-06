export interface chartModel {
    id:number;
    type:string;
    dataLabels:{label:string;data:number}[]
}

export interface boxModel {
    id:number;
    title:string;
    desc:string;
    details:string;
    bg:string
}

export interface cardModel {
    title:string;
    details:string;
    number:string;
    icon: any;
    bg:string
}

export interface tableModel {
    id:number;
    companies:string;
    companiesImg:string;
    members:{name:string;img:string}[];
    budget: string;
    rate:number
}
export interface locationModel {
    latitude:number | string;
    longitude:number | string;
    city:string;
    country:string
}

export interface valueModel {
    id: number;
    wikiDataId: number | string;
    type: string;
    city: string;
    name: string;
    country: string;
    countryCode: string;
    region:string;
    regionCode: number | string;
    latitude: number | string;
    longitude: number | string;
    population: number | string
}




