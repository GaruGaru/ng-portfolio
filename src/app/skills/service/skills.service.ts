import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Skill} from '../models/skill';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getSkills(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(environment.endpoint + '/languages');
  }

}
