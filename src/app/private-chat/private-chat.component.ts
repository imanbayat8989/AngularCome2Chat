import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChatService } from '../Services/chat.service';

@Component({
  selector: 'app-private-chat',
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.css']
})
export class PrivateChatComponent implements OnInit {

  @Input() toUser = '';

  constructor(public activeModal: NgbActiveModal, public chatService: ChatService) { }
  NgDestroy():void {
    this.chatService.closePrivateChatMessage(this.toUser);

  }

  ngOnInit(): void {
  }

  sendMessage(content:string){
    this.chatService.sendPrivateMessage(this.toUser, content);

  }

}
