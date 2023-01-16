import { Injectable } from '@angular/core';
import {map, Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CardImageService {
  public uri: string = "https://localhost:7219/card/image/";

  constructor(private http: HttpClient) { }

  public query(cardName: string): Observable<string> {
    // if (environment.useFakeData) {
    //   return this.fakeData()
    //     .pipe(
    //       map(value => value.image_uri)
    //     );
    // }

    return this.http.get<CardImageResponse>(this.uri + `${cardName}`)
      .pipe(
        map(value => value.image_uri)
      )
  }

  private fakeData(): Observable<CardImageResponse> {
    return of({
      image_uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fsad-face&psig=AOvVaw3Q-zmnF24h5Lm8ufC4HKbW&ust=1673922812060000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLjG1cWGy_wCFQAAAAAdAAAAABAE"
    } as CardImageResponse)
  }
}

export interface CardImageResponse {
  image_uri: string;
}
