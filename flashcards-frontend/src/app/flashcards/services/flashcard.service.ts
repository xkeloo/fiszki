import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FlashcardListModel } from '../models/FlashcardListModel';
import { FlashcardModel } from '../models/FlashcardModel';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  private flashcardPath = environment.apiUrl + 'flashcards';

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    //let headers = new HttpHeaders();
     // headers = headers.set('Authorization', `Bearer ${this.authService.getToken()}`);
    //return this.http.post(this.flashcardPath, data, {headers})
    return this.http.post(this.flashcardPath, data)
  }

  getFlashcards(): Observable<Array<FlashcardListModel>> {
    return this.http.get<Array<FlashcardListModel>>(this.flashcardPath)
  }

  getFlashcard(id: number): Observable<FlashcardModel> {
    return this.http.get<FlashcardModel>(this.flashcardPath + '/' + id)
  }

  deleteFlashcard(id: number): Observable<FlashcardModel> {
    return this.http.delete<FlashcardModel>(this.flashcardPath + '/' + id)
  }

  editFlashcard(data: any) {
    return this.http.put(this.flashcardPath, data)
  }
}
