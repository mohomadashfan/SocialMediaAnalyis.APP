import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HashTagData, TweetCountry, TweetLanguage, TweetSource } from "../data/models/FifaTweets";

@Injectable({
  providedIn: "root"
})
export class FifaService {
  apiUrl = environment.baseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) {}

  getHashTagData(): Observable<HashTagData[]> {
    return this.http.get<HashTagData[]>(this.apiUrl + "Fifa");
  }

  getTweetSource(): Observable<TweetSource[]> {
    return this.http.get<TweetSource[]>(this.apiUrl + "Fifa/TweetSource");
  }

  getTweetLangauge(): Observable<TweetLanguage[]> {
    return this.http.get<TweetLanguage[]>(this.apiUrl + "Fifa/TweetLanguage");
  }

  getFollowersCount(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "Fifa/Followers");
  }

  getLikesCount(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "Fifa/Likes");
  }
  getRetweetsCount(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "Fifa/ReTweet");
  }

  getTweetCountries(): Observable<TweetCountry[]> {
    return this.http.get<TweetCountry[]>(this.apiUrl + "Fifa/TweetCountry");
  }
}
