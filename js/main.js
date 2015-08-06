window.onload = function() {
    // William Aulson - Research Stuff
    
    "use strict";
    
    var game = new Phaser.Game(500, 500, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update } );
    
    function preload()
    {    
    }
    
    var graphics;
    var canvas;
     
    function create()
    {
    	    game.world.setBounds(0, 0, 500, 700);
    	    
    	    canvas = game.make.bitmapData(500, 500);
    	    canvas.addToWorld();
    	    
    	    //Canvas line functions are not working. Can strokestyle be set to a hex color value?
    	    
    	    canvas.ctx.strokeStyle = "white";
    	    canvas.ctx.lineWidth = 2;
    	    canvas.ctx.beginPath();
            canvas.ctx.moveTo(25,25);
            canvas.ctx.lineTo(105,25);
            canvas.ctx.lineTo(25,105);
            canvas.ctx.fill();
            canvas.update();
    	    
    	    //Graphics object (works but less efficient - maybe?)
    	    /*
    	    graphics = game.add.graphics(0, 0);
    	    //graphics.beginFill(0xFF3300);
    	    graphics.lineStyle(5, 0xffd900, 1);
    	    graphics.moveTo(50,50);
    	    graphics.lineTo(25, 5);
    	    graphics.lineTo(10, 10);
    	    graphics.lineTo(25, 22);
    	    graphics.lineTo(50, 220);
    	    graphics.lineTo(50, 50);
    	    //graphics.endFill();
    	    */
    	    
    }
        
    function update()
    {  
    }
};
