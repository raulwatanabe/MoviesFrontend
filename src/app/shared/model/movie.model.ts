import { SafeResourceUrl } from '@angular/platform-browser';

export class Movie {
    id: string;
    movieName: string;
    genre: string;
    where: string;
    releaseDate: string;
    releaseTime: string;
    movieLink: string;
    registrationDate: string;
    urlSafe: SafeResourceUrl;
}
