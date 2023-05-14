import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]})

export class HomeComponent {
  reviewUrl = 'http://127.0.0.1:3000/user/review'
  contactUsUrl = 'http://127.0.0.1:3000/user/contactus'
  headers= new HttpHeaders()
  .set('Access-Control-Allow-Origin', '*')
  . set('content-type','application/json') 
  contactusForm = new FormGroup({name: new FormControl(),
  number: new FormControl(Validators.required),
  email: new FormControl(),
  message: new FormControl()} ) 
  name = "Angular";
  public user: string = "";
  reviewStr: string = "";
  public review: boolean = true;
  public tools: object = {
    items: ['Undo', 'Redo', '|',
        'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
        'SubScript', 'SuperScript', '|',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
        'Indent', 'Outdent', '|', 'CreateLink',
        'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
  };
  public iframe: object = { enable: true };
  public height: number = 500;


  @ViewChild('reviewContent')
  public reviewObject!: RichTextEditorComponent;
  reviewString!: string;
  constructor(private http: HttpClient){}

  async formSubmit() {
      console.warn(this.contactusForm.value)
      await this.http.put(this.contactUsUrl, this.contactusForm.value).subscribe((res) => {
        var data = JSON.parse(JSON.stringify(res))
        if (data.acknowledged == true) {
          alert("Thank you for your review!!");
        }
        else{
          alert("Try again in a few seconds :(");
        }
        this.contactusForm.reset();
      })
  }

  setUser(u: string){
    this.user = u;
    console.log("setUser", u,this.user);
  }

  playPause() {
    var myVideo: any = document.getElementById("my_video_1");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }

  makeBig() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.style = "width: 100%; height: 100; position: relative; bottom: 30%;";
  }

  makeSmall() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.style = "width: 50%; height: 50%; position: relative; bottom: 10%;";
  }

  makeNormal() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.style = "width: 80%; height: 60%; position: relative; bottom: 20%;";
  }

  skip(value: any) {
    let video: any = document.getElementById("my_video_1");
    video.currentTime += value;
  }

  restart() {
    let video: any = document.getElementById("my_video_1");
    video.currentTime = 0;
  }

  async submitReview(){
    this.setUser(this.user);
    this.reviewString = this.reviewObject.getHtml();
    console.log(this.reviewString);
    const body = {user: this.user, review: this.reviewString.toString()}
    console.log(body);
    await this.http.put(this.reviewUrl, {user: this.user, review: this.reviewString.toString()}).subscribe(data => {
        console.log(data);
      })
  }
}   
//new branch

