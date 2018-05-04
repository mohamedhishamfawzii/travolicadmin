import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {RequestMethod, RequestOptions} from '@angular/http';
import {HttpClient} from '@angular/common/http';


@Injectable()
export  class BackendService {

  newsId;
  blogId;
  success;
  url='http://167.99.42.100/' ;

  constructor(private http: Http) {
  }

  getSearches(): Promise<any> {
    const url = this.url+`api/status/search_history `;
    const hh = new Headers();
    hh.append('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsaWVudEB0cmF2b2xpYy5jb20iLCJuYW1lIjoiVHJhdm9pYyBDbGllbnQgV2ViIEFwcGxpY2F0aW9uIiwiX2lkIjoiNWFhMGZmOTI4MTAwNzg0YjQzYmI4YjNhIiwiaWF0IjoxNTIwNTAwNjU1fQ.Vkqv2KJJDhVRTlts2N_HZViUNQugTn5Hju7hKZB9Dn0');
    const options = new RequestOptions({
      headers: hh
    });
    return this.http.get(url, options
    ).toPromise().then(response => {
      return response ;
    });
  }

  getRedirections(): Promise<any> {
    const url = this.url+`api/status/redirection`;
    const hh = new Headers();
    hh.append('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsaWVudEB0cmF2b2xpYy5jb20iLCJuYW1lIjoiVHJhdm9pYyBDbGllbnQgV2ViIEFwcGxpY2F0aW9uIiwiX2lkIjoiNWFhMGZmOTI4MTAwNzg0YjQzYmI4YjNhIiwiaWF0IjoxNTIwNTAwNjU1fQ.Vkqv2KJJDhVRTlts2N_HZViUNQugTn5Hju7hKZB9Dn0');
    const options = new RequestOptions({
      headers: hh
    });
    return this.http.get(url, options
    ).toPromise().then(response => {
      return response ;
    });
  }
  getNewsletter(): Promise<any> {
    const url = this.url+`api/status/newsletter`;
    const hh = new Headers();
    hh.append('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsaWVudEB0cmF2b2xpYy5jb20iLCJuYW1lIjoiVHJhdm9pYyBDbGllbnQgV2ViIEFwcGxpY2F0aW9uIiwiX2lkIjoiNWFhMGZmOTI4MTAwNzg0YjQzYmI4YjNhIiwiaWF0IjoxNTIwNTAwNjU1fQ.Vkqv2KJJDhVRTlts2N_HZViUNQugTn5Hju7hKZB9Dn0');
    const options = new RequestOptions({
      headers: hh
    });
    return this.http.get(url, options
    ).toPromise().then(response => {
      return response ;
    });
  }
  getCounters( parameters :string) :Promise<any>{
    const url = this.url+`api/status/getcounters/`+parameters;

    const hh = new Headers();
    hh.append('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsaWVudEB0cmF2b2xpYy5jb20iLCJuYW1lIjoiVHJhdm9pYyBDbGllbnQgV2ViIEFwcGxpY2F0aW9uIiwiX2lkIjoiNWFhMGZmOTI4MTAwNzg0YjQzYmI4YjNhIiwiaWF0IjoxNTIwNTAwNjU1fQ.Vkqv2KJJDhVRTlts2N_HZViUNQugTn5Hju7hKZB9Dn0');
    const options = new RequestOptions({
      headers: hh
    });
    return this.http.get(url, options
    ).toPromise().then(response => {
      return response ;
    });

  }

  addArticle(title, body,category): Promise<any> {

const url = this.url+`api/models/blog`;
const hh = new Headers();
hh.append('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsaWVudEB0cmF2b2xpYy5jb20iLCJuYW1lIjoiVHJhdm9pYyBDbGllbnQgV2ViIEFwcGxpY2F0aW9uIiwiX2lkIjoiNWFhMGZmOTI4MTAwNzg0YjQzYmI4YjNhIiwiaWF0IjoxNTIwNTAwNjU1fQ.Vkqv2KJJDhVRTlts2N_HZViUNQugTn5Hju7hKZB9Dn0');
const options = new RequestOptions({
  headers: hh
});

const sdata = {
  'title': title,
  'body': body,
  'category':category
}

return this.http.post(url, sdata,options).toPromise().then(response => {
    this.blogId= response.json().response._id;
    this.success=true;
  return response.json();
});
}

  addNews(title, body): Promise<any> {

const url = this.url+`api/models/news`;
const hh = new Headers();
hh.append('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsaWVudEB0cmF2b2xpYy5jb20iLCJuYW1lIjoiVHJhdm9pYyBDbGllbnQgV2ViIEFwcGxpY2F0aW9uIiwiX2lkIjoiNWFhMGZmOTI4MTAwNzg0YjQzYmI4YjNhIiwiaWF0IjoxNTIwNTAwNjU1fQ.Vkqv2KJJDhVRTlts2N_HZViUNQugTn5Hju7hKZB9Dn0');
const options = new RequestOptions({
  headers: hh
});

const sdata = {
  'title': title,
  'body': body
}

return this.http.post(url, sdata,options).toPromise().then(response => {
  console.log(response.json());
  this.newsId= response.json().response._id;
    console.log(this.newsId);
this.success=true;
  return response.json();
});
}
sendFileArticle(id: string, files : File[]): void {
  console.log("here posting");
    const url = this.url+`api/img_upload/Blog/`+id;
    const hh = new Headers();
    hh.append('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsaWVudEB0cmF2b2xpYy5jb20iLCJuYW1lIjoiVHJhdm9pYyBDbGllbnQgV2ViIEFwcGxpY2F0aW9uIiwiX2lkIjoiNWFhMGZmOTI4MTAwNzg0YjQzYmI4YjNhIiwiaWF0IjoxNTIwNTAwNjU1fQ.Vkqv2KJJDhVRTlts2N_HZViUNQugTn5Hju7hKZB9Dn0');
    const options = new RequestOptions({
      headers: hh
    });


    const formData = new FormData();
      for ( let file of files) {
           formData.append('file', file, file.name);

      }
        console.log("here posting");
    this.http.post(url, formData, options).subscribe();
  }
  sendFileNews(id: string, files : File[]): void {
      const url = this.url+`api/img_upload/News/`+id;
      const hh = new Headers();
      hh.append('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsaWVudEB0cmF2b2xpYy5jb20iLCJuYW1lIjoiVHJhdm9pYyBDbGllbnQgV2ViIEFwcGxpY2F0aW9uIiwiX2lkIjoiNWFhMGZmOTI4MTAwNzg0YjQzYmI4YjNhIiwiaWF0IjoxNTIwNTAwNjU1fQ.Vkqv2KJJDhVRTlts2N_HZViUNQugTn5Hju7hKZB9Dn0');
      const options = new RequestOptions({
        headers: hh
      });


      const formData = new FormData();
        for ( let file of files) {
             formData.append('file', file, file.name);

        }
      this.http.post(url, formData, options).toPromise().then(
        response=>{
          console.log(response.json());

        }
      );
    }
}
