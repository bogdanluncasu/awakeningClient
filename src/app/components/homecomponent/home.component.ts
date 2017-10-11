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
        this.game.load.spritesheet('woodcutter', 'assets/game/wood/2.png',266,154);
        this.game.load.spritesheet('stone', 'assets/game/stone/2.png',634,312);    
        this.game.load.image('background', 'assets/game/background.png');
        this.game.load.image('iron', 'assets/game/iron/1.png');
        //this.game.load.image('woodcutter' , 'assets/game/wood/1.png');    
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

        function getFrames(n){
            let frames:number[] = new Array(200);
            for(let i=0; i<n;i++){
                frames[i]=i+1;
            }
            return frames;
        }
        //let sprite = this.game.add.sprite(40, 100, 'farm');
        //sprite.animations.add('millwind',[25,26,27,28,29,30,31,7,8,9,10,11,12,13,14,15,16,17,18,19,20],10,true);
        //sprite.animations.play('millwind');
        let frames_castle:number[] = getFrames(171);
        let castle = this.game.add.sprite(700,0,'castle');
        castle.animations.add('dragonanimation',frames_castle);
        castle.animations.play('dragonanimation',70,true)
        addToggleMouseEventsLisener(castle,this.game);

        let frames_wood:number[] = getFrames(161);
        //let woodcutter = this.game.add.image(60,240,'woodcutter');
        let woodcutter = this.game.add.sprite(22,243,'woodcutter');
        woodcutter.animations.add('cuttree',frames_wood);
        woodcutter.animations.play('cuttree',200,true)
        addToggleMouseEventsLisener(woodcutter,this.game);


        // let iron = this.game.add.image(0,409,'iron');
        // addToggleMouseEventsLisener(iron,this.game);

        let frames_stone:number[] = getFrames(60);
        let stone = this.game.add.sprite(0,409,'stone');
        stone.animations.add('cuttree',frames_stone);
        stone.animations.play('cuttree',15,true)
        addToggleMouseEventsLisener(stone,this.game);

    }


    logout(){
        this.router.navigate(['logout']);
    }

    
}
