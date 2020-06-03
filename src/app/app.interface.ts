interface IDownloadUrls {
    svg: string;
    png: string;
    jpg: string;
    raw: string;
    pxd: string;
    psd: string;
}

export interface IPictureDetails {
    id: number;
    name: string;
    link: string;
    description: string;
    creator: string;
    licence: string;
    download: IDownloadUrls;
}
