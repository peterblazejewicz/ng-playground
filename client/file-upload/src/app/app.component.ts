import {OnInit, Component} from '@angular/core';
import {FileUploader} from 'ng2-file-upload/ng2-file-upload';

const UrlPath = 'http://localhost:3000/api/upload';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})

export class AppComponent implements OnInit {
  title = 'app works!';
  uploader: FileUploader = new FileUploader({url: UrlPath, itemAlias: 'photo'});

  ngOnInit(): void {
    // override the onAfterAddingfile property of the uploader so it doesn't
    // authenticate with //credentials.
    this.uploader.onAfterAddingFile = file => file.withCredentials = false;
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('Image uploaded');
      console.log(item, response, status, headers);
    }
  }
}
