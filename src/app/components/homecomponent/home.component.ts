import { Router } from '@angular/router';
import { router } from './../../app.router';
import { UserService } from './../../services/user.service';
import { SecurityService } from './../../services/security.service';
import { UserModel } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import 'rxjs/add/operator/map';

import * as Phaser from 'phaser-ce';
@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private securitySevice:SecurityService,
        private userService:UserService,
        private router: Router,private snackBar: MdSnackBar){}

    game: Phaser.Game;
    ngOnInit(){
        this.game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'gameWindow', { preload: this.preload, create: this.create });
    }


    
    preload() {   
        this.game.load.spritesheet('castle', 'assets/game/castle/3.png',436,280);    
        this.game.load.image('background', 'assets/game/background.png');    
        //this.game.load.image('castle','assets/game/castle/3.gif');
        
    }

    create() {
        this.game.add.image(0,0,'background');

        function addToggleMouseEventsLisener(_object,game){
            _object.inputEnabled = true;
            _object.events.onInputOver.add(()=>{
                game.canvas.style.cursor = "pointer";
            },this);
            _object.events.onInputOut.add(()=>{
                game.canvas.style.cursor = "default";
            },this);
        };
        //let sprite = this.game.add.sprite(40, 100, 'farm');
        //sprite.animations.add('millwind',[25,26,27,28,29,30,31,7,8,9,10,11,12,13,14,15,16,17,18,19,20],10,true);
        //sprite.animations.play('millwind');
        let frames:number[] = new Array(200);
        for(let i=0; i<170;i++){
            frames[i]=i+1;
        }
        let castle = this.game.add.sprite(700,0,'castle');
        castle.animations.add('millwind',frames);
        castle.animations.play('millwind',70,true)
        addToggleMouseEventsLisener(castle,this.game);
        
    }




    
}
