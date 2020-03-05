import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'client';

  ngOnInit() {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWJqZWN0IjoyLCJjcmVhdGlvbl90aW1lIjoxNTc5MTIxNDE2LCJleHBpcmF0aW9uX3RpbWUiOjE1NzkxMjUwMTZ9.bQs_8AckJQ0f2PgoZNI8ogPetyzsy4CugNIiTT3gN-w';
    sessionStorage.setItem('api_token', token);
  }
}
